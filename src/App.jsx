import Typed from "typed.js";
import Skills from "./Skills";
import Contacts from "./Contacts";
function App() {
  return (
    <>
      {/* Upper card */}
      {/* <div className="w-full  flex justify-center items-center">
        <div className="sm:w-[70%] flex pb-8 flex-col-reverse lg:flex-row m-8 card rounded-xl overflow-hidden bg-[#F9FAFF]">
          <div className="lg:w-[45%] pl-8 pr-2 lg:pl-20 ">
            <div className="hidden lg:flex text-sm font-medium font-mono py-2">
              <span>Rahul Dudi</span>
            </div>
            <div className="flex flex-col gap-4 md:gap-8 text-sm justify-center">
              <div className="text-[#FF8F1C] py-6 font-semibold">
                Jr. MERN-STACK DEVELOPER
              </div>
              <div id="element" className="lg:text-4xl text-2xl  font-bold">
                Hello, my name is Rahul Dudi.
              </div>
              <div className="text-gray-500 leading-7 font-medium">
                A Passionate Full-Stack developer from India, Committed to
                continuous learning and growth in the ever-evolving field of Web
                Development.
              </div>

              <div className="w-full flex text-xs font-semibold gap-2">
                <a
                  href="#projects"
                  className="py-2 hover:scale-110 duration-200 px-5 hover:bg-transparent hover:border-black border-[#FDC435] border-[1px] border-solid bg-[#FF8F1C] rounded-md"
                >
                  Projects
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/rahul-dudi-80ba20193"
                  className="py-2 hover:scale-110 px-5 duration-200 hover:bg-[#FF8F1C] hover:border-[#FF8F1C] border-black border-[1px] border-solid rounded-md"
                >
                  {" "}
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="flex text-gray-500   mt-[15%] items-center gap-1 w-14 duration-200 hover:text-[#FF8F1C] cursor-pointer">
              <a href="#about">
                {" "}
                <i className="bi font-bold bi-arrow-down-circle"> </i>
                <span className="text-xs font-medium"> Scroll</span>
              </a>
            </div>
          </div>
          <div className="lg:w-[60%] flex justify-end">
            <div className="clippy sm:w-[80%] md:w-[100%] w-[100%]  flex flex-col bg-[#FDC435]">
              <div>
                <ul className="flex justify-end lg:justify-end sm:mr-4    gap-1 text-xs sm:gap-8 p-2 sm:text-sm">
                  <li className="cursor-pointer font-medium hover:text-white  w-14 duration-200">
                    <a href="#about">About</a>
                  </li>
                  <li className="cursor-pointer font-medium hover:text-white w-14 duration-200">
                    <a href="#projects">Projects</a>
                  </li>
                  <li className="cursor-pointer font-medium hover:text-white w-14 duration-200">
                    <a href="#contacts">Contacts</a>
                  </li>
                </ul>
              </div>
              <div
                className="w-full  flex items-end
               justify-end"
              >
                <img
                  className="lg:w-96 sm:w-80 w-64 lg:h-96 sm:h-80 h-64 "
                  src="https://res.cloudinary.com/dgcvhlyg9/image/upload/v1710400416/ekqvjyekvlnyx6gmf1lo.png"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Second Card [about] */}
      {/* <div id="about" className=" w-full flex justify-center items-center">
        <div className="sm:w-[70%] flex px-4 py-8 flex-col-reverse lg:flex-row m-8 card rounded-xl overflow-hidden bg-[#FFF]">
          <div className="lg:w-[50%] px-4 lg:pl-20 border-gray-200 border-solid lg:border-r-[1px]">
            <div className="flex  flex-col gap-2 text-xs sm:text-sm justify-center">
              <div className="text-[#FF8F1C] font-semibold">ABOUT ME</div>

              <div className="text-gray-500 leading-7 font-medium">
                <p>
                  <strong>Education :</strong> BCA With IGNOU (2023 - Pursuing)
                </p>
                <p>
                  <strong>Address :</strong> Daulatpura, Jaipur, Rajasthan,
                  303805, India
                </p>
                <p>
                  <strong>Email :</strong> RAHULDUDI1349@GMAIL.COM
                </p>
                <p>
                  <strong>Mobile No. : </strong> (+91) 8233841349
                </p>
              </div>
              <div className="text-[#FF8F1C] font-semibold">WORK HISTORY</div>

              <div className="text-gray-500 leading-6 font-medium">
                <p>
                  <strong>Full Stack Developer Intern</strong> at{" "}
                  <strong>MS INFOTECH </strong>
                  <p>(FEB 2024 - APRIL 2024)</p>
                </p>
              </div>
              <div className="text-[#FF8F1C] font-semibold">SKILLS</div>

              <div>
                <Skills />
              </div>
            </div>
            <div className="flex text-gray-500 mt-[15%] items-center gap-1 w-20 duration-200 hover:text-[#FF8F1C] cursor-pointer">
              <a href="#projects">
                <i className="bi font-bold bi-arrow-down-circle"> </i>
                <span className="text-xs font-medium"> Projects</span>
              </a>
            </div>
          </div>
          <div className="flex items-start flex-col justify-between">
            <div className="w-full flex justify-start ">
              <img
                className="w-[90%]"
                src="https://github-readme-stats.vercel.app/api?username=rahuljat1349&theme=flag-india&show_icons=true&hide_border=true&count_private=true"
              />
            </div>
            <div className="w-full  flex justify-center ">
              <img
                className="w-[90%]"
                src="https://github-readme-streak-stats.herokuapp.com/?user=rahuljat1349&theme=flag-india&hide_border=true"
              />
            </div>
            <div className="w-full mb-2 sm:m-0  flex justify-start ">
              <img
                className="w-[70%]"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=rahuljat1349&theme=flag-india&show_icons=true&hide_border=true&layout=compact "
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* third Card - [projects] */}
      {/* <div id="projects" className=" w-full  flex justify-center items-center">
        <div className="lg:w-[70%] flex lg:px-4 py-8 flex-col lg:flex-row m-8 card rounded-xl overflow-hidden bg-[#FFF]">
          <div className="px-4 lg:pl-20 flex flex-col gap-4">
            <div className="text-[#FF8F1C] mb-2 font-semibold">PROJECTS</div>
            <div className="w-full text-gray-500 leading-7 font-medium">
              <p>
                ⦿ <strong>X-Mall</strong> (Full Stack E-Commerce Web App)
              </p>
              <div className="px-6">
                <p>
                  The X-Mall is a full-stack web application designed to
                  simulate an online shopping experience. The app includes
                  functionality for user registration, login, and
                  authentication. It also incorporates product search and
                  filtering options to enhance the shopping experience. On the
                  backend, the app utilizes Node.js and Express.js for
                  server-side logic and MongoDB for database management.
                  React.js is used for the frontend, providing a responsive and
                  dynamic user interface.
                </p>
                <p>
                  <strong>Project Link</strong> -{" "}
                  <a
                    className="text-blue-600 hover:text-blue-950 underline duration-200"
                    target="_blank"
                    href=" https://x-mall-react.vercel.app/"
                  >
                    {" "}
                    https://x-mall-react.vercel.app/
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full text-gray-500 leading-7 font-medium">
              <p>
                ⦿ <strong>iNoteBook</strong> (Full Stack Note Taking App)
              </p>
              <div className="px-6">
                <p>
                  The NoteBook project is a web-based note-taking application
                  built using React.js for the frontend and MongoDB for data
                  storage. Users can register, log in, and create, edit, and
                  delete their notes. The application provides a clean and
                  intuitive interface for managing personal notes efficiently.
                  Additionally, it incorporates authentication and authorization
                  features to ensure user privacy and security.
                </p>
                <p>
                  <strong>Project Link</strong> -{" "}
                  <a
                    className="text-blue-600 hover:text-blue-950 underline duration-200"
                    target="_blank"
                    href="https://i-note-book-lime.vercel.app/"
                  >
                    {" "}
                    https://i-note-book-lime.vercel.app/{" "}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex text-gray-500 mt-[5%] items-center gap-1 w-20 duration-200 hover:text-[#FF8F1C] cursor-pointer">
              <a href="#contacts">
                <i className="bi font-bold bi-arrow-down-circle"> </i>
                <span className="text-xs font-medium"> Contacts</span>
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* fourth Card [PAGE -2] */}
      {/* <div
        id="contacts"
        className=" w-full  text-gray-500 font-medium flex justify-center items-center"
      >
        <div className="lg:w-[70%] flex px-4 py-8 flex-col gap-4 lg:gap-2 lg:flex-row m-8 card rounded-xl overflow-hidden bg-[#FFF]">
          <div className="lg:w-[50%] px-4 lg:pl-20 ">
            <div className="flex  flex-col gap-2 text-xs sm:text-sm justify-center">
              <div className="text-[#FF8F1C] font-semibold">CONTACTS</div>

              <div>
                <Contacts />
              </div>
              <div className="text-[#FF8F1C] font-semibold">RESUME</div>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1wlt9FopGb7YHe8euFL49M4rTMpYEQX2p/view?usp=sharing"
                className="bg-slate-200 items-center hover:bg-slate-300 duration-200 rounded-md w-full flex justify-center gap-2 p-2"
              >
                <p>Rahul-Dudi-1.pdf</p>
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/?size=256&id=ya4CrqO7PgnY&format=png"
                />{" "}
              </a>
            </div>
          </div>
          <div className="flex  lg:w-[50%]  items-center rounded-lg  bg-slate-200 w-full p-4 flex-col justify-between">
            <h1 className="h-full font-semibold text-lg text-[#FF8F1C] flex items-center">
              Send a Massage
            </h1>

            <form className=" gap-2 w-full p-4 flex flex-col" a>
              <input
                placeholder="john@mail.com"
                className="bg-slate-50 focus:border-slate-300 border-2 bordersol p-2 text-center outline-none rounded-md"
                type="email"
              />
              <textarea
                placeholder="Unfortunately, it is not wokinking right now."
                className="bg-slate-50 focus:border-slate-300 border-2 bordersol p-2 text-center outline-none rounded-md"
                name=""
                id=""
                cols="30"
                rows="5"
              ></textarea>
              <button className="bg-blue-500 hover:bg-blue-600 active:bg-[#FF8F1C] duration-200 p-2 text-center text-white outline-none rounded-md">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div> */}

      {/* <h1 className="text-center text-slate-600 p-2">
        {" "}
        Designed and Developed by <strong>Rahul Dudi</strong>.
      </h1> */}
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <div className=" shadow-xl">
          <img
            className="rounded-xl"
            src="../../construction.webp"
            // src="../../200w.webp"
            alt="Under Construction 🚧:"
          />
        </div>

        <h1 className="text-center  font-bold text-slate-900 p-2">
          My portfolio is in the works! Crafting new projects and refining my
          skills. <br /> Stay tuned for the full showcase—coming soon!
        </h1>
      </div>
    </>
  );
}

export default App;
