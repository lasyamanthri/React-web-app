
import React from 'react';

import { Typography, Button, Box ,Grid} from '@mui/material';

import resume from '../assests/resume.pdf'
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';



const Resume = () => {

  const downloadResume = () => {

    const link = document.createElement('a');

    link.href = resume

    link.setAttribute('download', 'FaizKhwaja_Resume.pdf'); // Change the name as needed

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

  };

  return (

    <div id="resume">
    

      <Typography variant="h4" gutterBottom align='center'>

        Resume

      </Typography>

      <Typography variant="body1" gutterBottom align='CENTER'>

        Feel free to have a look at my resume. If you have any questions, please reach out to me.

      </Typography>

      <Box textAlign='center' xs = {5}>

      <Grid item xs={5}>

      <Button  startIcon = {<BrowserUpdatedIcon/>} variant="contained" color="primary" onClick={downloadResume}>

        Download Resume

      </Button>
      </Grid>
      </Box>

    </div>

  );

};

export default Resume;