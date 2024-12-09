import Meta from '@/components/meta';
import { OrderHero } from '@/components/modules/order';

const Order = () => {
  return (
    <>
      <Meta
        name="description"
        title="Go Vegan - Make an Order"
        description="Ready to place your order for delicious vegan food? Follow the steps below to create your personalized order and enjoy the authentic flavors of our vegan menu."
      />

      <main className="flex-1">
        <OrderHero />
        <p>Main Content Here</p>
      </main>
    </>
  );
};

export default Order;
