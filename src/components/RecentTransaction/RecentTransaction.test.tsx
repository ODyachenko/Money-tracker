import { fireEvent, render, screen } from '@testing-library/react';
import RecentTransaction from './RecentTransaction';

describe('Recent transaction component', () => {
  test('Renders title', () => {
    render(<RecentTransaction />);
    const title = screen.getByText(/Recent Transaction/i);

    expect(title).toBeInTheDocument();
  });

  test('Renders transaction list', () => {
    const { container } = render(<RecentTransaction />);
    const transactionList =
      container.getElementsByClassName('transaction__group')[0];

    expect(transactionList).toBeInTheDocument();
  });

  test('Renders transaction list item', () => {
    const { container } = render(<RecentTransaction />);
    const caption = screen.getByText(/Subscription/i);
    const description = screen.getByText(/Netflix/i);
    const amount = screen.getByText(/\- \$5/i);

    expect(caption && description && amount).toBeInTheDocument();
  });
});
