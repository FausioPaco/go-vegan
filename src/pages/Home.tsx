import Meta from '@/components/meta';
import { HomeDishes, HomeHero, HomeLocation } from '@/components/modules/home';

const Home = () => {
  return (
    <>
      <Meta
        name="description"
        title="Go Vegan - Where Vegan Cuisine Excels Without Sacrificing Taste!"
        description="Where Vegan Cuisine Excels Without Sacrificing Taste!"
      />
      <main className="flex-1">
        <HomeHero />
        <HomeDishes />
        <HomeLocation />
      </main>
    </>
  );
};

export default Home;
