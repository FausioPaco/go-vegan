import { PropsWithChildren } from 'react';
import { getBackgroundImageUrl } from '@/utils/image';
import Header from '@layouts/Header';

type HeroProps = {
  backgroundImage: 'hero' | 'about' | 'menu' | 'contact' | 'faq' | 'order';
};

const Hero = ({ backgroundImage, children }: PropsWithChildren<HeroProps>) => {
  return (
    <div
      className="min-h-[480px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${getBackgroundImageUrl(backgroundImage)}), url(${getBackgroundImageUrl(backgroundImage, 'jpg')}) `,
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
