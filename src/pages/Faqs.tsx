import Meta from '@/components/meta';
import {
  FaqsContent,
  FaqsHero,
  FaqsPersistent,
} from '@/components/modules/faqs';

const Faqs = () => {
  return (
    <>
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
    </>
  );
};

export default Faqs;
