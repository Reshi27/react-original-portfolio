import React, { Fragment } from "react";
import * as S from "./CardStyle";
export const Card = (props: any) => {
  return (
    <Fragment>
      <S.Card bg={props.warna}>{props.children}</S.Card>
    </Fragment>
  );
};
