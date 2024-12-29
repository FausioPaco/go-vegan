import Hero from '@/layouts/Hero';

const FaqsHero = () => {
  return (
    <Hero backgroundImage="faq" className="min-h-[300px] md:min-h-[480px]">
      <h1 className="font-serif text-5xl font-bold leading-normal text-white drop-shadow-md md:text-6xl">
        Frequently Asked Questions
      </h1>
      <p className="max-w-[1200px] text-2xl font-light leading-relaxed text-white md:text-3xl">
        Do you have questions about our vegan menu? Here are the answers to the
        most frequently asked questions our customers tend to have. Discover how
        we can help you choose amazing meals that stand out in flavor and
        nutrition
      </p>
    </Hero>
  );
};

export default FaqsHero;
