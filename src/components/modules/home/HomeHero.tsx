import { ButtonLink } from '@/components/ui/button';
import Hero from '@/layouts/Hero';

const HomeHero = () => {
  return (
    <Hero backgroundImage="hero" className="min-h-[400px] md:min-h-[600px]">
      <h1 className="font-serif text-5xl font-bold leading-normal text-white drop-shadow-md md:text-6xl">
        Maputo's <span className="text-primary-100">Vegan Delights</span>:
        Flavor Redefined!
      </h1>
      <p className="text-3xl font-light leading-relaxed text-white md:text-4xl">
        Where Vegan Cuisine Excels Without Sacrificing Taste!
      </p>
      <ButtonLink href="/order" size="lg">
        Order now
      </ButtonLink>
    </Hero>
  );
};

export default HomeHero;
