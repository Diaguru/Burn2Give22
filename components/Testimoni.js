import React, { useState } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Testimoni = ({
  listUser = [
    {
      name: "DiaGUru",
      image: "/assets/diaguru.png",
      city: "CEO",
      country: "test",
      rating: "5.0",
      testimoni:
        "Genius coin developer",
    },
    {
      name: "DiaSeaBunny",
      image: "/assets/diaseabunny.png",
      city: "CMO",
      country: "test",
      rating: "5.0",
      testimoni:
        "A genius planning and marketing expert",
    },
    {
      name: "Diabright",
      image: "/assets/diabright.png",
      city: "CMO",
      country: "test",
      rating: "5.0",
      testimoni:
        "This planner is a treasure trove of creativity, brimming with innovative ideas and inspiration for every day.",
    },
  ],
}) => {
  const scrollAnimation = useState(() => getScrollAnimation(), []);

  return (
    <div
    className="max-w-screen-xl mt-4 px-8 xl:px-16 mx-auto" id="aboutstaff">
        <p className="my-2 text-black-500">
        &nbsp; 
        </p>
      <div className="flex flex-col w-full my-16" >
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Trustworthy Development Team
          </motion.h3>
          <motion.p
            variants={scrollAnimation}
            className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
            Meet the developers coding all night long to bring the coin ecosystem to the real world.
          </motion.p>
        </ScrollAnimationWrapper>
       
        
      </div>
       {/* <p className="my-2 text-black-500">
          &nbsp; 
          </p> */}
      <div className="relative w-full flex items-start">
          <ScrollAnimationWrapper className="relative w-full">
          <motion.div variants={scrollAnimation} custom={{duration: 3}}>
            <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                  Subscribe Now for <br /> Get Special Features!
                </h5>
                <p>Let's subscribe with us and find the fun.</p>
              </div>
              <ButtonPrimary>Get Started</ButtonPrimary>
            </div>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
              ></div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
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
                <p className="text-lg text-black-500">{""}</p>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.city}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
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
