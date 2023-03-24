import { Box, styled } from "@mui/material";

// maybe we want to do more here about the sizing of a component container?
// mobile view? Portrait vs landscape? etc...
export const ComponentWrapper = styled(Box)(() => ({
  width: '100%',
  minHeight: '10vh',
  border: '1px solid black',
  borderRadius: 4,
  marginBottom: 8,
  padding: 8,
}))
