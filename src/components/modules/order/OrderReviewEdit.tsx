import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { addItem } from '@/store/reducers/cartReducer';
import { CartItem } from '@/types/Cart';
import { Dishes } from '@/types/Menu';
import { IOrderMenuItemInput } from '@/types/Order';
import { pluralizeUnit } from '@/utils/stringUtils';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

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

          <div className="mt-2 flex space-x-2">
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

export default ReviewEdit;
