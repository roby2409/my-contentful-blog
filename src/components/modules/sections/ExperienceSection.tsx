import React from 'react';
import { Heading, Text, LinkTarget } from '@src/components/design-system';
import { experienceList } from '@src/data/experience';
import { ExperienceCard } from '@src/components/modules';

export default function ExperienceSection() {
  return (
    <section className="mb-12 flex flex-col">
      <Heading>Experience 🛠️</Heading>
      <Text>
        If you want to find out more about my experience please head over to my{' '}
        <LinkTarget href="https://www.linkedin.com/in/muh-roby-setiawan/" target="_blank">
          LinkedIn
        </LinkTarget>{' '}
      </Text>
      <div className="content">
        {experienceList?.map(item => {
          return (
            <ExperienceCard
              key={item.id}
              name={item.name}
              description={item.description}
              year={item.year}
              employmentType={item.employmentType}
              remote={item.remote}
              location={item.location}
              current={item.current}
              link={item.link}
              task={item.task}
            />
          );
        })}
      </div>
    </section>
  );
}
