import { ButtonLink } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { MenuCategory } from '@/types/Menu';
import { useNavigate } from 'react-router-dom';

type IDishesItemProps = {
  category: MenuCategory;
};

const HomeDishesItem = ({ category }: IDishesItemProps) => {
  const navigate = useNavigate();

  return (
    <div
      role="button"
      tabIndex={0}
      className="flex cursor-pointer items-center gap-x-4 rounded-2xl border border-white bg-white drop-shadow transition-all hover:-translate-y-1 hover:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 md:min-w-[560px]"
      onClick={() => navigate('/about')}
    >
      <img
        width={231}
        height={268}
        src={`/home/${category.urlImage}`}
        alt={`${category.name} preview image`}
        className="block h-auto w-[128px] overflow-hidden md:w-[231px] md:-translate-x-1"
      />
      <div className="py-3">
        <h4 className="font-sans text-2xl font-medium text-secondary-600 md:text-4xl">
          {category.name}
        </h4>
        <p className="mt-2 text-lg text-grey-500 md:text-2xl">
          {category.variations} Variations
        </p>

        <ButtonLink
          href="/order"
          variant="tertiary"
          size="sm"
          className="mt-2 pl-0 md:mt-4"
        >
          <span className="group flex items-center gap-x-2 text-sm md:text-base">
            ORDER NOW
            <Icon
              name="arrow-right"
              className="fill-white transition-transform ease-out group-hover:translate-x-1"
            />
          </span>
        </ButtonLink>
      </div>
    </div>
  );
};

export default HomeDishesItem;
