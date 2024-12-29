import Meta from '@/components/meta';
import { motion } from 'motion/react';
import {
  AboutBeliefs,
  AboutHero,
  AboutStory,
} from '@/components/modules/about';
import { HomePersistent } from '@/components/modules/home';

const About = () => {
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
        title="Go Vegan - About Us"
        description="We appreciate a sustainable and deliciously conscious gastronomic experience"
      />

      <main className="flex-1">
        <AboutHero />
        <AboutStory />
        <AboutBeliefs />
        <HomePersistent />
      </main>
    </motion.div>
  );
};

export default About;
