import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '@/components/ui/button';
import { IconProps } from '@/types/Icon';

vi.mock('@/components/ui/icon', () => ({
  Icon: ({ name, ...props }: IconProps) => (
    <svg role="icon" data-testid="buttonIcon" {...props}>
      {name}
    </svg>
  ),
}));

describe('Button Component', () => {
  it('should render correctly with children', () => {
    render(<Button>Button Content</Button>);
    expect(screen.getByText('Button Content')).toBeInTheDocument();
  });

  it('applies correct variant classes', async () => {
    const buttonVariants = {
      primary:
        'rounded-full bg-gradient-to-t from-primary-600 to-primary-500 text-white hover:shadow-sm hover:shadow-primary-700/70 hover:-translate-y-1',
      secondary:
        'rounded-full border-primary-700 shadow-md border-2 text-primary-700 hover:bg-primary-700 hover:text-white hover:-translate-y-1',
      tertiary:
        'flex items-center gap-x-2 text-primary-700 underline outline-none hover:text-primary-800',
    };

    const { rerender } = render(<Button variant="primary">Primary</Button>);

    expect(screen.getByTestId('button')).toHaveClass(
      ...buttonVariants['primary'].split(' '),
    );

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByTestId('button')).toHaveClass(
      ...buttonVariants['secondary'].split(' '),
    );

    rerender(<Button variant="tertiary">Tertiary</Button>);
    expect(screen.getByTestId('button')).toHaveClass(
      ...buttonVariants['tertiary'].split(' '),
    );
  });

  it('applies correct size classes', () => {
    const buttonSizes = {
      sm: 'px-3 py-2 text-sm md:text-base',
      md: 'px-6 py-3 text-lg md:text-xl',
      lg: 'px-8 py-4 text-xl md:text-2xl',
    };

    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByTestId('button')).toHaveClass(
      ...buttonSizes['sm'].split(' '),
    );

    rerender(<Button size="md">Medium</Button>);
    expect(screen.getByTestId('button')).toHaveClass(
      ...buttonSizes['md'].split(' '),
    );

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByTestId('button')).toHaveClass(
      ...buttonSizes['lg'].split(' '),
    );
  });

  it('renders icon correctly on the left', () => {
    const { getByTestId } = render(
      <Button icon="plus" iconPosition="left">
        Icon Left
      </Button>,
    );

    expect(getByTestId('buttonIcon')).toBeInTheDocument();
    expect(getByTestId('buttonIcon')).toHaveClass('fill-white');
  });

  it('disables icons when readonly is true', () => {
    const { queryByRole } = render(
      <Button icon="plus" readonly>
        Readonly
      </Button>,
    );
    expect(queryByRole('icon')).not.toBeInTheDocument();
  });

  it('should apply accessibility attributes', () => {
    const { getByRole } = render(
      <Button ariaLabel="Accessible Button">Accessible</Button>,
    );

    const button = getByRole('button', { name: 'Accessible Button' });

    expect(button).toHaveAttribute('aria-label', 'Accessible Button');
    expect(button).toHaveAttribute('title', 'Accessible Button');
  });

  it('should trigger onClick event when clicked', () => {
    const handleClick = vi.fn();

    const { getByText } = render(
      <Button onClick={handleClick}>Clickable</Button>,
    );

    fireEvent.click(getByText('Clickable'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not trigger onClick event when disabled', () => {
    const handleClick = vi.fn();

    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>,
    );
    fireEvent.click(screen.getByText('Disabled'));

    expect(handleClick).not.toHaveBeenCalled();
  });
});
