import { PropsWithChildren } from 'react';
import { getBackgroundImageUrl } from '@/utils/image';
import Header from '@layouts/Header';
import cn from '@/utils/cn';

type HeroProps = {
  backgroundImage: 'hero' | 'about' | 'menu' | 'contact' | 'faq' | 'order';
  className?: string;
};

const Hero = ({
  backgroundImage,
  className,
  children,
}: PropsWithChildren<HeroProps>) => {
  return (
    <div
      className={cn(
        'flex h-full min-h-[480px] flex-col bg-cover bg-center',
        className,
      )}
      style={{
        backgroundImage: `url(${getBackgroundImageUrl(backgroundImage)}), url(${getBackgroundImageUrl(backgroundImage, 'jpg')}) `,
      }}
    >
      <Header />
      <section
        id="hero"
        className="flex flex-1 flex-col items-center justify-center space-y-7 px-6 py-8 text-center"
      >
        {children}
      </section>
    </div>
  );
};

export default Hero;
