import { Box, styled } from "@mui/material";
import { DataComponent, HeroComponent, IBaseComponent, ImageComponent } from "../../../types";
import { DataDisplayComponent } from "../components/DataDisplayComponent";
import HeroImage from "../components/HeroImage";
import { ImageText } from "../components/ImageText";

export type ComponentFactoryProps = {
  component: IBaseComponent;
}

const StyledNotFound = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export function ComponentFactory({ component }: ComponentFactoryProps) {
  switch (component.type) {
    case 'data':
      return <DataDisplayComponent data={component as DataComponent} />;
    case 'hero':
      return <HeroImage data={component as HeroComponent} />;
    case 'image-text':
      return <ImageText data={component as ImageComponent} />;
    default:
      return <StyledNotFound>We could not find this component type: {component.type}</StyledNotFound>

  }
}
