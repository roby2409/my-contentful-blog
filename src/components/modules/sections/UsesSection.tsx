import { Heading, Text } from '@src/components/design-system';

export default function UsesSection() {
  return (
    <section className="mx-auto -mt-12 mb-12 flex h-full flex-col p-4 md:-mt-0 md:p-0">
      <Heading className="mt-5">Uses 💻</Heading>
      <div className="prose mt-5 max-w-none text-[#10161a] dark:text-gray-100">
        <Text>This page contains a list of applications that I usually use.</Text>
        <h2 className="text-[#10161a] dark:text-gray-100">Development Tools</h2>
        <ul>
          <li className=" text-[#10161a] dark:text-gray-100">
            <strong className="text-[#10161a] dark:text-gray-100">Editor:&quot;</strong>&quot;
            <a
              href="https://code.visualstudio.com/"
              className="text-[#10161a] dark:text-gray-100"
              target="_blank"
              rel="noreferrer"
            >
              Visual Studio Code
            </a>
            &quot; With&quot;
            <a
              className="text-[#10161a] dark:text-gray-100"
              href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl"
              target="_blank"
              rel="noreferrer"
            >
              Night Owl Theme
            </a>
            .
          </li>
          <li>
            <strong className="text-[#10161a] dark:text-gray-100">Font:&quot;</strong>&quot;
            <a
              className="text-[#10161a] dark:text-gray-100"
              href="https://github.com/keyding/Operator-Mono"
              target="_blank"
              rel="noreferrer"
            >
              Operator Mono
            </a>
            &quot;
          </li>
          <li>
            <strong className="text-[#10161a] dark:text-gray-100">Git Client:&quot;</strong>&quot;
            <a
              className="text-[#10161a] dark:text-gray-100"
              href="https://www.sublimemerge.com/"
              target="_blank"
              rel="noreferrer"
            >
              Sublime Merge
            </a>
          </li>
          <li>
            <strong className="text-[#10161a] dark:text-gray-100">
              Android Text Editor:&quot;
            </strong>
            &quot;
            <a
              className="text-[#10161a] dark:text-gray-100"
              href="https://developer.android.com/studio"
              target="_blank"
              rel="noreferrer"
            >
              Android Studio
            </a>
          </li>
          <li>
            <strong className="text-[#10161a] dark:text-gray-100">iOS Text Editor:&quot;</strong>
            &quot;
            <a
              className="text-[#10161a] dark:text-gray-100"
              href="https://xcodereleases.com/"
              target="_blank"
              rel="noreferrer"
            >
              Xcode
            </a>
          </li>
          <li>
            <strong className="text-[#10161a] dark:text-gray-100">
              Database Management:&quot;
            </strong>
            &quot;
            <a
              className="text-[#10161a] dark:text-gray-100"
              href="https://dbeaver.io/"
              target="_blank"
              rel="noreferrer"
            >
              DBeaver
            </a>
          </li>
          <li>
            <strong className="text-[#10161a] dark:text-gray-100">REST API Testing:&quot;</strong>
            &quot;
            <a
              className="text-[#10161a] dark:text-gray-100"
              href="https://www.postman.com/"
              target="_blank"
              rel="noreferrer"
            >
              Postman
            </a>
          </li>
          <li>
            <strong className="text-[#10161a] dark:text-gray-100">
              Container App Manage:&quot;
            </strong>
            &quot;
            <a
              className="text-[#10161a] dark:text-gray-100"
              href="https://www.docker.com/products/docker-desktop"
              target="_blank"
              rel="noreferrer"
            >
              Docker Desktop
            </a>
          </li>
        </ul>
        <h2 className="text-dark dark:text-gray-100">Workstation</h2>
        <ul>
          <li>
            <a
              className="text-[#10161a] dark:text-gray-100"
              href="https://ibox.co.id/product/MBP-M1-16-21-IB-CON"
              target="_blank"
              rel="noreferrer"
            >
              <strong className="text-[#10161a] dark:text-gray-100">
                Macbook Pro &ldquo; M1 2021
              </strong>
            </a>
            &quot; Main Weapon for my work
          </li>
          <li>
            <a
              className="text-[#10161a] dark:text-gray-100"
              href="https://apps.apple.com/us/app/be-focused-focus-timer/id973130201"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Be Focused - Focus Timer</strong>
            </a>
            &quot;
          </li>
          <li>
            <a
              className="text-[#10161a] dark:text-gray-100"
              href="https://www.keychron.com/products/keychron-k4-wireless-mechanical-keyboard-version-2"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Keyboard Keychron Mechanical</strong>
            </a>
            &quot; Mechanical Keyboard with blue switch
          </li>
          <li>
            <a
              className="text-[#10161a] dark:text-gray-100"
              href="https://www.notion.so/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Notion</strong>
            </a>
            &quot; Journaling, Write Todo List, etc
          </li>
        </ul>
      </div>
    </section>
  );
}
