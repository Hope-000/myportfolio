import React from "react";
import HeroImage from "../assets/HeroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

import { TypeAnimation } from "react-type-animation";
import "./styles.css"; // Import styles for glitch effect

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-right h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
         Hello World!
          </h2>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
         I'm Akshay Tanda
          </h2>
          {/* Typing Animation */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            <TypeAnimation
             sequence={[
                "UI/UX designer", 4000,
                "Dotnet developer", 4000,
                "Web Developer", 4000
              ]}
              speed={20}
              repeat={Infinity}
            />
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            Passionate about building scalable web applications and integrating the latest technologies.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-beige-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

         {/* TV Static Effect */}
         <div className="tv-static-container max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="tv-static "></div>
          <img src={HeroImage} alt="my profile" className="profile-img rounded-full mx-auto w-48 md:w-100" />
        </div>
      </div>
    </div>
  );
};
//         {/* Glitch Effect on Hero Image */}
//         <div className="glitch-container">
//           <img
//             src={HeroImage}
//             alt="my profile"
//             className="glitch-img rounded-full mx-auto w-1/3 md:w-100"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export default Home;
