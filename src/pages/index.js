import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";


// import Framer Motion
import { motion } from "framer-motion";

// import styled
import styled from "styled-components";



// const crack = brokenGlass.src; 
// const inter = Inter({ subsets: ['latin'] })
const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    141deg,
    rgba(0, 0, 0, 1) 25%,
    rgba(93, 2, 80, 1) 69%,
    rgba(209, 12, 183, 1) 100%
  );
`;

const Ball = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: calc(275vw / 8);
  height: calc(275vw /8);
  box-shadow: inset 0 25px 70px rgba(255, 255, 255, 0.15);
  border-radius: 50%;

  &::before {
    content: "";
    position: absolute;
    bottom: -50px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient( #0003, #0003, transparent, transparent);
    z-index: -1;
  }
/*  To get background-image: url("/glass.png") to use png use background-size and background-repeat */
  &::after {
    content: "";
    position: relative;
    inset: 0;
    background-image: url("/glass.png");
    opacity: 0.55;
    transform: rotate(10deg);
    height: calc(150vw/ 6.5);
    width: calc(200vw/ 6.5);
        top: -10px;
        left: -9px;
        background-size: cover;
        background-repeat: no-repeat;
  }
`;

const Circle = styled.div`

`;

export default function Home() {
  

  return (
    <>
      <Head>
        <title> Crystal Ball</title>
        {/* <meta name="description" content="" /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      </Head>
      <BodyWrapper>
        <Ball

         />
        
          {/* <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle /> */}
        
      </BodyWrapper>
    </>
  );
}

{
  /*
// if i decide to use an svg
 <div className="logo">
  <Image
  style={{backgroundColor: "green"}}
    className="logo"
    src="/next.svg"
    alt="Next.js Logo"
    width={180}
    height={37}
    priority
  />
  <div className="thirteen">
    <Image
      src="/thirteen.svg"
      alt="13"
      width={40}
      height={31}
      priority
    />
  </div>
</div>   */
}
