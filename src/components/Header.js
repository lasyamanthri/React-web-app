


import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
const Header = () => {
 return (
<AppBar position="fixed" style={{ background: '#2E3B55' }}>
<Toolbar>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Faiz Khwaja
</Typography>
<Button color="inherit">
<ScrollLink to="about" smooth={true} duration={500}>
           Home
</ScrollLink>
</Button>
<Button color="inherit">
<ScrollLink to="profile" smooth={true} duration={500}>
           About me 
</ScrollLink>
</Button>
<Button color="inherit">
<ScrollLink to="skills" smooth={true} duration={500}>
           Skills
</ScrollLink>
</Button>
<Button color="inherit">
<ScrollLink to="projects" smooth={true} duration={500}>
           Projects
</ScrollLink>
</Button>

<Button color="inherit">
<ScrollLink to="resume" smooth={true} duration={500}>
           Resume 
</ScrollLink>
</Button>
<Button color="inherit">
<ScrollLink to="contact" smooth={true} duration={500}>
           Contact me 
</ScrollLink>
</Button>
</Toolbar>
</AppBar>
 );
};
export default Header;
