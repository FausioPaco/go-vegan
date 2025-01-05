import { TabItem, Tabs } from '@/components/ui/tabs';
import { render, fireEvent } from '@testing-library/react';
import { describe } from 'node:test';
import { useState } from 'react';
import { expect, it } from 'vitest';

const TABS_LIST = ['Tab 1', 'Tab 2', 'Tab 3'];

const TestTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Tabs tabType="outline">
      {TABS_LIST.map((tabLabel, index) => (
        <TabItem
          key={index}
          label={tabLabel}
          tabPosition={index + 1}
          totalTabs={3}
          isActive={activeTab === index}
          onClick={() => setActiveTab(index)}
        />
      ))}
    </Tabs>
  );
};

describe('Tab Component', () => {
  it('should render all tabs', () => {
    const { getAllByRole } = render(<TestTabs />);

    const tabItems = getAllByRole('tab');

    expect(tabItems).toHaveLength(3);
  });

  it('displays the correct labels', () => {
    const { getByLabelText } = render(<TestTabs />);

    expect(getByLabelText('Tab 1')).toBeInTheDocument();
    expect(getByLabelText('Tab 2')).toBeInTheDocument();
    expect(getByLabelText('Tab 3')).toBeInTheDocument();
  });

  it('sets the correct tab as active', () => {
    const { getAllByRole } = render(<TestTabs />);
    const tabs = getAllByRole('tab');

    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
  });

  it('changes the active tab on click', () => {
    const { getAllByRole } = render(<TestTabs />);
    const tabs = getAllByRole('tab');

    fireEvent.click(tabs[1]);
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
  });

  it('ensures accessibility attributes', () => {
    const { getAllByRole } = render(<TestTabs />);

    const tabs = getAllByRole('tab');

    tabs.forEach((tab, index) => {
      expect(tab).toHaveAttribute('aria-setsize', '3');
      expect(tab).toHaveAttribute('aria-posinset', `${index + 1}`);
      expect(tab).toHaveAttribute('aria-controls');
    });
  });
});
