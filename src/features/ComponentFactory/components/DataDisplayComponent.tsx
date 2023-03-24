import { Box, Button, Stack, styled } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { DataComponent } from "../../../types";

export type DataComponentProps = { data: DataComponent };

const StyledDataDisplay = styled(Box)(() => ({
  display: '-webkit-box',
  WebkitLineClamp: '6',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  maxWidth: '20vw',
}));

function BaseDataDisplayComponent({ data }: DataComponentProps) {
  const [apiData, setApiData] = useState<string | undefined>();

  // NOTE: in a real world example, this would be abstracted away and would use 
  // react-query to manage caching and state of API responses
  const getApiData = async () => {
    const response = await fetch(data.url).then((response) => response.json());

    setApiData(response);
  };

  const refreshHandler = () => {
    getApiData();
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <Stack direction="row">
      <Button variant="contained" onClick={refreshHandler}>Refresh</Button>
      <StyledDataDisplay>{JSON.stringify(apiData, null, 2)}</StyledDataDisplay>
    </Stack>
  )
}

export const DataDisplayComponent = React.memo(BaseDataDisplayComponent, (prevProps, nextProps) => {
  return prevProps.data.url === nextProps.data.url;
})
