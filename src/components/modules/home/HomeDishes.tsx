import { MENU_CATEGORIES } from '@/data/menu';
import HomeDishesItem from './HomeDishesItem';

const HomeDishes = () => {
  return (
    <section className="my-11 flex w-full flex-col items-center justify-center px-4">
      <div className="mb-6 flex w-full flex-col items-center text-center">
        <h2 className="mb-2 font-sans text-sm font-bold text-primary-600">
          MENU
        </h2>
        <h3 className="font-serif text-4xl font-bold text-grey-600 md:text-5xl">
          Our Dishes
        </h3>
        <p className="mt-4 max-w-[700px] text-base text-grey-700/70">
          Each dish is carefully created to surprise the senses, combining
          fresh, local ingredients with innovative culinary techniques. From
          traditional dishes with a vegan twist to unique creations that defy
          expectations
        </p>
      </div>
      <div className="mt-6 grid w-full grid-cols-1 justify-center gap-10 lg:max-w-[1460px] lg:grid-cols-2 lg:grid-rows-2">
        {MENU_CATEGORIES.map((categoryItem) => (
          <HomeDishesItem key={categoryItem.id} category={categoryItem} />
        ))}
      </div>
    </section>
  );
};

export default HomeDishes;
