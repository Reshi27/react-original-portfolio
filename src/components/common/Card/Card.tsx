import React, { Fragment } from "react";
import { IStyle, Props } from "../../../interfaces/Interface";
import * as S from "./CardStyle";
export const Card = (props: any) => {
  return (
    <Fragment>
      <S.Card bg={props.bg} width={props.width} height={props.height}>
        {props.children}
      </S.Card>
    </Fragment>
  );
};
