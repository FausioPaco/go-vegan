import Meta from '@/components/meta';
import { AboutHero, AboutStory } from '@/components/modules/about';

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
      </main>
    </>
  );
};

export default About;
