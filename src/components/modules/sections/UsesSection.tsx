import { Heading, Text } from '@src/components/design-system';

export default function UsesSection() {
  return (
    <section className="mx-auto -mt-12 h-full mb-12 flex flex-col p-4 md:-mt-0 md:p-0">
      <Heading className="mt-5">Uses 💻</Heading>
      <div className="dark:text-gray-100 prose mt-5 max-w-none text-[#10161a]">
        <Text>This page contains a list of applications that I usually use.</Text>
        <h2 className="dark:text-gray-100 text-[#10161a]">Development Tools</h2>
        <ul>
          <li className=" dark:text-gray-100 text-[#10161a]">
            <strong className="dark:text-gray-100 text-[#10161a]">Editor:&quot;</strong>&quot;
            <a
              href="https://code.visualstudio.com/"
              className="dark:text-gray-100 text-[#10161a]"
              target="_blank"
              rel="noreferrer"
            >
              Visual Studio Code
            </a>
            &quot; With&quot;
            <a
              className="dark:text-gray-100 text-[#10161a]"
              href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl"
              target="_blank"
              rel="noreferrer"
            >
              Night Owl Theme
            </a>
            .
          </li>
          <li>
            <strong className="dark:text-gray-100 text-[#10161a]">Font:&quot;</strong>&quot;
            <a
              className="dark:text-gray-100 text-[#10161a]"
              href="https://github.com/keyding/Operator-Mono"
              target="_blank"
              rel="noreferrer"
            >
              Operator Mono
            </a>
            &quot;
          </li>
          <li>
            <strong className="dark:text-gray-100 text-[#10161a]">Git Client:&quot;</strong>&quot;
            <a
              className="dark:text-gray-100 text-[#10161a]"
              href="https://www.sublimemerge.com/"
              target="_blank"
              rel="noreferrer"
            >
              Sublime Merge
            </a>
          </li>
          <li>
            <strong className="dark:text-gray-100 text-[#10161a]">
              Android Text Editor:&quot;
            </strong>
            &quot;
            <a
              className="dark:text-gray-100 text-[#10161a]"
              href="https://developer.android.com/studio"
              target="_blank"
              rel="noreferrer"
            >
              Android Studio
            </a>
          </li>
          <li>
            <strong className="dark:text-gray-100 text-[#10161a]">
              Database Management:&quot;
            </strong>
            &quot;
            <a
              className="dark:text-gray-100 text-[#10161a]"
              href="https://dbeaver.io/"
              target="_blank"
              rel="noreferrer"
            >
              DBeaver
            </a>
          </li>
          <li>
            <strong className="dark:text-gray-100 text-[#10161a]">REST API Testing:&quot;</strong>
            &quot;
            <a
              className="dark:text-gray-100 text-[#10161a]"
              href="https://www.postman.com/"
              target="_blank"
              rel="noreferrer"
            >
              Postman
            </a>
          </li>
          <li>
            <strong className="dark:text-gray-100 text-[#10161a]">
              Container App Manage:&quot;
            </strong>
            &quot;
            <a
              className="dark:text-gray-100 text-[#10161a]"
              href="https://www.docker.com/products/docker-desktop"
              target="_blank"
              rel="noreferrer"
            >
              Docker Desktop
            </a>
          </li>
        </ul>
        <h2 className="dark:text-gray-100 text-dark">Workstation</h2>
        <ul>
          <li>
            <a
              className="dark:text-gray-100 text-[#10161a]"
              href="https://ibox.co.id/product/MBA-M1-IB-CON"
              target="_blank"
              rel="noreferrer"
            >
              <strong className="dark:text-gray-100 text-[#10161a]">
                Macbook Air &ldquo; M1 2020 8/256
              </strong>
            </a>
            &quot; Main Weapon for my work
          </li>
          <li>
            <a
              className="dark:text-gray-100 text-[#10161a]"
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
              className="dark:text-gray-100 text-[#10161a]"
              href="https://www.samsung.com/id/monitors/flat/sr35-24-inch-ips-fhd-1080p-freesync-ls24r350fzexxd/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Samsung LED S24R350</strong>
            </a>
            &quot; IPS Monitor from Samsung
          </li>
          <li>
            <a
              className="dark:text-gray-100 text-[#10161a]"
              href="https://rexus.id/produk/keyboard-rexus-daiva-d68sf-max/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Keyboard Rexus RX -D68SF</strong>
            </a>
            &quot; Mechanical Keyboard with blue switch
          </li>
          <li>
            <a
              className="dark:text-gray-100 text-[#10161a]"
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
