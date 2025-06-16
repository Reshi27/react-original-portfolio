import React, { Fragment, useState } from "react";
import {
  AvatarWrapper,
  QuotesImage,
  SectionContainer,
  TestimonialBackground,
  TestimonialContainer,
  TestimonialContent,
  TestimonialFooterContainer,
} from "./Section.style";
import { AnimatePresence, motion } from "motion/react";
import { Avatar, Button, Text } from "@mantine/core";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import quotes from "../../../assets/trapesiums.png";
import { ITestimonyData } from "../../../interfaces/Interface";

const TestimonialSection: React.FC = () => {
  const testimonyData: ITestimonyData[] = [
    {
      testimonyId: 1,
      testimonyContent:
        "This developer is a top notch web developer, although the design is simple, but it is not boring",
      testimonyImage:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
      testimonyName: "Ananta Bhagaskara",
      testimonyPosition: "Strombolian CO - Founder",
    },
    {
      testimonyId: 2,
      testimonyContent:
        "Astounding creation and very well mannered developer i have ever met in my entire live and existence",
      testimonyImage:
        "https://images.unsplash.com/photo-1555668809-980c5a5f6493?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimonyName: "Rafi Moyank Watulinga",
      testimonyPosition: "Strombolian CO - Founder",
    },
    {
      testimonyId: 3,
      testimonyContent:
        "Best web developer you can find around your town, a truly friendly neighbourhood person that i have ever worked with",
      testimonyImage:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimonyName: "Ahmad Barra Malombasi",
      testimonyPosition: "Strombolian CO - Founder",
    },
    {
      testimonyId: 4,
      testimonyContent:
        "Working with this developer is the live i want to do, so inspiring, the way he thought me everything its just magical",
      testimonyImage:
        "https://images.unsplash.com/photo-1717533564570-4ea91a5df160?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimonyName: "Harry Ardi Syahputra",
      testimonyPosition: "Strombolian CO - Founder",
    },
  ];

  const [testimonyIndex, setTestimonyIndex] = useState<number>(0);
  const [direction, setDirection] = useState(0);
  const testimonyVariants = {
    next: {
      initial: (dir: number) => ({ opacity: 0, x: dir > 0 ? 100 : -100 }), // Start from the right
      animate: { opacity: 1, x: 0 }, // Move to center
      exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -100 : 100 }), // Exit to the left
    },
    prev: {
      initial: (dir: number) => ({ opacity: 0, x: dir > 0 ? 100 : -100 }), // Start from the left
      animate: { opacity: 1, x: 0 }, // Move to center
      exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -100 : 100 }), // Exit to the right
    },
  };

  const nextButton = (dir: number) => {
    const lastIndex = testimonyData.length - 1; // Get the last index dynamically

    if (testimonyIndex === lastIndex) {
      setDirection(dir);
      setTestimonyIndex(0); // Loop back to the first item
    } else {
      setDirection(dir);
      setTestimonyIndex(testimonyIndex + 1);
    }
  };

  const prevButton = (dir: number) => {
    const lastIndex = testimonyData.length - 1;

    if (testimonyIndex === 0) {
      setDirection(dir);
      setTestimonyIndex(lastIndex); // Loop back to the last item
    } else {
      setDirection(dir);
      setTestimonyIndex(testimonyIndex - 1);
    }
  };
  return (
    <Fragment>
      <TestimonialBackground>
        <TestimonialContainer>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={testimonyData[testimonyIndex].testimonyId}
              variants={testimonyVariants[direction > 0 ? "next" : "prev"]}
              custom={direction}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <QuotesImage src={quotes}></QuotesImage>

              <TestimonialContent>
                {testimonyData[testimonyIndex].testimonyContent}
              </TestimonialContent>

              <TestimonialFooterContainer>
                <AvatarWrapper>
                  <Avatar
                    size="lg"
                    radius="xl"
                    src={testimonyData[testimonyIndex].testimonyImage}
                  ></Avatar>
                  <Text fw={700} color="white">
                    {testimonyData[testimonyIndex].testimonyName} -{" "}
                    {testimonyData[testimonyIndex].testimonyPosition}
                  </Text>
                </AvatarWrapper>
              </TestimonialFooterContainer>
            </motion.div>
          </AnimatePresence>

          <Button.Group
            style={{
              gap: 10,
              display: "flex",
              justifyContent: "end",
              marginTop: "2.5rem",
            }}
          >
            <FaArrowLeft
              size={35}
              cursor={"pointer"}
              onClick={() => prevButton(-1)}
              color="white"
            ></FaArrowLeft>
            <FaArrowRight
              size={35}
              cursor={"pointer"}
              onClick={() => nextButton(1)}
              color="white"
            ></FaArrowRight>
          </Button.Group>
        </TestimonialContainer>
      </TestimonialBackground>
    </Fragment>
  );
};

export default TestimonialSection;
// const testimonyVariants = {
//   next: {
//     initial: { opacity: 0, x: 100 }, // Start from the right
//     animate: { opacity: 1, x: 0 },  // Move to center
//     exit: { opacity: 0, x: -100 },  // Exit to the left
//   },
//   prev: {
//     initial: { opacity: 0, x: -100 }, // Start from the left
//     animate: { opacity: 1, x: 0 },   // Move to center
//     exit: { opacity: 0, x: 100 },    // Exit to the right
//   },
// };

// variants={testimonyVariants[direction > 0 ? "next" : "prev"]}

// const variants = {
//   enter: (dir: number) => ({
//     x: dir > 0 ? 300 : -300, // enter from right if dir > 0
//     opacity: 0,
//   }),
//   center: {
//     x: 0,
//     opacity: 1,
//   },
//   exit: (dir: number) => ({
//     x: dir > 0 ? -300 : 300, // exit to left if dir > 0
//     opacity: 0,
//   }),
// };
