import React from "react";
import { Link } from "@material-ui/core";
import Typography from '../common/Typography';
import Section from "../common/Section";
import ContactMe from "../common/ContactMe";

function About() {

    return (
        <>
            <Section>                
                <Typography variant="h1">ABOUT</Typography>
            </Section>
            <Section>
                <Typography variant="h4">
                    I am a Front End Devloper located in Chicago, IL. Currenlty, working at company <Link href="https://cardinal-ip.com/" target="_blank">Cadrinal Intellectual Property</Link> and it has been more than two years.
                    I started my career in 2018 with <Link href="https://www.adobe.com/">Adobe</Link> and after working for one year, I moved to other company <Link href="https://www.staples.com/">Staples</Link>.
                </Typography>
                <Typography variant="h4">
                    I collaborate well as an integral member of the development team. I have the ability to create interesting Web Pages while keeping them user-friendly. 
                </Typography>
                <Typography variant="h4">
                    See my previous work history on <Link href="https://www.linkedin.com/in/vinay-b-80b791154" target="_blank">LinkedIn</Link>.
                </Typography>
            </Section>
            <ContactMe />
        </>
    )
}

export default About;