import { MenuItem } from '@/components/modules/menu';
import { Dish, DishCategory } from '@/types/Menu';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Menu Item Component', () => {
  const mockDish: Dish = {
    id: 1,
    title: 'Spaghetti Carbonara',
    description: 'Traditional Italian pasta with creamy sauce and pancetta.',
    price: 12.99,
    perUnit: 1,
    unit: 'Plate',
    url: 'spaghetti-carbonara.jpg',
  };

  const mockCategory: DishCategory = 'pastas';

  it('should render the dish title', () => {
    const { getByText } = render(
      <MenuItem dish={mockDish} category={mockCategory} />,
    );

    expect(getByText(mockDish.title)).toBeInTheDocument();
  });

  it('should render the dish price and unit', () => {
    const { getByText } = render(
      <MenuItem dish={mockDish} category={mockCategory} />,
    );

    expect(
      getByText(`$${mockDish.price} / ${mockDish.perUnit} ${mockDish.unit}`),
    ).toBeInTheDocument();
  });

  it('should render the dish description', () => {
    const { getByText } = render(
      <MenuItem dish={mockDish} category={mockCategory} />,
    );
    expect(getByText(mockDish.description)).toBeInTheDocument();
  });

  it('should render the image with correct src and alt text', () => {
    const { getByAltText } = render(
      <MenuItem dish={mockDish} category={mockCategory} />,
    );

    const image = getByAltText(`${mockDish.title} preview image`);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      `/menu/${mockCategory}/${mockDish.url}`,
    );
  });

  it('should apply correct styling classes', () => {
    const { getByTestId } = render(
      <MenuItem dish={mockDish} category={mockCategory} />,
    );

    const container = getByTestId('menu-item');

    expect(container).toHaveClass(
      'flex flex-col gap-y-2 p-4 md:flex-row md:gap-x-8 md:gap-y-0',
    );
  });
});
