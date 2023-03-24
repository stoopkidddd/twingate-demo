import { Box, Stack } from "@mui/material"
import useComponentsContext from "../../../hooks/useComponentsContext";
import { IBaseComponent } from "../../../types"
import { ComponentFactory } from "../../ComponentFactory"
import { ComponentWrapper } from "./ComponentWrapper";

export function ComponentsDisplay() {
  const { invalidData, componentData } = useComponentsContext();

  if (invalidData) {
    return <Box>Sorry, it looks like we cannot parse the data you entered</Box>
  }

  // NOTE: it would be nice if the data contract included an "id" to have an easy guarenteed "key"
  // to use while rendering. We can use index here, but it is not best practice.
  // But we can assume that if the index changes, then the data set has also changed.
  return (
    <Stack>
      {componentData.map((d, idx) => (
        <ComponentWrapper key={idx}>
          <ComponentFactory component={d as IBaseComponent} />
        </ComponentWrapper>)
      )}
    </Stack>
  )
}
