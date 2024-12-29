import Meta from '@/components/meta';
import {
  HomeAbout,
  HomeDishes,
  HomeHero,
  HomeLocation,
  HomePersistent,
  HomeSchedule,
} from '@/components/modules/home';
import { motion } from 'motion/react';

const Home = () => {
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
    </motion.div>
  );
};

export default Home;
