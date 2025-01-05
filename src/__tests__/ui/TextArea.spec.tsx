import { TextArea } from '@/components/ui/textarea';
import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

describe('TextArea Component', () => {
  it('renders correctly with label', () => {
    const labelName = 'TextArea label';

    const { getByText } = render(<TextArea label={labelName} />);

    expect(getByText(labelName)).toBeInTheDocument();
  });

  it('renders with error message', () => {
    const errorMessage = 'Error Message Example';

    const { getByText } = render(
      <TextArea label="Description" error={errorMessage} />,
    );

    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  it('renders with text tip', () => {
    const textTipMessage = 'Text Tip Example';

    const { getByText } = render(
      <TextArea label="Description" textTip={textTipMessage} />,
    );

    expect(getByText(textTipMessage)).toBeInTheDocument();
  });

  it('calls onChange when value changes', () => {
    const handleChange = vi.fn();
    const label = 'Description';

    const { getByLabelText } = render(
      <TextArea label={label} value="" onChange={handleChange} />,
    );

    const textArea = getByLabelText(label) as HTMLTextAreaElement;

    fireEvent.change(textArea, { target: { value: 'New text' } });

    expect(handleChange).toHaveBeenCalled();
  });

  it('has correct aria (accessibility) attributes when error is present', () => {
    const { getByTestId } = render(
      <TextArea label="Description" error="Descrição é obrigatória." />,
    );

    const textArea = getByTestId('textarea');
    expect(textArea).toHaveAttribute('aria-invalid', 'true');
    expect(textArea).toHaveAttribute(
      'aria-describedby',
      expect.stringContaining('-error'),
    );
  });
});
