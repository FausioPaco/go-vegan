import { Button } from '@/components/ui/button';
import { CartItem } from '@/types/Cart';
import { getDishImagePath } from '@/utils/cart';
import { formatPrice, pluralizeUnit, truncate } from '@/utils/stringUtils';
import { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IOrderMenuItemInput } from '@/types/Order';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Dishes } from '@/types/Menu';
import { addItem, removeItem } from '@/store/reducers/cartReducer';

const OrderReviewDesktop = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="relative min-w-[80%] overflow-x-auto">
      <table
        className="hidden w-full text-left text-sm md:table"
        summary="List of choices made in the order"
      >
        <thead className="border-b border-grey-400 font-medium text-grey-500">
          <tr className="font-bold">
            <th scope="col">Order</th>
            <th>Quantity</th>
            <th>Price</th>
            {cartItems.length > 1 && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => (
            <OrderReviewItem
              key={cartItem.dish.id}
              cartItem={cartItem}
              canRemove={cartItems.length > 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

type OrderReviewItemProps = { cartItem: CartItem; canRemove?: boolean };

const OrderReviewItem = ({
  cartItem,
  canRemove = false,
}: OrderReviewItemProps) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        <div className="flex gap-x-6">
          <img
            width={520}
            height={400}
            src={getDishImagePath(cartItem.dishCategory, cartItem.dish.url)}
            alt={`${cartItem.dish.title} preview image`}
            className="block max-h-fit w-full rounded md:max-w-[180px]"
          />
          <div className="py-3">
            <h3 className="font-sans text-xl font-bold text-secondary-800 md:text-2xl">
              {truncate(cartItem.dish.title, 28)}
            </h3>
            <p className="mt-2 text-base text-grey-600 md:max-w-[400px]">
              {truncate(cartItem.dish.description, 100)}
            </p>
          </div>
        </div>
      </td>
      <td>
        <ReviewEdit cartItem={cartItem} />{' '}
      </td>
      <td>{formatPrice(cartItem.totalPrice)}</td>
      {canRemove && (
        <td>
          <Button
            variant="secondary"
            size="sm"
            type="button"
            icon="close"
            className="min-w-fit"
            onClick={() => dispatch(removeItem(cartItem.dish.id))}
          >
            Remove
          </Button>
        </td>
      )}
    </tr>
  );
};

type ReviewEditProps = {
  cartItem: CartItem;
};

const ReviewEdit = ({ cartItem }: ReviewEditProps) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState<'idle' | 'updating'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrderMenuItemInput>();

  const handleUpdateItem: SubmitHandler<IOrderMenuItemInput> = (
    data: IOrderMenuItemInput,
  ) => {
    dispatch(
      addItem({
        category: cartItem.dishCategory as keyof Dishes,
        dish: cartItem.dish,
        quantity: data.quantity,
      }),
    );

    setStatus('idle');
  };

  return (
    <>
      {status === 'idle' && (
        <div className="flex items-center gap-x-2">
          {pluralizeUnit(cartItem.quantity, cartItem.dish.unit)}
          <Icon
            width={24}
            height={24}
            name="pencil"
            className="cursor-pointer fill-primary-700 transition-colors duration-300 hover:fill-primary-800"
            onClick={() => setStatus('updating')}
          />
        </div>
      )}

      {status === 'updating' && (
        <form
          className="mt-2 animate-fadeIn"
          onSubmit={handleSubmit(handleUpdateItem)}
        >
          <Input
            label={`Quantity (${cartItem.dish.unit})`}
            type="number"
            {...register('quantity', {
              required: 'The quantity of the dish is required',
              value: cartItem.quantity,
              min: {
                value: cartItem.dish.perUnit,
                message: `The quantity must at least be ${cartItem.dish.perUnit} ${cartItem.dish.unit}`,
              },
            })}
            error={errors.quantity?.message}
          />

          <div className="mt-2 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <Button
              size="sm"
              type="submit"
              onClick={() => handleSubmit(handleUpdateItem)}
              className="w-fit"
            >
              Update
            </Button>

            <Button
              variant="secondary"
              size="sm"
              type="button"
              onClick={() => setStatus('idle')}
              className="w-fit"
            >
              Cancel
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default OrderReviewDesktop;
