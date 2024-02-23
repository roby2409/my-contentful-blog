import { Heading } from '@src/components/design-system/components';
import { SocialMediaLink } from '@src/components/modules';

const MainSection: React.FC = () => {
  return (
    <section className="mx-auto -mt-12 h-full mb-12 flex flex-col p-4 md:-mt-0 md:p-0">
      <Heading style={{ marginBottom: '0.5rem' }}>
        Hi, I&apos;m Roby Setiawan! <span className="wave">👋</span>
      </Heading>
      <div className="text-gray-700 dark:text-gray-100 mb-4 flex font-semibold">
        <p>Software Engineer</p>
      </div>
      <SocialMediaLink />
    </section>
  );
};

export default MainSection;
