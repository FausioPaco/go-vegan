import Hero from '@/layouts/Hero';

const AboutHero = () => {
  return (
    <Hero backgroundImage="about" className="min-h-[300px] md:min-h-[480px]">
      <h1 className="font-serif text-5xl font-bold leading-normal text-white drop-shadow-md md:text-6xl">
        About Us
      </h1>
      <p className="max-w-[1200px] text-2xl font-light leading-relaxed text-white md:text-3xl">
        We appreciate a sustainable and deliciously conscious gastronomic
        experience
      </p>
    </Hero>
  );
};

export default AboutHero;
