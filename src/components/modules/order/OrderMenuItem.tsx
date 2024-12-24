import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { RootState } from '@/store';
import { addItem, removeItem } from '@/store/reducers/cartReducer';
import { Dish, Dishes } from '@/types/Menu';
import { pluralizeUnit } from '@/utils/stringUtils';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

type IOrderMenuItem = {
  category: string;
  dish: Dish;
};

type IOrderMenuItemInput = {
  quantity: number;
};

const OrderMenuItem = ({ dish, category }: IOrderMenuItem) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [status, setStatus] = useState<'idle' | 'adding' | 'submitting'>(
    'idle',
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IOrderMenuItemInput>();

  const handleAddItem: SubmitHandler<IOrderMenuItemInput> = (
    data: IOrderMenuItemInput,
  ) => {
    setStatus('submitting');
    dispatch(
      addItem({
        category: category as keyof Dishes,
        dish: dish,
        quantity: data.quantity,
      }),
    );

    setStatus('idle');
  };

  const itemIndex = cartItems.findIndex(
    (cartItem) => cartItem.dish.id === dish.id,
  );

  const getDishImagePath = (category: string, url: string) =>
    `/menu/${category}/${url}`;

  const handleRemoveItem = () => {
    dispatch(removeItem(dish.id));
    reset({ quantity: dish.perUnit });
  };

  return (
    <div className="flex flex-col gap-y-2 p-4 md:flex-row md:gap-x-8 md:gap-y-0">
      <img
        width={520}
        height={400}
        src={getDishImagePath(category, dish.url)}
        alt={`${dish.title} preview image`}
        className="block max-h-fit w-full rounded md:max-w-[260px]"
      />

      <div className="py-3">
        <h2 className="font-sans text-2xl font-bold text-secondary-800 md:text-3xl">
          {dish.title}
        </h2>
        <p className="mt-2 text-base font-medium text-secondary-800 md:text-xl">
          ${dish.price} / {`${dish.perUnit} ${dish.unit}`}
        </p>
        <p className="mt-2 text-base text-grey-600 md:max-w-[500px]">
          {dish.description}
        </p>

        {itemIndex > -1 && (
          <AddedDishItemMessage
            quantity={cartItems[itemIndex].quantity}
            unit={cartItems[itemIndex].dish.unit}
            onRemove={handleRemoveItem}
          />
        )}

        {status === 'adding' && (
          <form
            className="mt-2 animate-fadeIn"
            onSubmit={handleSubmit(handleAddItem)}
          >
            <Input
              label={`Quantity (${dish.unit})`}
              type="number"
              {...register('quantity', {
                required: 'The quantity of the dish is required',
                min: {
                  value: dish.perUnit,
                  message: `The quantity must at least be ${dish.perUnit} ${dish.unit}`,
                },
              })}
              placeholder="Enter the quantity of this dish"
              error={errors.quantity?.message}
            />

            <div className="mt-2 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <Button size="sm" type="submit" icon="plus" className="w-fit">
                Add now
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

        {status === 'idle' && itemIndex === -1 && (
          <Button
            size="sm"
            variant="secondary"
            type="button"
            icon="plus"
            className="mt-2 animate-fadeIn"
            onClick={() => setStatus('adding')}
          >
            Add food
          </Button>
        )}
      </div>
    </div>
  );
};

type AddDishItemProps = {
  quantity: number;
  unit: string;
  onRemove: () => void;
};

const AddedDishItemMessage = ({
  quantity,
  unit,
  onRemove,
}: AddDishItemProps) => (
  <div className="mt-2 flex animate-fadeIn items-center space-x-3">
    <div className="flex items-center space-x-1">
      <Icon name="checkmark" className="size-[20px] fill-primary-700" />
      <p className="mb-0 font-bold text-primary-700">
        Added ({pluralizeUnit(quantity, unit)})
      </p>
    </div>
    <Button
      variant="secondary"
      size="sm"
      type="button"
      icon="close"
      onClick={onRemove}
    >
      Remove
    </Button>
  </div>
);

export default OrderMenuItem;
