"use client";
import styled from "./style.module.css";
import Image from "next/image";
import srcImage4 from "../../../public/images/zor.png";
import srcImage1 from "../../../public/images/farm.png";
import srcImage2 from "../../../public/images/cafe.png";
import srcImage3 from "../../../public/images/law.png";
import { Suspense, useEffect, useState } from "react";

export function Gallery() {
  const [step, setStep] = useState(0);
  const [isHoverOnGallery, setIsHoverOnGallery] = useState(false);

  const handlerIsEnterGallery = () => {
    setIsHoverOnGallery(true);
    console.log("Enter");
  };

  const handlerIsLeaveGallery = () => {
    setIsHoverOnGallery(false);
    console.log("Leave");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHoverOnGallery) {
        setStep((prev) => {
          if (prev + 1 <= 3) {
            return prev + 1;
          } else {
            return 0;
          }
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHoverOnGallery]);

  return (
    <Suspense>
      <div
        className={styled.containerAll}
        onMouseEnter={handlerIsEnterGallery}
        onMouseLeave={handlerIsLeaveGallery}
      >
        <div className={styled.containerGallery}>
          <picture
            className={
              styled.picture + " " + (step !== 0 ? styled.initialLeft : "")
            }
          >
            <Image className={styled.img} alt="project" src={srcImage1}></Image>
          </picture>
          <picture
            className={
              styled.picture + " " + (step !== 1 ? styled.initialRight : "")
            }
          >
            <Image className={styled.img} alt="project" src={srcImage2}></Image>
          </picture>

          <picture
            className={
              styled.picture + " " + (step !== 2 ? styled.initialLeft : "")
            }
          >
            <Image className={styled.img} alt="project" src={srcImage3}></Image>
          </picture>
          <picture
            className={
              styled.picture + " " + (step !== 3 ? styled.initialRight : "")
            }
          >
            <Image className={styled.img} alt="project" src={srcImage4}></Image>
          </picture>
        </div>
      </div>
    </Suspense>
  );
}
