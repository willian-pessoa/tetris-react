import React from 'react'
import Cell from "./Cell.jsx"
import { StyledStage } from './styles/StyledStage.js'

export default function Stage({stage}) {
    return (
        <StyledStage width={stage[0].length} height={stage.length}>
            {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
        </StyledStage>
    )
}
