import { Stack } from "@mui/material";
import { IBaseComponent } from "../../../types";

const tempData = [
  {
    "type": "hero",
    "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc"
  },
  {
    "type": "image-text",
    "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc",
    "text": "Sunset from the sky......",
    "title": "Airplane",
    "leftToRight": false
  },
  {
    "type": "data",
    "url": "https://api.publicapis.org/entries"
  }
]

export type ComponentFactoryProps = {
  component: IBaseComponent;
}

export function ComponentFactory({ component }: ComponentFactoryProps) {
  switch (component.type) {
    case 'data':

  }
  return <Stack></Stack>
}
