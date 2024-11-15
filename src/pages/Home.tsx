import Meta from '@/components/meta';
import { ButtonLink } from '@/components/ui/button';
import Hero from '@layouts/Hero';

const Home = () => {
  return (
    <>
      <Meta
        name="description"
        title="Go Vegan - Where Vegan Cuisine Excels Without Sacrificing Taste!"
        description="Where Vegan Cuisine Excels Without Sacrificing Taste!"
      />
      <main className="flex-1">
        <Hero backgroundImage="hero" className="h-[400px] md:h-[600px]">
          <h1 className="font-serif text-5xl font-bold leading-relaxed text-white drop-shadow-md md:text-6xl md:leading-normal">
            Maputo's <span className="text-primary-100">Vegan Delights</span>:
            Flavor Redefined!
          </h1>
          <p className="text-3xl font-light text-white md:text-4xl">
            Where Vegan Cuisine Excels Without Sacrificing Taste!
          </p>
          <ButtonLink href="/order" size="lg">
            Order now
          </ButtonLink>
        </Hero>
      </main>
    </>
  );
};

export default Home;
