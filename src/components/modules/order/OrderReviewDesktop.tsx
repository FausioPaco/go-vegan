import { Button } from '@/components/ui/button';
import { CartItem } from '@/types/Cart';
import { getDishImagePath } from '@/utils/cart';
import { formatPrice, truncate } from '@/utils/stringUtils';
import { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '@/store/reducers/cartReducer';
import ReviewEdit from './OrderReviewEdit';

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
        <ReviewEdit cartItem={cartItem} />
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

export default OrderReviewDesktop;
