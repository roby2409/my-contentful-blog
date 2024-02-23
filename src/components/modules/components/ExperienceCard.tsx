import { Border, ButtonLink, Tag, Text } from '@src/components/design-system';
import { Experience } from '@src/types/experience';
import Image from 'next/image';
import { FiExternalLink, FiMapPin } from 'react-icons/fi';

const ExperienceCard: React.FC<Experience> = props => {
  function getEmploymentTypeString() {
    switch (props.employmentType) {
      case 'freelance':
        return 'Freelance';
      case 'full-time':
        return 'Full-Time';
      case 'internship':
        return 'Internship';
      case 'part-time':
        return 'Part-Time';
      default:
        return 'Contract';
    }
  }

  return (
    <div
      className="bg-gray-100/50 border-teal-100 dark:border-teal-900 mb-6 mt-5 flex w-full flex-col items-center rounded-lg
      border p-6 shadow-md transition-all duration-300 ease-in hover:shadow-lg sm:flex-row dark:bg-[#10161a]/50"
    >
      {props.logo ? (
        <div className="mb-5">
          <Border>
            <Image
              className="h-fit rounded-full"
              src={props.logo}
              width={100}
              height={100}
              alt={`${props.name} Logo`}
              title={`${props.name} Logo`}
              quality={99}
            />
          </Border>
        </div>
      ) : (
        <div></div>
      )}
      <div className="w-full text-left">
        <div className="mb-3 flex items-center justify-start">
          <h1 className="dark:text-gray-100 mr-3 text-2xl font-bold">{props.name}</h1>
          <Tag title={props.current ? 'Current' : 'Past'} />
        </div>
        <Text>
          {props.description} &bull; {props.year} &bull; {getEmploymentTypeString()} &bull;{' '}
          {props.remote && 'Remote'}
        </Text>
        <div className="relative my-4">
          <Text>{props.task}</Text>
        </div>
        <div className="mt-2 w-full flex-row items-center justify-between">
          <div className="mb-4 mt-2 flex items-center">
            <FiMapPin className="text-gray-600 dark:text-gray-300 mr-2" />
            <Text>{props.location}</Text>
          </div>
          <ButtonLink href={props.link} target="_blank">
            Visit
            <FiExternalLink className="ml-2 text-xl" />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
