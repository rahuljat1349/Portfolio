import { MoonIcon, SunIcon } from "lucide-react";
import React, { useState } from "react";

const PortfolioPage = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 " : "bg-gray-50 "
      }  min-h-screen text-gray-100`}
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
      <main
        className={`${
          darkMode ? " text-gray-100" : " text-gray-800"
        }  max-w-4xl mx-auto py-8 px-4`}
      >
        {/* About Section */}
        <div className="flex w-full py-4 gap-3 justify-center items-center">
          <div className="w-[25%]">
            <img className="w-full rounded-lg h-full" src="/Profile.PNG" alt="" srcset="" />
          </div>
          <section className="mb-12 w-[70%]">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p>
              I'm a full-stack developer who loves building smooth,
              user-friendly web applications. On the frontend, I bring designs
              to life with HTML, CSS, and JavaScript, using tools like React and
              Next.js to create responsive, engaging interfaces. <br />
              For the backend, I work with Node.js, Express, and Prisma,
              connecting databases like PostgreSQL and MongoDB to ensure
              everything runs smoothly and securely. I'm all about writing clean
              code and keeping up with the latest tech trends to deliver solid,
              modern solutions that just work.
            </p>
          </section>{" "}
        </div>

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
                title: "HostIn (Event Management App)",
                description:
                  "A full-stack event management application with user-friendly features for event planning and coordination.",
                link: "https://host-in.vercel.app/",
              },
              {
                title: "Flare (Social Media app)",
                description:
                  "A social media app currently under development, focused on clean design and user engagement.",
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

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <p className="mb-4">
            Interested in working together? Feel free to reach out via the
            following platforms:
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/webdevrj"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode
                  ? "bg-indigo-900 text-indigo-300"
                  : "bg-indigo-200 text-indigo-800"
              } px-4 py-2 rounded-md font-semibold flex items-center gap-2`}
            >
              <span> LinkedIn</span>
            </a>
            <a
              href="https://instagram.com/webdevrj"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode
                  ? "bg-pink-700 text-pink-200"
                  : "bg-pink-200 text-pink-800"
              } px-4 py-2 rounded-md font-semibold flex items-center gap-2`}
            >
              <span>Instagram</span>
            </a>
            <a
              href="https://wa.me/918233841349"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode
                  ? "bg-green-800 text-green-300"
                  : "bg-green-200 text-green-800"
              } px-4 py-2 rounded-md font-semibold flex items-center gap-2`}
            >
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:rahuldudi1349@gmail.com"
              className={`${
                darkMode
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-200 text-gray-800"
              } px-4 py-2 rounded-md font-semibold flex items-center gap-2`}
            >
              <span>Email</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className={`${
          darkMode ? "bg-indigo-800" : "bg-indigo-600"
        } text-center p-6`}
      >
        <p>&copy; 2025 Rahul Dudi</p>
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
