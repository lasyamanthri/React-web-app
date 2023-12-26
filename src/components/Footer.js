import React from 'react';
import { Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';// Assuming a gratitude icon exists in the library
const Footer = () => {
 return (
<div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '20px' }}>
<SchoolIcon fontSize="large" />
<Typography variant="body2" color="textSecondary" gutterBottom>
       The website is made by Faiz Khwaja. Thank you for visiting.
</Typography>
</div>
 );
};
export default Footer;