import { MoonIcon, SunIcon } from "lucide-react";
import React, { useState } from "react";

const PortfolioPage = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      } min-h-screen`}
    >
      {/* Header */}
      <header
        className={`${
          darkMode ? "bg-indigo-800" : "bg-indigo-600"
        } p-6 text-center`}
      >
        <div className="flex items-center justify-around max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl font-bold">Rahul Dudi</h1>
            <p className="text-xl mt-2">
              Full-Stack Developer | MERN Stack | Next.js | Prisma
            </p>
            <p className="mt-4">
              Contact: rahuldudi1349@gmail.com | +91 8233841349
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full focus:outline-none"
          >
            {darkMode ? (
              <SunIcon className="h-8 w-8 text-yellow-400" />
            ) : (
              <MoonIcon className="h-8 w-8 text-indigo-200" />
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-8 px-4">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            I'm a passionate frontend developer specializing in creating
            stunning and user-friendly websites and applications using HTML,
            CSS, JavaScript, and modern frameworks like Next.js and Prisma.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "Tailwind CSS",
              "React.js",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "C and C++",
              "Node.js",
              "Express.js",
              "Hono",
              "MongoDB",
              "mongoose",
              "PostgreSQL",
              "Prisma",
              "Redis",
              "Redux Toolkit",
              "Recoil",
              "Git",
              "GitHub",
              "Docker",
              "AWS (basics)",
              "Kubernetes",
              "Redis",
              "pubsubs",
              "Queues",
              "webSockets",
              "webRTC",
              "Database pooling",
              "Monorepos",
              "Turborepo",
              "NextAuth",
              "CI/CD Pipeline",
              "OpenAPI Specs",
              "Testing",
              "Monitoring",
              "Logging",
            ].map((skill) => (
              <li
                key={skill}
                className={`${
                  darkMode
                    ? "bg-indigo-900 text-indigo-300"
                    : "bg-indigo-200 text-indigo-800"
                } px-3 py-1 rounded-md`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="space-y-6">
            {[
              {
                title: "X-Mall (E-Commerce App)",
                description:
                  "An e-commerce application built using MERN stack, providing a seamless shopping experience.",
                link: "https://x-mall-react.vercel.app",
              },
              {
                title: "iNoteBook (Note-Taking App)",
                description:
                  "A note-taking application with a clean interface and robust functionality for easy organization.",
                link: "https://i-note-book1.vercel.app/",
              },
              {
                title: "Flare (Twitter-like App)",
                description:
                  "A social media app currently under development, focused on clean design and user engagement.",
              },
              {
                title: "HopIn (Event Management App)",
                description:
                  "A full-stack event management application with user-friendly features for event planning and coordination.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className={`${
                  darkMode
                    ? "bg-gray-800 text-gray-100"
                    : "bg-white text-gray-900"
                } p-4 border rounded-md shadow-md`}
              >
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      darkMode ? "text-indigo-400" : "text-indigo-600"
                    } hover:underline mt-2 inline-block`}
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="space-y-4">
            <div
              className={`${
                darkMode
                  ? "bg-gray-800 text-gray-100"
                  : "bg-white text-gray-900"
              } p-4 border rounded-md shadow-md`}
            >
              <h3 className="text-xl font-bold">
                Bachelor of Computer Applications - IGNOU, Delhi
              </h3>
              <p className="text-gray-600">Ongoing</p>
            </div>
            <div
              className={`${
                darkMode
                  ? "bg-gray-800 text-gray-100"
                  : "bg-white text-gray-900"
              } p-4 border rounded-md shadow-md`}
            >
              <h3 className="text-xl font-bold">
                Senior Secondary - RBSE at GSSS, Khora Shyamdas, Jaipur
              </h3>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className={`${
          darkMode ? "bg-indigo-800" : "bg-indigo-600"
        } text-center p-6`}
      >
        <p>&copy; 2024 Rahul Dudi</p>
        <div className="mt-2 space-x-4">
          <a
            href="https://github.com/rahuljat1349"
            className="text-white hover:text-gray-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-dudi-25432831b"
            className="text-white hover:text-gray-300"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
