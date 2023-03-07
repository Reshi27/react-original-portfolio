import { Container, Input } from "@mantine/core";
import React, { ChangeEvent, Fragment, useState } from "react";

interface Props {
  messageChangeHandler: (message: string) => void;
}

const BlogSearch: React.FC<Props> = ({ messageChangeHandler }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const searchValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    messageChangeHandler(event.target.value);
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
          onChange={searchValueChangeHandler}
        ></Input>
      </Container>
    </Fragment>
  );
};

export default BlogSearch;
