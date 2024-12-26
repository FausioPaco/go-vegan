import { Icon } from '@/components/ui/icon';
import { RootState } from '@/store';
import { DishCategoryCartItems } from '@/types/Cart';
import { groupCartItemsByCategory } from '@/utils/cart';
import { pluralizeUnit } from '@/utils/stringUtils';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';

type OrderCategoryProps = {
  category: string;
  dishItems: DishCategoryCartItems;
};

const OrderCategory = memo(({ category, dishItems }: OrderCategoryProps) => (
  <div className="my-4 animate-fadeIn">
    <h3 className="mb-2 font-bold uppercase text-grey-500">{category}</h3>
    {dishItems.items.map((item: any) => (
      <div
        key={item.dish.id}
        className="flex w-full items-end justify-between text-sm"
      >
        <p className="mb-0">
          {item.dish.title} ({pluralizeUnit(item.quantity, item.dish.unit)})
        </p>
        <p className="mb-0 mt-2 font-bold text-primary-800">
          ${item.totalPrice.toFixed(2)}
        </p>
      </div>
    ))}
  </div>
));

type OrderTotalsProps = {
  numberOfPeople?: number;
  totalOrderPrice: number;
};

const OrderTotals = memo(
  ({ numberOfPeople, totalOrderPrice }: OrderTotalsProps) => (
    <div className="my-4 flex w-full flex-col gap-y-3">
      <div className="flex justify-between font-medium text-grey-700">
        <p>Persons</p>
        <p className="font-bold text-primary-800">
          {numberOfPeople} {numberOfPeople === 1 ? 'Person' : 'Persons'}
        </p>
      </div>
      <div className="flex justify-between font-medium text-grey-700">
        <p>Total</p>
        <p className="text-xl font-bold text-primary-800">
          ${totalOrderPrice.toFixed(2) ?? '0.00'}
        </p>
      </div>
    </div>
  ),
);

const OrderSummary = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const totalPrice =
    cart.items.reduce((total, item) => (total += item.totalPrice), 0) *
    cart.details.numberOfPeople;

  const itemsGrouped = useMemo(
    () => groupCartItemsByCategory(cart.items),
    [cart.items],
  );

  if (cart.items.length === 0) {
    return (
      <div className="flex w-full flex-col border border-grey-200 p-4 md:max-w-[480px]">
        <h2 className="mb-8 text-xl font-bold md:text-2xl">Order Summary</h2>
        <div className="flex flex-col items-center text-center">
          <Icon
            name="serving-dish"
            width={162}
            height={162}
            className="size-[120px] fill-grey-500 md:size-[162px]"
          />
          <p className="mt-8 text-lg font-medium text-grey-500 md:text-xl">
            So far, you haven’t selected any dishes for your meal.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col border border-grey-200 p-4 md:max-w-[480px]">
      <h2 className="mb-8 text-xl font-bold md:text-2xl">Order Summary</h2>
      {Object.entries(itemsGrouped).map(([category, dishItems]) => (
        <OrderCategory
          key={category}
          category={category}
          dishItems={dishItems}
        />
      ))}
      <hr className="bg-gray-100 mt-4 h-1 w-full border-grey-200" />
      <OrderTotals
        numberOfPeople={cart.details?.numberOfPeople}
        totalOrderPrice={totalPrice}
      />
    </div>
  );
};

export default OrderSummary;
