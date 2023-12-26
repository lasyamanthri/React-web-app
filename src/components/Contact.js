import React from 'react';
import { Typography, Card, CardContent, Link, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { MarginOutlined } from '@mui/icons-material';
const cardStyle = {
 maxWidth: 200,
 textAlign: 'center',
 padding: '10px',
 cursor: 'pointer',
 transition: 'transform 0.3s ease-in-out',
 '&:hover': {
   transform: 'scale(1.05)',
 },
};
const ContactMe = () => {
 const contactData = [
   {
     icon: <EmailIcon fontSize="large" color="primary" />,
     label: 'khwajafaiz06@gmail.com',
     link: 'mailto:khwajafaiz06@gmail.com',
   },
   {
     icon: <LinkedInIcon fontSize="large" color="primary" />,
     label: 'LinkedIn',
     link: 'https://www.linkedin.com/in/faizmkhwaja/', // Replace with your LinkedIn profile URL
   },
   {
     icon: <GitHubIcon fontSize="large" color="primary" />,
     label: 'GitHub',
     link: 'https://github.com/faiz2399', // Replace with your GitHub profile URL
   },
   {
     icon: <LocationOnIcon fontSize="large" color="primary" />,
     label: 'Location',
     info: 'Boston, USA',
   },
 ];
 const handleCardClick = (link) => {
   window.open(link, '_blank');
 };
 return (
<div id="contact" align = 'center'>
<Typography variant="h4" gutterBottom align='center'>
       Let's Get in Touch
</Typography>
&nbsp;

<Grid container spacing={2}>
       {contactData.map((contact, index) => (
<Grid item xs={6} sm={3} key={index}>
<Card style={cardStyle} onClick={() => handleCardClick(contact.link)}>
<CardContent>
               {contact.icon}
<Typography variant="body1" color="textPrimary" component="p">
                 {contact.label}
</Typography>
               {contact.info && (
<Typography variant="body2" color="textSecondary" component="p">
                   {contact.info}
</Typography>
               )}
</CardContent>
</Card>
</Grid>
       ))}
</Grid>
</div>
 );
};
export default ContactMe;