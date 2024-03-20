import Typed from "typed.js";
import Skills from "./Skills";
function App() {
  return (
    <>
      {/* Upper card [PAGE - 1] */}
      <div className="w-full  flex justify-center items-center">
        <div className="sm:w-[70%] flex pb-8 flex-col-reverse lg:flex-row m-8 card rounded-xl overflow-hidden bg-[#F9FAFF]">
          <div className="lg:w-[45%] pl-8 pr-2 lg:pl-20 ">
            <div className="hidden lg:flex text-sm font-medium font-mono py-2">
              <span>Rahul Dudi</span>
            </div>
            <div className="flex flex-col gap-4 md:gap-8 text-sm justify-center">
              <div className="text-[#FF8F1C] py-6 font-semibold">
                MERN-STACK DEVELOPER
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
                <button className="py-2 hover:scale-110 duration-200 px-5 hover:bg-transparent hover:border-black border-[#FDC435] border-[1px] border-solid bg-[#FF8F1C] rounded-md">
                  Projects
                </button>
                <button className="py-2 hover:scale-110 px-5 duration-200 hover:bg-[#FF8F1C] hover:border-[#FF8F1C] border-black border-[1px] border-solid rounded-md">
                  {" "}
                  LinkedIn
                </button>
              </div>
            </div>
            <div className="flex text-gray-500   mt-[15%] items-center gap-1 w-14 duration-200 hover:animate-bounce  hover:text-[#FF8F1C] cursor-pointer">
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
      </div>

      {/* Second Card [PAGE -2] */}
      <div id="about" className=" w-full flex justify-center items-center">
        <div className="sm:w-[70%] flex px-4 py-8 flex-col-reverse lg:flex-row m-8 card rounded-xl overflow-hidden bg-[#FFF]">
          <div className="lg:w-[50%] px-4 lg:pl-20 border-gray-200 border-solid lg:border-r-[1px]">
            <div className="flex  flex-col gap-2 text-xs sm:text-sm justify-center">
              <div className="text-[#FF8F1C] font-semibold">ABOUT ME</div>

              <div className="text-gray-500 leading-9 font-medium">
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
              <div className="text-[#FF8F1C] font-semibold">SKILLS</div>

              <div>
                <Skills />
              </div>
            </div>
            <div className="flex text-gray-500 mt-[15%] items-center gap-1 w-14 duration-200 hover:animate-bounce  hover:text-[#FDC435] cursor-pointer">
              <i className="bi font-bold bi-arrow-down-circle"> </i>
              <span className="text-xs font-medium"> Projects</span>
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
      </div>

      {/* third page - [projects] */}
      <div
        id="about"
        className=" w-full h-screen flex justify-center items-center"
      >
        <div className="w-[70%] flex py-8 flex-col lg:flex-row m-8 card rounded-xl overflow-hidden bg-[#FFF]">
          hello
        </div>
      </div>
    </>
  );
}

export default App;
