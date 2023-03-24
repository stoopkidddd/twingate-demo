import { Box, Stack } from "@mui/material";
import { ComponentsDisplay } from "../../ComponentsDisplay/components/ComponentsDisplay";
import { ContentEditor } from "../../ContentEditor";

export default function ContainerDisplay() {
  return (
    <Box sx={{ width: '100%', maxWidth: '90vw', padding: 2 }}>
      <Stack spacing={2} sx={{ width: '100%', maxWidth: '90vw', justifyContent: 'space-between' }} direction="row" >
        <Stack>
          <ContentEditor />
        </Stack>
        <Stack>
          <ComponentsDisplay />
        </Stack>
      </Stack>
    </Box>
  )
}
