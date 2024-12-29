import Hero from '@/layouts/Hero';

const MenuHero = () => {
  return (
    <Hero backgroundImage="menu" className="min-h-[300px] md:min-h-[480px]">
      <h1 className="font-serif text-5xl font-bold leading-normal text-white drop-shadow-md md:text-6xl">
        Our Menu
      </h1>
      <p className="max-w-[1200px] text-2xl font-light leading-relaxed text-white md:text-3xl">
        Each dish is carefully created to surprise the senses, combining fresh,
        local ingredients with innovative culinary techniques. From traditional
        dishes with a vegan twist to unique creations that defy expectations
      </p>
    </Hero>
  );
};

export default MenuHero;
