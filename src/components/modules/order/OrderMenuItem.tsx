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
  const [isAdding, setIsAdding] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IOrderMenuItemInput>();

  const onSubmit: SubmitHandler<IOrderMenuItemInput> = (
    data: IOrderMenuItemInput,
  ) => {
    setIsSubmiting(true);
    dispatch(
      addItem({
        category: category as keyof Dishes,
        dish: dish,
        quantity: data.quantity,
      }),
    );

    setIsSubmiting(false);
    setIsAdding(false);
  };

  const itemIndex = cartItems.findIndex(
    (cartItem) => cartItem.dish.id === dish.id,
  );

  const removeMenuItem = () => {
    dispatch(removeItem(dish.id));
    reset({
      quantity: undefined,
    });
  };

  return (
    <div className="flex flex-col gap-y-2 p-4 md:flex-row md:gap-x-8 md:gap-y-0">
      <img
        width={520}
        height={400}
        src={`/menu/${category}/${dish.url}`}
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
          <div className="mt-2 flex animate-fadeIn items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Icon name="checkmark" className="size-[20px] fill-primary-700" />
              <p className="mb-0 font-bold text-primary-700">
                Added (
                {pluralizeUnit(
                  cartItems[itemIndex].quantity,
                  cartItems[itemIndex].dish.unit,
                )}
                )
              </p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              type="submit"
              icon="close"
              onClick={() => removeMenuItem()}
            >
              Remove
            </Button>
          </div>
        )}

        {isAdding && (
          <form
            className="mt-2 animate-fadeIn"
            aria-busy={isSubmiting}
            onSubmit={handleSubmit(onSubmit)}
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

            <div className="mt-2 flex animate-fadeIn flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <Button
                size="sm"
                type="submit"
                icon="plus"
                onClick={() => setIsAdding(true)}
                className="w-fit"
              >
                Add now
              </Button>

              <Button
                variant="secondary"
                size="sm"
                type="button"
                onClick={() => setIsAdding(false)}
                className="w-fit"
              >
                Cancel
              </Button>
            </div>
          </form>
        )}

        {!isAdding && itemIndex === -1 && (
          <Button
            size="sm"
            variant="secondary"
            type="button"
            icon="plus"
            className="mt-2 animate-fadeIn"
            onClick={() => setIsAdding(true)}
          >
            Add food
          </Button>
        )}
      </div>
    </div>
  );
};

export default OrderMenuItem;
