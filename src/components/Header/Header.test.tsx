import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Header from './Header';

describe('Header component', () => {
  test('Renders subtitle', () => {
    render(<Header />);
    const subtitle = screen.getByText(/Account Balance/i);
    expect(subtitle).toBeInTheDocument();
  });

  test('Renders balance', () => {
    const { container } = render(<Header />);

    const balance = container.getElementsByClassName('account__balance')[0];

    expect(balance).toBeInTheDocument();
  });

  test('Renders Income/Expense blocks', () => {
    const { container } = render(<Header />);

    const income = container.getElementsByClassName('account__money-income')[0];
    const expense = container.getElementsByClassName(
      'account__money-expense'
    )[0];

    expect(income).toBeInTheDocument();
    expect(expense).toBeInTheDocument();
  });
});
