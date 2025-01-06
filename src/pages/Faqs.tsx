import Meta from '@/components/Meta';
import {
  FaqsContent,
  FaqsHero,
  FaqsPersistent,
} from '@/components/modules/faqs';
import { motion } from 'motion/react';

const Faqs = () => {
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
        title="Go Vegan - Frequently Asked Questions"
        description="Do you have questions about our vegan menu? Here are the answers to the most frequently asked questions our customers tend to have. Discover how we can help you choose amazing meals that stand out in flavor and nutrition"
      />

      <main className="flex-1">
        <FaqsHero />
        <FaqsContent />
        <FaqsPersistent />
      </main>
    </motion.div>
  );
};

export default Faqs;
