import Link from 'next/link';
import { Container } from '../../shared/container/Container';

export const Footer = () => {
  return (
    <footer className="border-t-color border-gray200 mt-10 border-t">
      <Container className="py-8">
        <h2 className="h4 mb-4">about us</h2>
        <div className="max-w-4xl">
          Our company specialises in the development of advanced technologies for a wide range of
          industries. We use cutting-edge techniques and algorithms to create intelligent systems
          that can help businesses automate tasks, improve efficiency, and drive innovation.
        </div>
        <div className="mt-8">
          Powered by
          <Link
            href="https://www.contentful.com"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue500"
          >
            Contentful
          </Link>
        </div>
      </Container>
    </footer>
  );
};
