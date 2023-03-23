import styled, { keyframes } from "styled-components";
import { Card as MantineCard } from "@mantine/core";

const upward = keyframes`
from {
    transform: translateY(0);
}

to{
    transform: translateY(-1rem);
}
`;

export const Card = styled(MantineCard as any)`
  background-color: ${(props) => props.theme};
  cursor: pointer;
  min-height: 23rem;

  &:hover {
    transition: 0.5s ease;
    transform: translateY(-1rem);
  }

  &:not(:hover) {
    transition: 0.5s ease;
    transform: translateY(0);
  }
`;
