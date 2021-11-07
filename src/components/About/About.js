import React, { useEffect } from "react";
import { Link, Grid } from "@material-ui/core";
import Typography from '../common/Typography';
import Section from "../common/Section";
import ContactMe from "../common/ContactMe";

import myImage from '../Images/vinay.jpg';

function About() {

    useEffect(() => {
        document.title = "About"
    }, []);

    return (
        <>
            <Section>                
                <Typography variant="h1">ABOUT</Typography>
            </Section>

            <Grid 
                container 
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <img src={myImage} alt="" />
                </Grid>
            </Grid>
            <Section>
                <Typography variant="h3">
                    I am a Front End Devloper located in Chicago, IL. Currenlty, working at company <Link href="https://cardinal-ip.com/" target="_blank">Cadrinal Intellectual Property</Link> and it has been more than two years.
                    I started my career in 2018 with <Link href="https://www.adobe.com/">Adobe</Link> and after working for one year, I moved to other company <Link href="https://www.staples.com/">Staples</Link>.
                </Typography>
                <Typography variant="h3">
                    I collaborate well as an integral member of the development team. I have the ability to create interesting Web Pages while keeping them user-friendly. 
                </Typography>
                <Typography variant="h3">
                    See my previous work history on <Link href="https://www.linkedin.com/in/vinay-b-80b791154" target="_blank">LinkedIn</Link>.
                </Typography>
            </Section>
            <ContactMe />
        </>
    )
}

export default About;