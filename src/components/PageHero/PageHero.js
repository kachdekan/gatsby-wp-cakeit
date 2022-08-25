import React from 'react'
import { StyledImg } from "./PageHero.styles";

const PageHero = ({ img }) => {
  return (
    <StyledImg image={img} alt="Page hero" />
  )
}

export default PageHero