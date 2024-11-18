import Meta from '@/components/meta';
import {
  HomeAbout,
  HomeDishes,
  HomeHero,
  HomeLocation,
  HomePersistent,
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
        <HomePersistent />
      </main>
    </>
  );
};

export default Home;
