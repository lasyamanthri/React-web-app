import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import CreateIcon from '@mui/icons-material/Create';
import BuildIcon from '@mui/icons-material/Build';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const Skills = () => {
 const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 3000, // Slide every 10 seconds
   responsive: [
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 1,
       },
     },
   ],
 };
 const skillData = [
   { title: 'Data Science', description: 'Proficient in data analysis, modeling, and visualization.', icon: <QueryStatsIcon fontSize="large" /> },
   { title: 'Data Engineering', description: 'Experience in building data pipelines and databases.', icon: <DeveloperModeIcon fontSize="large" /> },
   { title: 'Machine Learning', description: 'Skilled in developing ML models for predictive analysis.', icon: <BuildIcon fontSize="large" /> },
   { title: 'Web Design', description: 'Familiar with frontend technologies and UI/UX principles.', icon: <CodeIcon fontSize="large" /> },
   { title: 'Poetry Writing', description: 'Passionate about creative writing and poetry.', icon: <CreateIcon fontSize="large" /> },
   // Add more skills as needed
 ];
 return (
<div id="skills" xs='auto'>
<Typography variant="h4" gutterBottom align='Center'>
       What I can offer
</Typography>
&nbsp;
<Slider {...settings}>
       {skillData.map((skill, index) => (
<div key={index}>
<Card sx={{ height: '50%' }}>
<CardContent>
<Grid container direction="column" justifyContent="space-between" alignItems="center" height="100%">
<Grid item>
<Avatar sx={{ width: '64px', height: '64px', backgroundColor: 'primary.main' }}>
                     {skill.icon}
</Avatar>
<Typography variant="h6" gutterBottom>
                     {skill.title}
</Typography>
<Typography variant="body2">
                     {skill.description}
</Typography>
</Grid>
</Grid>
</CardContent>
</Card>
</div>
       ))}
</Slider>
</div>
 );
};

export default Skills;