import { MenuList } from '@/components/modules/menu';
import { ALL_DISHES } from '@/data/menu';
import { Dishes } from '@/types/Menu';
import { capitalize } from '@/utils/stringUtils';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('MenuList Component', () => {
  it('should render all category tabs', () => {
    const { getByText } = render(<MenuList />);
    const categories = Object.keys(ALL_DISHES) as (keyof Dishes)[];

    categories.forEach((category) => {
      expect(getByText(capitalize(category))).toBeInTheDocument();
    });
  });

  it('should set the first tab as active by default', () => {
    const { getByText } = render(<MenuList />);
    const categories = Object.keys(ALL_DISHES) as (keyof Dishes)[];

    const firstTab = getByText(capitalize(categories[0]));
    expect(firstTab).toHaveClass('text-primary-700 md:border-b-primary-700');
  });

  it('should change the active tab on click', () => {
    const { getByText } = render(<MenuList />);
    const categories = Object.keys(ALL_DISHES) as (keyof Dishes)[];

    const secondTab = getByText(capitalize(categories[1]));

    fireEvent.click(secondTab);

    expect(secondTab).toHaveClass('text-primary-700 md:border-b-primary-700');
  });

  it('should render dishes for the active tab', () => {
    const { getByText } = render(<MenuList />);

    const categories = Object.keys(ALL_DISHES) as (keyof Dishes)[];
    const activeCategory = categories[0];
    const dishes = ALL_DISHES[activeCategory];

    dishes.forEach((dish) => {
      expect(getByText(dish.title)).toBeInTheDocument();
      expect(
        getByText(
          new RegExp(dish.description.replace(/\s+/g, ' ').trim(), 'i'),
        ),
      ).toBeInTheDocument();
    });
  });

  it('should update dishes when active tab changes', () => {
    const { getByText } = render(<MenuList />);
    const categories = Object.keys(ALL_DISHES) as (keyof Dishes)[];
    const secondCategory = categories[1];

    fireEvent.click(getByText(capitalize(secondCategory)));

    const dishes = ALL_DISHES[secondCategory];

    dishes.forEach((dish) => {
      expect(getByText(dish.title)).toBeInTheDocument();
      expect(
        getByText(
          new RegExp(dish.description.replace(/\s+/g, ' ').trim(), 'i'),
        ),
      ).toBeInTheDocument();
    });
  });
});
