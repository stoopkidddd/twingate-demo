import { Box } from "@mui/material";
import { ImageComponent } from "../../../types";

export type ImageTextProps = { data: ImageComponent }

export function ImageText({ data }: ImageTextProps) {
  return <Box>{JSON.stringify(data)}</Box>
}
