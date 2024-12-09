import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { useEffect, useRef } from 'react';

type IMessageProps = {
  title: string;
  message: string;
  onClose: () => void;
};

const ThankYouMessage = ({ title, message, onClose }: IMessageProps) => {
  const thanksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (thanksRef.current) {
      thanksRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div
      ref={thanksRef}
      className="my-6 flex animate-fadeIn flex-col items-center justify-center gap-y-2 text-center"
    >
      <div className="rounded-full bg-primary-25/50 p-2">
        <Icon
          name="checkmark"
          width={84}
          height={84}
          className="fill-primary-600"
        />
      </div>
      <h3 className="text-2xl font-bold text-primary-600 md:text-3xl">
        {title}
      </h3>
      <p className="max-w-[600px] text-lg text-grey-600 md:text-xl">
        {message}
      </p>

      <Button className="mt-2" size="md" type="submit" onClick={onClose}>
        Ok
      </Button>
    </div>
  );
};

export default ThankYouMessage;
