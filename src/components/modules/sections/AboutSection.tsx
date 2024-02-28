import { Heading, LinkTarget, Text } from '@src/components/design-system';
import React from 'react';

interface AboutSectionProps {
  short: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ short }) => {
  return (
    <section className="mx-auto -mt-12 mb-12 flex h-full flex-col p-4 md:-mt-0 md:p-0">
      <Heading>About 💭</Heading>
      <React.Fragment>
        <Text style={{ marginBottom: `1.5rem` }}>
          I&apos;m a 28-year-old enthusiast, deeply immersed in the dynamic world of technology,
          driven by an insatiable curiosity to explore its limitless possibilities. My passion lies
          in the intricate art of software development, where I constantly seek to innovate and
          create impactful solutions that resonate with users worldwide.&quot;
        </Text>

        <Text style={{ marginBottom: `1.5rem` }}>
          With over 8 years of hands-on experience in programming, I have honed my skills in
          utilizing frameworks and libraries such as{' '}
          <LinkTarget href="https://codeigniter.com" target="_blank">
            Codeigniter
          </LinkTarget>{' '}
          ,{' '}
          <LinkTarget href="https://laravel.com" target="_blank">
            Laravel
          </LinkTarget>{' '}
          ,{' '}
          <LinkTarget href="https://vuejs.org" target="_blank">
            VueJS
          </LinkTarget>{' '}
          ,{' '}
          <LinkTarget href="https://react.dev" target="_blank">
            ReactJS
          </LinkTarget>{' '}
          ,{' '}
          <LinkTarget href="https://developer.apple.com/swift" target="_blank">
            Swift
          </LinkTarget>{' '}
          ,{' '}
          <LinkTarget href="https://nuxt.com" target="_blank">
            Nuxt JS
          </LinkTarget>{' '}
          ,{' '}
          <LinkTarget href="https://nextjs.org" target="_blank">
            Next JS
          </LinkTarget>{' '}
          , and More expert with{' '}
          <LinkTarget href="https://flutter.dev" target="_blank">
            Flutter
          </LinkTarget>{' '}
          , among others. Currently, I am dedicated to deepening my expertise in Front End
          Development and DevOps
        </Text>
      </React.Fragment>
      {!short && (
        <React.Fragment>
          <Text style={{ marginBottom: `1.5rem` }}>
            Professionally, I&apos;m contributing my skills as a Software Engineer at{' '}
            <LinkTarget href="https://oxycreative.com" target="_blank">
              OXY Creative
            </LinkTarget>{' '}
            , where I actively engage in innovative projects and contribute to the dynamic tech
            landscape. In addition to my full-time role, I also take on freelance projects, allowing
            me to further diversify my experience as a software developer.
          </Text>
        </React.Fragment>
      )}
      <Text>
        Let&apos;s connect and explore the endless possibilities at the intersection of technology
        and innovation! 👨‍💻✨ #SoftwareDeveloper #WebDevelopment #MobileApps #TechEnthusiast
        #DevOpsEngineer
      </Text>
    </section>
  );
};

export default AboutSection;
