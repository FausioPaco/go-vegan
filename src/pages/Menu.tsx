import Meta from '@/components/meta';
import { MenuHero, MenuList } from '@/components/modules/menu';
import { motion } from 'motion/react';

const Menu = () => {
  return (
    <motion.div
      className="flex-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
      }}
      transition={{
        duration: 0.5,
        ease: 'easeIn',
      }}
    >
      <Meta
        name="description"
        title="Go Vegan - Menu"
        description="Each dish is carefully created to surprise the senses, combining fresh, local ingredients with innovative culinary techniques. From traditional dishes with a vegan twist to unique creations that defy expectations"
      />

      <main>
        <MenuHero />
        <MenuList />
      </main>
    </motion.div>
  );
};

export default Menu;
