import { TabItem, Tabs } from '@/components/ui/tabs';
import { ALL_DISHES } from '@/data/menu';
import { motion } from 'motion/react';
import { useState } from 'react';

const MenuList = () => {
  const categoriesList = Object.keys(ALL_DISHES);
  const [activeTab, setActiveTab] = useState(categoriesList[0]);

  return (
    <div className="flex w-full flex-col items-center gap-y-4">
      <Tabs>
        {categoriesList.map((category, index) => (
          <TabItem
            key={category}
            label={category}
            tabPosition={index + 1}
            totalTabs={categoriesList.length}
            isActive={activeTab === category}
            onClick={() => setActiveTab(category)}
          />
        ))}
      </Tabs>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="md:min-w-screen-lg"
      >
        {/* <TabContent items={ALL_DISHES[activeTab]} /> */}
        {activeTab}
      </motion.div>
    </div>
  );
};

export default MenuList;
