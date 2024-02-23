import Link from 'next/link';

import BlogLogo from '@icons/blog-logo.svg';
import { Container } from '../../shared/container/Container';

export const Header = () => {
  return (
    <header className="py-5">
      <nav>
        <Container className="flex items-center justify-between">
          <Link href="/" title="Homepage">
            <BlogLogo />
          </Link>
          <p>bekas logo</p>
        </Container>
      </nav>
    </header>
  );
};
