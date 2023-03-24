import { Box } from "@mui/material";
import { HeroComponent } from "../../../types";

export type HeroImageProps = { data: HeroComponent };

export function HeroImage({ data }: HeroImageProps) {
  return <Box>{JSON.stringify(data)}</Box>
}

export default HeroImage;
