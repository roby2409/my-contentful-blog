import { Heading, Text } from '@src/components/design-system';

export default function DocSupportSection() {
  return (
    <section className="mx-auto -mt-12 mb-12 flex h-full flex-col p-4 md:-mt-0 md:p-0">
      <Heading className="mt-5">Document support 💻</Heading>
      <div className="prose mt-5 max-w-none text-[#10161a] dark:text-gray-100">
        <ul>
          <li>
            Latest Curriculum Vitae - &nbsp;
            <a
              className="text-[#10161a] dark:text-gray-100"
              href={`${process.env.NEXT_PUBLIC_BASE_URL}resume.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              <strong className="text-[#10161a] dark:text-gray-100">Download</strong>
            </a>
          </li>
          <li>
            Latest Verklaring - &nbsp;
            <a
              className="text-[#10161a] dark:text-gray-100"
              href={`${process.env.NEXT_PUBLIC_BASE_URL}packlaring.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              <strong className="text-[#10161a] dark:text-gray-100">Download</strong>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
