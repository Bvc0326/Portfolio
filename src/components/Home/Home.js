import React from "react";
import { Link } from '@material-ui/core'
import Section from "../common/Section";
import Typography from '../common/Typography';

function Home() {
    return (
        <>
            <Section>
                <Typography variant="h1">
                    Hello, my name is Vinay. I am a Front End Devloper living in Chicago, IL.
                </Typography>
            </Section>
            <Section>
                <Typography variant="h3">
                    About:
                </Typography>
                <p>
                    I am currenlty working as a Front End Developer at <Link href="https://cardinal-ip.com/" target="_blank">Cadrinal Intellectual Property</Link> using modern technologies like HTML5, CSS3, and JavaScript, ReactJS, Redux.
                    I collaborate well as an integral member of the development team. I have the ability to create interesting Web Pages while keeping them user-friendly. 
                    See my previous work history on <Link href="https://www.linkedin.com/in/vinay-b-80b791154" target="_blank">LinkedIn</Link>.
                </p>
            </Section>
        </>
    )
}

export default Home