import { ButtonLink } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { getBackgroundImageUrl } from '@/utils/image';

const HomeLocation = () => {
  const bgLocation = 'location';

  return (
    <section
      id="home-location"
      className="flex min-h-[540px] items-center justify-center bg-cover bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${getBackgroundImageUrl(bgLocation)}), url(${getBackgroundImageUrl(bgLocation, 'jpg')}) `,
      }}
    >
      <div className="w-full pl-4 text-left lg:max-w-[1460px]">
        <div className="flex flex-col gap-y-4 text-left">
          <div className="mb-2 flex items-center gap-x-2">
            <Icon name="location" width={42} height={56} />
            <h2 className="font-sans text-5xl font-medium">
              We’re located in <span className="text-primary-100">Maputo</span>
            </h2>
          </div>
          <p className="text-xl font-normal text-white">
            We proudly serve our vegan cuisine and warm hospitality from our
            prime location in the heart of Maputo, making it accessible to every
            corner of the city.
          </p>
        </div>

        <ButtonLink
          href="/"
          variant="tertiary"
          size="sm"
          className="mt-2 pl-0 text-white hover:text-primary-50 md:mt-4"
        >
          <span className="0 group flex items-center gap-x-2">
            VIEW ON MAP
            <Icon
              name="arrow-right"
              className="fill-white transition-transform ease-out group-hover:translate-x-1 group-hover:fill-primary-50"
            />
          </span>
        </ButtonLink>
      </div>
    </section>
  );
};

export default HomeLocation;
