import { render, screen } from '@/test-utils';
import { ArticleCard } from './Editor';

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<ArticleCard title="this is a test" category="test" image="test" author="test" />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
