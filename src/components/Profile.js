import React from 'react';
import { Container, Typography, Grid, LinearProgress, Link, Rating, Button, IconButton, Chip} from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';

const Profile = () => {
 // Skills data - replace with your own skills and ratings
 const skills = [
   { name: 'Python', rating: 4.5 },
   { name: 'SQL', rating: 4.5 },
   { name: 'Machine Learning', rating: 4.5 },
   { name: 'Power BI', rating: 4 },
   { name: 'Natural language processing', rating: 3.5 },
   { name: 'HTML/JS/CSS/Django/React', rating: 3 }
   // Add more skills as needed
 ];


const linkedInProfile = "https://www.linkedin.com/in/faizmkhwaja/"; // Replace with your LinkedIn profile URL
const location = 'Boston, USA'; // Replace with your location

 return (

<Container sx={{ paddingTop: '80px', paddingBottom: '80px' }} id='profile'>
<Grid container spacing={3}>
<Grid item xs={12} md={6}>
<Typography variant="h4" gutterBottom>
           Skills 
</Typography>
         {skills.map((skill) => (
<div key={skill.name}>
<Typography variant="subtitle1">{skill.name}</Typography>
<Rating value={skill.rating} readOnly />
<LinearProgress
               variant="determinate"
               value={(skill.rating / 5) * 100}
               sx={{ marginBottom: '10px' }}
             />
</div>
         ))}
</Grid>
<Grid item xs={12} md={6}>
<Typography variant="h4" gutterBottom>
           Faiz Khwaja
</Typography>
<Grid container spacing={1} sx={{ marginTop: '20px' }}>
<Grid item>
<WorkIcon fontSize="small" />
</Grid>
<Grid item>
<Typography variant="body2" sx={{ fontSize: 'small' }}>
           Data scientist @ Staples,Inc.
</Typography>
</Grid>
</Grid>
<Grid container spacing={1} sx={{ marginTop: '10px' }}>
<Grid item>
<LocationOnIcon fontSize="small" />
</Grid>
<Grid item>
<Typography variant="body2" sx={{ fontSize: 'small' }}>
           {location}
</Typography>
</Grid>
</Grid>

<Typography variant="body1" align="justify" sx={{ marginBottom: '20px', lineHeight: '1.6' }} fontStyle='normal'>
<j>Hello, I'm Faiz Khwaja, a dedicated Data Scientist with a Master's in Data Science from Northeastern University, Boston. Proficient in Python and SQL, my passion revolves around Machine Learning and Artificial Intelligence. Leveraging my background in Mechanical Engineering, I've also cultivated expertise in Supply Chain dynamics.

Feel free to explore my projects, and should any pique your interest, I welcome you to reach out. I'm eager to connect with like-minded individuals and foster meaningful collaborations within our shared passion for data-driven innovation.</j>
&nbsp;
<b>Let's connect on LinkedIn for further insights and collaborations </b>
</Typography>

<Link href={linkedInProfile} target="_blank" rel="noreferrer">
<IconButton>
<LinkedInIcon />
</IconButton> {"My Linkedin"}
</Link>

</Grid>
</Grid>
</Container>
 );
};
export default Profile;
