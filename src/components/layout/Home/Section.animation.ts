import styled, { keyframes } from "styled-components";

export const moveInLeft = keyframes`
 0% {
        opacity: 0;
        transform: translateX(-10rem);
    }

    80% {
        transform: translateX(1rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
`;

export const moveInRight = keyframes`
0%{
    opacity: 0;
    transform: translateX(10rem);
}
80% {
    transform: translateX(-1rem);
}

100% {
    opacity: 1;
    transform: translate(0);
}
`;

export const moveInUp = keyframes`
0% {
    opacity: 0;
    transform: translateY(2rem);
}

100% {
    opacity: 1;
    transform: translate(0);
}

`;
