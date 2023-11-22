import { render, screen } from '@/test-utils';
import { Header } from './Header';

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Header />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
