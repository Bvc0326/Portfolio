import React from "react";
import { Grid } from '@material-ui/core';
import Section from "../common/Section";
import Typography from '../common/Typography';
import ContactMe from "../common/ContactMe";
import Testimonals from '../Testimonals/Testimonals';

function Home() {

    return (
        <>
            <Section>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h1">
                            Hello, 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h1">
                            I'm Vinay Bandi.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h1">
                            Front End Devloper
                        </Typography>
                    </Grid>
                </Grid>
          
            </Section>
            <ContactMe />
            <Testimonals />
        </>
    )
}

export default Home;