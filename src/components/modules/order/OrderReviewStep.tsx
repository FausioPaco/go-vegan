import OrderReviewDesktop from './OrderReviewDesktop';
import OrderReviewMobile from './OrderReviewMobile';
import { Button } from '@/components/ui/button';

type IOrderReviewProps = {
  onFinish: () => void;
  onPrevious: () => void;
};

const OrderReviewStep = ({ onFinish, onPrevious }: IOrderReviewProps) => {
  return (
    <section className="relative my-4 flex animate-fadeIn flex-col items-center justify-center">
      <div className="my-2 flex w-full flex-col items-center gap-y-2 text-center">
        <h3 className="texl-xl font-bold text-grey-600 md:text-3xl">
          Review your choices
        </h3>
        <p className="text-grey-500">
          Let’s make sure you’ve got everthing in place
        </p>
      </div>

      <OrderReviewDesktop />
      <OrderReviewMobile />

      <div className="mt-5 flex space-x-2">
        <Button
          size="md"
          variant="secondary"
          type="button"
          onClick={onPrevious}
          icon="arrow-left"
        >
          Previous
        </Button>

        <Button
          onClick={onFinish}
          size="md"
          type="submit"
          icon="arrow-right"
          iconPosition="right"
        >
          Next step
        </Button>
      </div>
    </section>
  );
};

export default OrderReviewStep;
