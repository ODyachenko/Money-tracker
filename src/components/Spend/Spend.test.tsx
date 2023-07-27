import { fireEvent, render, screen } from '@testing-library/react';
import Spend from './Spend';
// import IntervalsTabs from './IntervalsTabs';

describe('Spend component', () => {
  test('Renders title', () => {
    render(<Spend />);
    const title = screen.getByText(/Spend Frequency/i);

    expect(title).toBeInTheDocument();
  });

  test('Renders Intervals tabs', () => {
    const { container } = render(<Spend />);
    const intervalsTabs = container.getElementsByClassName('intervals')[0];

    expect(intervalsTabs).toBeInTheDocument();
  });

  // test('onClick intervals item', () => {
  // const { container } = render(<Spend />);
  //   fireEvent.click(screen.getByText(/week/i));
  //     container.classList.contains('')

  // //   expect().toHaveBeenCalled();
  // });
});
