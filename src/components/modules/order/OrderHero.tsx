import Hero from '@/layouts/Hero';

const OrderHero = () => {
  return (
    <Hero backgroundImage="order" className="min-h-[300px] md:min-h-[480px]">
      <h1 className="font-serif text-5xl font-bold leading-normal text-white drop-shadow-md md:text-6xl">
        Make an Order
      </h1>
      <p className="max-w-[1200px] text-2xl font-light leading-relaxed text-white md:text-3xl">
        Ready to place your order for delicious vegan food? Follow the steps
        below to create your personalized order and enjoy the authentic flavors
        of our vegan menu.
      </p>
    </Hero>
  );
};

export default OrderHero;
