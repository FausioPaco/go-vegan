import { ButtonLink } from '@/components/ui/button';
import { getBackgroundImageUrl } from '@/utils/image';

const HomePersistent = () => {
  const backgroundImage = 'persistent';
  return (
    <section
      id="persistent"
      className="flex min-h-[470px] flex-col items-center justify-center gap-y-6 bg-primary-700 bg-cover bg-center text-center"
      style={{
        backgroundImage: `url(${getBackgroundImageUrl(backgroundImage)}), url(${getBackgroundImageUrl(backgroundImage, 'jpg')}) `,
      }}
    >
      <h2 className="font-serif text-4xl font-bold leading-normal text-white drop-shadow-md md:text-5xl">
        Explore the Vegan Flavor of Maputo
      </h2>
      <p className="max-w-[980px] text-2xl font-light leading-relaxed text-white md:text-3xl">
        Join us for a unique gastronomic experience. Discover the authentic
        taste of Maputo’s vegan cuisine and place your order today.
      </p>
      <ButtonLink href="/order" size="lg">
        Order now
      </ButtonLink>
    </section>
  );
};

export default HomePersistent;
