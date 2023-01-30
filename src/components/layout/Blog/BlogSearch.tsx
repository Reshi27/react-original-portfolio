import { Container, Input } from "@mantine/core";
import React, { Fragment } from "react";

const BlogSearch: React.FC = () => {
  return (
    <Fragment>
      <Container size="xs" py={50}>
        <Input
          placeholder="Search Here"
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.orange[7],
              },
            },
          })}
        ></Input>
      </Container>
    </Fragment>
  );
};

export default BlogSearch;
