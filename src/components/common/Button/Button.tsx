import React, { Fragment } from "react";
import * as S from "./Button.style";

export const Button = (props: any) => {
  return (
    <Fragment>
      <S.Button bg={props.bg}>{props.children}</S.Button>
    </Fragment>
  );
};
