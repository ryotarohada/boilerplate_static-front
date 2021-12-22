import { render } from '@testing-library/react';
import { TextBox } from '@/components/parts/Box/TextBox';
/**
 * @jest-environment jsdom
 */
test('AppTitle', () => {
  const text = 'foo';
  const { asFragment } = render(<TextBox text={text} />);
  expect(asFragment()).toMatchSnapshot();
});
