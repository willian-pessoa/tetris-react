import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

export default function Cell({ type }) {
  return (
    <StyledCell color={TETROMINOS[type].color} type={type} />
  );
}
