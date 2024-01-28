import React, { useState } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Testimoni = ({
  listUser = [
    {
      name: "Diaguru",
      image: "/assets/diaguru.png",
      city: "CEO",
      country: "test",
      rating: "5.0",
      testimoni:
        "Leading with strong tech skills and a drive to overcome challenges, I navigate my company through the crypto world with confidence and strategic insight.",
    },
    {
      name: "DiaSeaBunny",
      image: "/assets/diaseabunny.png",
      city: "CMO",
      country: "test",
      rating: "5.0",
      testimoni:
        "He is a visionary, constantly exploring new avenues to market our cryptocurrency innovations and capture the audience's imagination.",
    },
    {
      name: "Diabright",
      image: "/assets/Diabright.png",
      city: "CMO",
      country: "test",
      rating: "5.0",
      testimoni:
        "A genius planning and marketing expert",
    },
  ],
}) => {
  const scrollAnimation = useState(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-4 px-8 xl:px-16 mx-auto"
      id="about"
    >
      
      <div className="relative w-full flex items-start">
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-1 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-start justify-start sm:justify-start py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{duration: 2 + index}}
              variants={scrollAnimation}
            >
             {/* <Image
                    src={listUsers.image}
                    height={250}
                    width={250}
                    alt="Icon People"
                  /> */}
              {/* <div className="flex mx-auto w-40 sm:w-auto"> */}
              <div style={{ width: "100%" }}>
                {/* <div className="flex items-center justify-center bg-orange-100 w-100 h-100 mr-6 rounded-full"> */}
                <div className="flex items-center justify-center" style={{ width: "100%" }}>
                  <img src={listUsers.image} style={{ width: "60%" }} />
                </div>
                <p className="text-lg text-black-500">{" "}</p>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.city}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                  <p className="text-lg text-black-500">{" "}</p><br></br>
                  <p className="text-lg text-black-500">{listUsers.testimoni}</p>
                </div>
              </div>
            </motion.div>
          ))}
       </ScrollAnimationWrapper>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div>
    </div>
  );
};

export default Testimoni;
