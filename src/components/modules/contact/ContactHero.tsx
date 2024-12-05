import Hero from '@/layouts/Hero';

const ContactHero = () => {
  return (
    <Hero backgroundImage="contact" className="min-h-[300px] md:min-h-[480px]">
      <h1 className="font-serif text-5xl font-bold leading-normal text-white drop-shadow-md md:text-6xl">
        Contact us
      </h1>
      <p className="max-w-[1200px] text-2xl font-light leading-relaxed text-white md:text-3xl">
        We are looking forward to hearing from you! If you have any questions
        about our vegan menu, or would like to discuss an order you have in
        mind, please don't hesitate to get in touch with our dedicated team.
      </p>
    </Hero>
  );
};

export default ContactHero;
