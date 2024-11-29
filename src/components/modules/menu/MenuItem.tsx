import { Dish } from '@/types/Menu';

type IMenuItem = {
  category: string;
  dish: Dish;
};

const MenuItem = ({ dish, category }: IMenuItem) => {
  return (
    <div className="flex flex-col gap-y-2 p-4 md:flex-row md:gap-x-8 md:gap-y-0">
      <img
        width={520}
        height={400}
        src={`/menu/${category}/${dish.url}`}
        alt={`${dish.title} preview image`}
        className="block h-auto w-full rounded md:max-w-[260px]"
      />

      <div className="py-3">
        <h2 className="font-sans text-2xl font-bold text-secondary-800 md:text-3xl">
          {dish.title}
        </h2>
        <p className="mt-2 text-lg font-medium text-secondary-800 md:text-2xl">
          ${dish.price} / {`${dish.perUnit} ${dish.unit}`}
        </p>
        <p className="mt-2 text-base text-grey-600 md:text-lg">
          {dish.description}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
