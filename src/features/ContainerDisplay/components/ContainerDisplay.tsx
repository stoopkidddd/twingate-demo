import { Box, Stack } from "@mui/material";
import { ContentEditor } from "../../ContentEditor";
import { FactoryDisplay } from "../../Factory/components/FactoryDisplay";

export default function ContainerDisplay() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack sx={{ width: '100%', justifyContent: 'space-around' }} direction="row" >
        <Stack>
          <ContentEditor />
        </Stack>
        <Stack>
          <FactoryDisplay />
        </Stack>
      </Stack>
    </Box>
  )
}
