import { TabItem, Tabs } from '@/components/ui/tabs';
import MenuItem from './MenuItem';
import { ALL_DISHES } from '@/data/menu';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Dish, Dishes } from '@/types/Menu';
import { Button } from '@/components/ui/button';

const MenuList = () => {
  const categoriesList = Object.keys(ALL_DISHES) as (keyof Dishes)[];
  const [activeTab, setActiveTab] = useState(categoriesList[0]);

  return (
    <div className="my-8 flex w-full flex-col items-center justify-center gap-y-2 px-3">
      <Tabs className="w-full md:max-w-[90%] lg:max-w-[60%]">
        {categoriesList.map((category, index) => (
          <TabItem
            key={category.toString()}
            label={category.toString()}
            tabPosition={index + 1}
            totalTabs={categoriesList.length}
            isActive={activeTab === category}
            onClick={() => setActiveTab(category)}
          />
        ))}
      </Tabs>
      <div className="mt-3 flex w-full justify-end md:max-w-[90%] lg:max-w-[60%]">
        <Button variant="secondary" size="sm">
          Download Menu
        </Button>
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0.2, y: -50 }}
        transition={{ duration: 0.6, ease: [0.39, 0.24, 0.3, 1] }}
        className="md:min-w-screen-lg"
      >
        <div className="divide-y divide-grey-100">
          {ALL_DISHES[activeTab].map((dish: Dish) => (
            <MenuItem key={dish.id} category={activeTab} dish={dish} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MenuList;
