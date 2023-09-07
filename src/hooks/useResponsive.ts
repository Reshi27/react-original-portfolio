import { useMediaQuery } from "@mantine/hooks";

export const useResponsive = (size: string) => {
  if (size == "sm") {
    return useMediaQuery("(min-width: 576px)");
  } else if (size == "md") {
    return useMediaQuery("(min-width: 768px)");
  } else if (size == "lg") {
    return useMediaQuery("(min-width: 992px)");
  } else if (size == "xl") {
    return useMediaQuery("(min-width: 1200px)");
  } else {
    return useMediaQuery("(min-width: 1400px)");
  }
};
