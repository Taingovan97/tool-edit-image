import React from 'react'
import {TextField, Button} from '@mui/material'
import {styled} from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import './Home.css'

const Home = () => {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <div className='home'>
      <div className='div-1'>
        <span className='title'>Image Processing</span>
        <div className='frame-1'>
          <Button style={{marginTop:20, marginLeft:8}} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload csv file
            <VisuallyHiddenInput type="file" />
          </Button>
          <TextField className="input-field-instance" id="logo-url" label="Logo URL" variant="outlined" type="text" sx={{m:1, width: '50ch'}}></TextField>
          <TextField className="input-field-instance" id="id-telegram" label="Id Telegram" variant="outlined" type="text" sx={{m:1, width: '50ch'}}></TextField>
          <TextField className="input-field-instance" id="shop-name" label="Shop name" variant="outlined" type="text" sx={{m:1, width: '50ch'}}></TextField>
          <TextField className="input-field-instance" id="logo-width" label="Logo Width" variant="outlined" type="text" sx={{m:1, width: '50ch'}}></TextField>
          <TextField className="input-field-instance" id="logo-height" label="Logo Height" variant="outlined" type="text" sx={{m:1, width: '50ch'}}></TextField>
          <TextField className="input-field-instance" id="image-width" label="Image Width" variant="outlined" type="text" sx={{m:1, width: '50ch'}}></TextField>
          <TextField className="input-field-instance" id="image-height" label="Image Height" variant="outlined" type="text" sx={{m:1, width: '50ch'}}></TextField>
          <TextField className="input-field-instance" id="quality" label="Quality" variant="outlined" type="text" sx={{m:1, width: '50ch'}}></TextField>

          <Button className='btn' variant='contained'>Upload and Process</Button>
        </div>
      </div>

    </div>
  )
}

export default Home