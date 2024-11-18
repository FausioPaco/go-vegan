import Meta from '@/components/meta';
import {
  HomeAbout,
  HomeDishes,
  HomeHero,
  HomeLocation,
  HomeSchedule,
} from '@/components/modules/home';

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
        <HomeSchedule />
        <HomeAbout />
      </main>
    </>
  );
};

export default Home;
