import { useState } from 'react';
import { TabItem, Tabs } from '@/components/ui/tabs';
import { ALL_DISHES } from '@/data/menu';
import { Dish, Dishes } from '@/types/Menu';
import { motion } from 'motion/react';
import OrderMenuItem from './OrderMenuItem';
import OrderSummary from './OrderSummary';
import { Button } from '@/components/ui/button';

type IOrderChoiceStepProps = {
  onFinish: () => void;
  onPrevious: () => void;
};

const OrderChoicesStep = ({ onFinish, onPrevious }: IOrderChoiceStepProps) => {
  const categoriesList = Object.keys(ALL_DISHES) as (keyof Dishes)[];
  const [activeTab, setActiveTab] = useState(categoriesList[0]);

  return (
    <div className="my-8 flex w-full flex-col items-center justify-center gap-y-2 px-3 md:px-8">
      <Tabs tabType="bordered" className="w-full md:max-w-[90%] lg:max-w-[60%]">
        {categoriesList.map((category, index) => (
          <TabItem
            key={category.toString()}
            tabType="bordered"
            label={category.toString()}
            tabPosition={index + 1}
            totalTabs={categoriesList.length}
            isActive={activeTab === category}
            onClick={() => setActiveTab(category)}
          />
        ))}
      </Tabs>
      <div className="flex w-full flex-col items-start space-y-8 md:max-w-[95%] md:flex-row md:justify-between md:space-x-20 md:space-y-0">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.2 }}
          transition={{ duration: 0.6, ease: [0.39, 0.24, 0.3, 1] }}
          className="md:min-w-screen-lg"
        >
          <div className="divide-y divide-grey-100">
            {ALL_DISHES[activeTab].map((dish: Dish) => (
              <OrderMenuItem key={dish.id} category={activeTab} dish={dish} />
            ))}
          </div>
        </motion.div>
        <OrderSummary />
      </div>

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
    </div>
  );
};

export default OrderChoicesStep;
