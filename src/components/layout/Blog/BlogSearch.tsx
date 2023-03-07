import { Container, Input } from "@mantine/core";
import React, { ChangeEvent, Fragment, useState } from "react";

const BlogSearch: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const searchValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return (
    <Fragment>
      <Container size="xs" my={50}>
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
