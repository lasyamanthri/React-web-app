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

<Typography variant="body1" sx={{ fontWeight: 'light', fontStyle: '', marginBottom: '20px' }} justifyContent="center" >
<j>I am a Data Scientist based in Boston. With a Master's Degree in DataScience, focused on AI/ML from Northeastern University, Boston, I bring 1.5 year of expertise in ML, Python, SQL and Supply Chain. My passion lies in developing state-of-the-art AI applications in Natural Language Processing (NLP). My expertise extends to solving complex software engineering challenges, collaborating seamlessly with diverse teams, and constructing efficient and scalable applications. With experience spanning fast-paced startups and prominent Big Tech corporations, I have gained a deep understanding of the industry's demands. </j>
<b>Let's connect on LinkedIn for further insights and collaborations </b>
</Typography>

<Link href={linkedInProfile} target="_blank" rel="noopener">
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
