import Meta from '@/components/meta';
import { MenuHero, MenuList } from '@/components/modules/menu';

const Menu = () => {
  return (
    <>
      <Meta
        name="description"
        title="Go Vegan - Menu"
        description="Each dish is carefully created to surprise the senses, combining fresh, local ingredients with innovative culinary techniques. From traditional dishes with a vegan twist to unique creations that defy expectations"
      />

      <main className="flex-1">
        <MenuHero />
        <MenuList />
      </main>
    </>
  );
};

export default Menu;
