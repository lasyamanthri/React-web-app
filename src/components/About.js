// import React from 'react';
// import { Typography, Container, Grid } from '@mui/material';
// import profileImage from '../assests/images/Lasya.jpg'
// const about = () => {
//  return (
// <Container id="about" sx={{ paddingTop: '80px', paddingBottom: '80px' }}>
// <Grid container spacing={3} alignItems="center">
// <Grid item xs={12} md={6}>

// <img src={profileImage} alt="Faiz Khwaja"
//  style={{
   
//     width: '25%',
//     height: '25%%',
//     borderRadius: '50%',
//     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//     border: '4px solid #fff', // White border around the image
//   }}  />
// </Grid>
// <Grid item xs={12} md={6}>
// <Typography variant="h4" gutterBottom>
//            About Me
// </Typography>
// <Typography variant="body1">
//           I am fazi and this is my website
//            {/* Your dummy paragraph about yourself */}
// </Typography>
// </Grid>
// </Grid>
// </Container>
//  );
// };
// export default about;



import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import profileImage from '../assests/images/faiz.jpg'
import backgroundImage from '../assests/images/ml.jpg'
import styled, { keyframes } from 'styled-components';
const spin = keyframes`
 from {
   transform: rotate(0deg);
 }
 to {
   transform: rotate(360deg);
 }
`;

const RotatingImage = styled.img`
position: 'absolute',
width: '100%',
height: '100%',
objectFit: 'cover',
borderRadius: '50%',
boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
border: '4px solid #fff', // White border around the image
 animation: ${spin} 6s linear infinite; // Apply the animation
`;


const About = () => {
 return (
    <div>
<Container id="about" sx={{ paddingTop: '80px', paddingBottom: '80px' }}>

<Grid container spacing={3} alignItems="center">
<Grid item xs={12} md={6}>
<div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
<RotatingImage
             src={profileImage}
             alt="Your Name"
             style={{
               position: 'absolute',
               width: '100%',
               height: '100%',
               objectFit: 'cover',
               borderRadius: '50%',
               boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
               border: '4px solid #fff', // White border around the image
             }}

           />
</div>
</Grid>
<Grid item xs={12} md={6}>
    
<div
           style={{
             background: '#f7f7f7', // Background color for the text area
             padding: '20px',
             borderRadius: '10px',
             marginLeft: '-20px', // Adjust as needed for alignment
           }}
>
<Typography variant="h4" gutterBottom>
             Hey There!
</Typography>
<Typography variant="body1">
Welcome to my digital space! As a data scientist, I've curated this platform to showcase my projects and connect with fellow enthusiasts. Feel free to explore and delve into my work—I hope it inspires and fosters new connections in our shared journey through data
</Typography>
</div>
</Grid>
</Grid>
</Container>
</div>
 );
};
export default About;