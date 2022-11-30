import React, { Fragment } from "react";
import * as S from "./CardStyle";
export const Card = (props: any) => {
  return (
    <Fragment>
      <S.Card className={`${props.className}`}>{props.children}</S.Card>
    </Fragment>
  );
};
