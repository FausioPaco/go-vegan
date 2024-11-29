import { ALL_CATEGORIES } from '@/data/faqs';
import { useState } from 'react';
import FaqsMenuItem from './FaqsMenuItem';

const FaqsContent = () => {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES[0].id);

  return (
    <section className="my-6 flex justify-center">
      {/* Menu */}
      <div className="mx-2 flex w-full flex-col gap-y-2 md:w-1/3">
        <p className="mb-2 text-grey-500">
          Select the category of questions you are looking
        </p>
        <nav className="w-full md:w-[90%]">
          <ul className="space-y-2">
            {ALL_CATEGORIES.map((category) => (
              <FaqsMenuItem
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </ul>
        </nav>
      </div>

      {/* Content */}
    </section>
  );
};

export default FaqsContent;
