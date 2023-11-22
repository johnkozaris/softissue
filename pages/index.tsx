import { Header } from '../components/Header/Header';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ArticleCard } from '@/components/ArticleCard/ArticleCard';
import { Editor } from '@/components/Editor/Editor';
import '@mantine/tiptap/styles.css';

export default function HomePage() {
  return (
    <>
      <ColorSchemeToggle />
      <Header />
      <div>
        <ArticleCard title="this is a test" category="test" image="test" author="test" />
      </div>
      <Editor />
    </>
  );
}
