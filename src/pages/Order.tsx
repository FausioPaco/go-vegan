import Meta from '@/components/meta';
import { OrderForm, OrderHero } from '@/components/modules/order';
import { motion } from 'motion/react';

const Order = () => {
  return (
    <motion.div
      className="flex-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
      }}
      transition={{
        duration: 0.5,
        ease: 'easeIn',
      }}
    >
      <Meta
        name="description"
        title="Go Vegan - Make an Order"
        description="Ready to place your order for delicious vegan food? Follow the steps below to create your personalized order and enjoy the authentic flavors of our vegan menu."
      />

      <main>
        <OrderHero />
        <OrderForm />
      </main>
    </motion.div>
  );
};

export default Order;
