import { styled } from "@mui/material";
import React from "react";
import { HeroComponent } from "../../../types";

export type HeroImageProps = { data: HeroComponent };

const StyledImage = styled('img')(() => ({
  width: '200px',
  objectFit: 'contain',
  maxHeight: '20vh',
}))

// NOTE: improvement opportunity - maybe the payload should include a width and height property
// that we want this to be displayed in? For now, hardcoding a sane size because the image resolution is massive
// Do we want to stretch this outside of the bounds of the aspect ratio? 

function HeroImageBase({ data }: HeroImageProps) {
  return <StyledImage src={data.imageURI} />
}

// NOTE: memoization on the URI might not be ideal. What if they want two of the same image? Works for now
export const HeroImage = React.memo(HeroImageBase, (prevProps, nextProps) => {
  return prevProps.data.imageURI === nextProps.data.imageURI;
})

export default HeroImage;
