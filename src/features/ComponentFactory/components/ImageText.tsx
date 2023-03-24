import { Stack, Typography } from "@mui/material";
import React from "react";
import { HeroComponent, ImageComponent } from "../../../types";
import HeroImage from "./HeroImage";

export type ImageTextProps = { data: ImageComponent }

function BaseImageText({ data }: ImageTextProps) {
  const direction = data.leftToRight ? "row" : "row-reverse";
  return (
    <Stack direction={direction}>
      <HeroImage data={data as HeroComponent} />
      <Stack>
        {data.title && <Typography variant="h6">{data.title}</Typography>}
        <Typography>{data.text}</Typography>
      </Stack>
    </Stack>
  )
}

// NOTE: could be better about these prop comparisons for memoization. 
// Would probably use a deep compare of the object
export const ImageText = React.memo(BaseImageText, (prevProps, nextProps) => {
  return (
    prevProps.data.imageURI === nextProps.data.imageURI
    && prevProps.data.text === nextProps.data.text
    && prevProps.data.title === nextProps.data.title
    && prevProps.data.leftToRight === nextProps.data.leftToRight
  )
})
