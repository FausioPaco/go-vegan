import { ALL_CATEGORIES, ALL_QUESTIONS } from '@/data/faqs';
import { useState } from 'react';
import FaqsMenuItem from './FaqsMenuItem';
import { Accordion } from '@/components/ui/accordion';

const FaqsContent = () => {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES[0].id);

  return (
    <section className="mb-20 mt-10 flex flex-col justify-center gap-y-4 md:mb-40 md:flex-row md:gap-y-0">
      <div className="flex flex-col space-y-2 px-4 md:w-1/4">
        <p className="mb-2 text-grey-500">
          Select the category of questions you are looking
        </p>
        <nav className="w-full">
          <ul className="flex flex-col space-y-2">
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
      <div className="w-full max-w-full px-2 md:w-3/4 md:px-8">
        <Accordion>
          {ALL_QUESTIONS[activeCategory].map((question) => (
            <Accordion.Item
              key={question.id}
              id={question.id}
              title={question.question}
            >
              {question.answer}
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqsContent;
