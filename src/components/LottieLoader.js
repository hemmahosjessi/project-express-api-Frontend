import React from "react";
import Lottie from "react-lottie";
import animationData from "./lottieLoader.json";



export const LottieLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      <Lottie options={defaultOptions} style={{ height:300, width:300 }}/> 
    </>
  );
}

