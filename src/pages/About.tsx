import Meta from '@/components/meta';
import {
  AboutBeliefs,
  AboutHero,
  AboutStory,
} from '@/components/modules/about';
import { HomePersistent } from '@/components/modules/home';

const About = () => {
  return (
    <>
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
    </>
  );
};

export default About;
