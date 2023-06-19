import Image from "next/image";

const Person = () => {
  return <h1>Flavio Coradini</h1>;
};

/**
 * NAME
 * Bit Image
 * DESCRIPTION
 * JOBS
 * EDUCATION
 */

/**
 * SECTION - e.g. Experience, Education
 * header
 * body
 * items
 */

const Paragraph = ({ text }: { text: String }) => (
  <p className="mb-5 leading-relaxed">{text}</p>
);

const Section: React.FC<{ header: String; children: React.ReactNode }> = ({
  header,
  children,
}) => {
  return (
    <div className="my-10 w-full">
      <h2 className="text-2xl text-center">{header}</h2>
      {children}
    </div>
  );
};

const PersonProfileImage = () => (
  <div className="my-10">
    <Image
      src="/profile.jpeg"
      alt="Person Logo"
      className="rounded-full"
      width={200}
      height={200}
      priority
    />
  </div>
);

const Bio = () => (
  <div className="mt-5">
    <Paragraph
      text="From my first algorithm implemented on a Lego Mindstorm during High
          School until my latest Web and Mobile App, coding was always a safe
          place for freedom and creativity. My professional life started during
          my Electrical Engineering course as a Scholarship Student but it
          really sparked after I took over the IT family business and faced all
          the challenges of running a company."
    />
  </div>
);

const PersonName = () => <h1 className="text-4xl">Flavio Coradini</h1>;

const jobs = [
  {
    company: "The Beachbody Company",
    url: "https://www.beachbodyondemand.com/",
    location: "Remote",
    role: "Senior Software Engineer",
    period: "Jul. 2022 - Feb. 2023",
    achievments: [
      "Successfully migrated React web pages to Next.js, resulting in improved SEO and performance through enhanced caching capabilities.",
      "Promoted architectural improvements and modernization efforts for a 6-year-old React codebase",
      "Enhanced the Video Player analytics tool (Conviva) to efficiently capture and analyze stream data, ensuring accurate and reliable insights",
    ],
  },
  {
    company: "The Beachbody Company",
    url: "https://www.beachbodyondemand.com/",
    location: "Remote",
    role: "Senior Software Engineer",
    period: "Jul. 2022 - Feb. 2023",
    achievments: [
      "Successfully migrated React web pages to Next.js, resulting in improved SEO and performance through enhanced caching capabilities.",
      "Promoted architectural improvements and modernization efforts for a 6-year-old React codebase",
      "Enhanced the Video Player analytics tool (Conviva) to efficiently capture and analyze stream data, ensuring accurate and reliable insights",
    ],
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between items-center p-24 font-mono bg-gray-800">
      <PersonName />
      <PersonProfileImage />
      <Bio />
      {/* Include the company links */}
      <Section header={"Jobs"}>
        {jobs.map(({ company, role, period, location, achievments }) => (
          <div key={company} className="my-5">
            <div className="flex flex-row justify-between">
              <h3 className="font-bold">{company}</h3>
              <h3 className="italic">{location}</h3>
            </div>
            <div className="flex flex-row justify-between mt-1">
              <h4 className="font-medium">{role.toUpperCase()}</h4>
              <h3 className="italic">{period}</h3>
            </div>
            <ul className="list-disc mt-2">
              {achievments.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>
      {/* <Section header={"Education"}>hi</Section> */}
      {/* <Section header={"About Me"}>hi</Section> */}

      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
