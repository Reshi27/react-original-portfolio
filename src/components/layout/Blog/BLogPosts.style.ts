import styled, { keyframes } from "styled-components";
import { Card } from "@mantine/core";

const upward = keyframes`
from {
    transform: translateY(0);
}

to{
    transform: translateY(-1rem);
}
`;

export const BlogCard = styled(Card)`
  background-color: ${(props) => props.theme};
  cursor: pointer;

  &:hover {
    transition: 0.5s ease;
    transform: translateY(-1rem);
  }

  &:not(:hover) {
    transition: 0.5s ease;
    transform: translateY(0);
  }
`;
