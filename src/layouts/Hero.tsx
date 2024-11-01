import { getImageUrl } from '@/utils/image';
import { PropsWithChildren } from 'react';
import Header from '@layouts/Header';

type HeroProps = {
  backgroundImage: 'hero' | 'about' | 'menu' | 'contact' | 'faq' | 'order';
};

const Hero = ({ backgroundImage, children }: PropsWithChildren<HeroProps>) => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${getImageUrl(backgroundImage)}), url(${getImageUrl(backgroundImage, 'jpg')}) `,
      }}
    >
      <Header />
      <section
        id="hero"
        className="flex flex-1 flex-col items-center justify-center"
      >
        {children}
      </section>
    </div>
  );
};

export default Hero;
