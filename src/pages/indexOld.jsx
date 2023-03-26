// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import { useMediaQuery } from "react-responsive";
// import { useState, useEffect } from "react";

// // import Framer Motion
// import { motion } from "framer-motion";
// import { useMotionValue } from "framer-motion";
// import { useMotionValueEvent } from "framer-motion";

// // import styled
// import styled from "styled-components";
// import { createGlobalStyle } from "styled-components";
// import { keyframes, ThemeProvider } from "styled-components";

// // Color Palette

// const GlobalStyle = createGlobalStyle`
//  :root {
//   ${
//     "" /* --theme-background:"linear-gradient(
//     141deg,
//     rgba(0, 0, 0, 1) 25%,
//     rgba(93, 2, 80, 1) 69%,
//     rgba(209, 12, 183, 1) 100% "; */
//   }
//     --rotateY: 180deg;
//     --png: url("/glass.png");
//     --perspective: 100px ;
//     --ms: 10000ms;

//     --theme-pinkYellow: "radial-gradient(circle, rgba(244,6,172,1) 2%, rgba(183,217,31,1) 27%)";// pink yellow
//     --theme-turquoise: "#0cd1c3"; // turquoise
//     --theme-red: "#ff0000"; // red
//     --theme-green: "#00ff3e"; // bright green
//     --theme-yellow: "#efff08"; // bright yellow
//     --theme-grad1: "linear-gradient(141deg, rgba(32,29,32,1) 50%, rgba(8,255,246,1) 58%)";
//     --theme-yellowLightBlue: "linear-gradient(141deg, rgba(244,244,6,1) 48%, rgba(8,255,246,1) 59%)"; // yellow and light light blue
//     --theme-orangeBlue: "linear-gradient(347deg, rgba(12,6,244,1) 48%, rgba(243,126,3,1) 59%)"; // orange and blue
//  }

//   `;

// const glow = keyframes`
// from {
//   box-shadow: 
//   0px 0px 36px 23px #0cd1c3,
//    inset -48px 5px 16px -3px #0cd1c3,
//     100px 100px 15px -3px rgba(0,0,0,0.1),

//     2em 6em 36px 23px #ff0000,
//     inset -48px 5px 16px -3px #ff0000,
//     10px 10px 15px -3px rgba(0,0,0,0.1),
    
//      0em 20em 36px 23px #efff08,
//      inset 0px 5px 16px -3px #efff08,
//      0px 0px 15px -3px rgba(0,0,0,0.1);
    
//     /* transform: scale(0.05); */
//   /* offset-distance: 0%; */
// }
// to {
  
//      /* transform: scale(0.13); */
//      /* offset-distance: 10%; */
//      /* transform: rotate(1deg); */
// }
// `;

// // const crack = brokenGlass.src;
// // const inter = Inter({ subsets: ['latin'] })
// const BodyWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 0;

//   /* background-size: cover; */
//   /* background-repeat: no-repeat; */
//   background: linear-gradient(
//     141deg,
//     rgba(0, 0, 0, 1) 25%,
//     rgba(93, 2, 80, 1) 69%,
//     rgba(209, 12, 183, 1) 100%
//   );

//   perspective: var(--perspective);
// `;

// // Crystal Ball
// const CrystalBall = styled.div`
//   /* Children if this Container can have 3D content  */
//   /* perspective: var(--perspective); */
//   perspective: 1000px;
//   /* 3D */
//   transform-style: preserve-3d;
//   transition: transform 0ms;

//   /* Sizing */
//   height: 100%;
//   width: 100%;

//   /*Move the Ball to center with flex  */
//   display: flex;
//   justify-content: center;

//   /* Content Alignment */
//   position: relative;

//   border: 5px solid black;
// `;

// // BallTexture handles both ball because they use the same image just with rotation and transition
// const BallTexture = styled(motion.div)`
//   position: absolute;
//   height: 100%;
//   width: 100%;

//   &::before {
//     content: "";
//     position: absolute;
//     bottom: -50px;
//     width: 100%;
//     height: 100%;
//     border-radius: 50%;
//     background: radial-gradient(#0003, #0003, transparent, transparent);
//     z-index: -1;
//     /* no hover needed */
//   }

//   /*  To get background-image: url("/glass.png") to use png use background-size and background-repeat */
//   &::after {
//     content: "";
//     position: absolute;
//     inset: 0;
//     background-image: var(--png);
//     opacity: 0.55;
//     transform: rotate(var(--rotation));
//     translate: var(--transPx);
//     height: calc(150vw / 6.5); // to get glass to stay in place use calc
//     width: calc(200vw / 6.5);
//     top: 70px;
//     left: 20px;
//     background-size: cover;
//     background-repeat: no-repeat;

//     &:hover {
//       transform: rotateY(var(--rotateY));
//     }
//   }
// `;

// // Front of the Crystal ball
// const BallFront = styled(motion.div)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;

//   /*  Sizing*/
//   width: calc(275vw / 8);
//   height: calc(275vw / 8);

//   /* Add Hover */
//   &:hover {
//     transform: rotateY(var(--rotateY));
//   }

//   box-shadow: inset 0 25px 70px rgba(255, 255, 255, 0.15);
//   border-radius: 5%;
//   overflow: hidden;

//   & div {
//     --rotation: 30deg;
//     --transPx: 20px;
//     --rotateY: 160deg;
//   }
// `;

// // Back of the Crystal ball
// const BallBack = styled(motion.div)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   top: 0;
//   position: absolute;
//   width: calc(275vw / 8);
//   height: calc(275vw / 8);
//   box-shadow: 0 25px 70px rgba(255, 255, 255, 0.15);
//   border-radius: 5%;
//   overflow: hidden;

//   backface-visibility: hidden;

//   background-image: var(--png);
//   opacity: 0.55;
//   transform: rotate(var(--rotation));
//   transform: rotateY(180deg);
//   translate: var(--transPx);
//   height: calc(275vw / 8); // to get glass to stay in place use calc
//   width: calc(275vw / 8);

//   background-size: cover;
//   background-repeat: no-repeat;

//   & div {
//     --rotation: 110deg;
//     --transPx: -65px;
//     --rotateY: 360deg;
//     /* transform: translate3d(12px, 50%, 3em); */
//   }
// `;

// const Circle = styled.div`
//   position: absolute;

//   width: calc(150vw / 9.5);
//   height: calc(150vw / 9.5);
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: flex-start;
//   /* margin: 0 0 5em;  */

//   &::before {
//     content: "";

//     /* Positioning */
//     position: absolute;
//     top: 0;

//     width: 5px;
//     height: 5px;

//     margin: 0em 0em 0em;
//     border-radius: 50%;
//     animation: 15s ${glow} ease-in-out infinite alternate;
//   }
// `;

// const ReflectText = styled(motion.div)`
//   &:hover {
//     transform: rotateY(var(--rotateY));
//   }

//   -webkit-box-reflect: below -7px -webkit-gradient(
//       linear,
//       left top,
//       left bottom,
//       from(transparent),
//       color-stop(3%, transparent),
//       to(rgba(255, 255, 255, 0.5))
//     );
//   font-size: 37px;
//   font-family: Arial Black, Gadget, sans-serif;
//   color: #0dd7ff;
//   font-weight: bold;
// `;

// // const InnerButton = styled.button`
// //   ${props => props.cracks}
// //   {

// //   }
// // `;

// export default function Home({ className }) {
//   // theme
//   const [cracks, setCracks] = useState(false);
//   // const matches = useMediaQuery({minWidth: "300px"})

//   const x = useMotionValue(2);
//   const y = useMotionValue(2);

//   const handleCracks = useEffect(() => {
//     setCracks();
//   }, [setCracks]);

//   // Return Statement
//   return (
//     <>
//       <GlobalStyle />
//       <Head>
//         <title> Crystal Ball</title>
//         {/* <meta name="description" content="" /> */}
//         {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
//       </Head>
//       <BodyWrapper>
//         <CrystalBall>
//           <BallFront>
//             <BallTexture />
//             <ReflectText
//               animate={{
//                 fontSize: "50px",
//               }}
//               initial={
//                 {
//                   // x: x,
//                 }
//               }
//             >
//               TEST
//             </ReflectText>
//           </BallFront>

//           <BallBack>
//             <BallTexture />
//           </BallBack>
//         </CrystalBall>
//         {/* <InnerButton className={className} cracks={cracks} onClick={() => setCracks(!cracks)}>
//       {this.props.children}
//     </InnerButton> */}
//       </BodyWrapper>
//     </>
//   );
// }

// {
//   /*
// // if i decide to use an svg
//  <div className="logo">
//   <Image
//   style={{backgroundColor: "green"}}
//     className="logo"
//     src="/next.svg"
//     alt="Next.js Logo"
//     width={180}
//     height={37}
//     priority
//   />
//   <div className="thirteen">
//     <Image
//       src="/thirteen.svg"
//       alt="13"
//       width={40}
//       height={31}
//       priority
//     />
//   </div>
// </div>   */
// }