import { Button } from '@/components/ui/button';
import { RootState } from '@/store';
import { removeItem } from '@/store/reducers/cartReducer';
import { getDishImagePath } from '@/utils/cart';
import { formatPrice, truncate } from '@/utils/stringUtils';
import { useDispatch, useSelector } from 'react-redux';
import ReviewEdit from './OrderReviewEdit';

const OrderReviewMobile = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="flex flex-col items-center justify-center gap-y-2 px-6 md:hidden">
      {cartItems.map((cartItem) => (
        <div key={cartItem.dish.id} className="flex-col gap-y-4">
          <img
            width={520}
            height={400}
            src={getDishImagePath(cartItem.dishCategory, cartItem.dish.url)}
            alt={`${cartItem.dish.title} preview image`}
            className="block max-h-fit w-full rounded md:max-w-[180px]"
          />
          <div className="py-3">
            <h3 className="font-sans text-2xl font-bold text-secondary-800 md:text-3xl">
              {truncate(cartItem.dish.title, 28)}
            </h3>
            <p className="mb-3 mt-2 text-base text-grey-600 md:max-w-[400px]">
              {truncate(cartItem.dish.description, 100)}
            </p>
            <p className="mb-3 mt-2 text-lg font-medium text-grey-600 md:max-w-[400px]">
              {formatPrice(cartItem.totalPrice)}
            </p>

            <ReviewEdit cartItem={cartItem} />

            {cartItems.length > 1 && (
              <Button
                variant="secondary"
                size="sm"
                type="button"
                icon="close"
                className="mt-4 min-w-fit"
                onClick={() => dispatch(removeItem(cartItem.dish.id))}
              >
                Remove
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderReviewMobile;
