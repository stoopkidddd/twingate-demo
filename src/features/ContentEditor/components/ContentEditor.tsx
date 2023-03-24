import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useState } from 'react';
import useComponentsContext from '../../../hooks/useComponentsContext';

export function ContentEditor() {
  const { unparsedData, setComponentData } = useComponentsContext();

  return (
    <TextareaAutosize
      value={unparsedData}
      onChange={(evt) => setComponentData(evt.target.value)}
      style={{ width: '30vw', minHeight: '80vh' }} />
  )
}

export default ContentEditor;
