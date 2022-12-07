import React, { Fragment } from "react";
import * as S from "./CardStyle";
export const Card = (props: any) => {
  return (
    <Fragment>
      <S.Card bg={props.color} width={props.width} height={props.height}>
        {props.children}
      </S.Card>
    </Fragment>
  );
};
