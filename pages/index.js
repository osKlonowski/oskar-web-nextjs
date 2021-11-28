import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import ProjectCard from "../components/projectCard/ProjectCard";
// <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
// pages/index.js
// </code>

export default function Home() {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div className="bg-black">
      <Head>
        <title>Oskar Klonowski</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Portfolio Website of Oskar Klonowski
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <ProjectCard
            title="Documentation"
            description="Find in-depth information about Next.js features and API."
          />
          <ProjectCard
            title="Learn"
            description="Learn about Next.js in an interactive course with quizzes"
          />
          <ProjectCard
            title="Examples"
            description="Discover and deploy boilerplate example next.js projects."
          />
          <ProjectCard
            title="Deploy"
            description="Instantly deploy your next.js site to a public URL"
          />
        </div>
      </main>

      <footer className="flex items-center text-white justify-start w-full h-24 border-t p-10">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; 2021 Oskar Klonowski
        </a>
      </footer>
    </div>
  );
}
