import React, { useEffect } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import Typography from '../common/Typography';
import { Formik } from 'formik';
import axios from 'axios';
import{ init } from 'emailjs-com';

import schema from "./schema";
import ScrollToError from './ScrollToError'

init("user_Per382gYay4hoP0ZJlGuQ");

function Contact() {

    useEffect(() => {
        document.title = "Contact";
    }, []);

    function handleSubmit(values) {
        const data = {
            service_id: 'service_2c0uwck',
            template_id: 'template_idkpyvq',
            user_id: 'user_Per382gYay4hoP0ZJlGuQ',
            template_params: {...values}
        }
        axios('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            data: data,
            contentType: 'application/json'
        })
    };

    return (
        <>
            <Typography variant="h1">CONTACT</Typography>
            <Typography variant="h2">Have a question?</Typography>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                }}
                validationSchema={schema}
                onSubmit={values => handleSubmit(values)}
            >
                {({dirty, handleChange, values, errors, handleSubmit }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <Grid container direction="column" spacing={3}>
                                <Grid item>
                                    <TextField 
                                        label="Name" 
                                        variant="outlined" 
                                        fullWidth 
                                        onChange={handleChange} 
                                        id="name"
                                        value={values.name}
                                        helperText={errors.name}
                                        error={Boolean(errors.name)}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        label="Email" 
                                        variant="outlined" 
                                        fullWidth 
                                        onChange={handleChange} 
                                        id="email"
                                        value={values.email}
                                        helperText={errors.email}
                                        error={Boolean(errors.email)}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        label="Subject" 
                                        variant="outlined" 
                                        fullWidth 
                                        onChange={handleChange} 
                                        id="subject"
                                        value={values.subject}
                                        helperText={errors.subject}
                                        error={Boolean(errors.subject)}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        label="Message" 
                                        variant="outlined" 
                                        fullWidth 
                                        onChange={handleChange} 
                                        id="message"
                                        value={values.message}
                                        helperText={errors.message}
                                        error={Boolean(errors.message)}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                                <ScrollToError />
                            </Grid>
                        </form>
                    ) 
                }}
            </Formik>
        </>
    )
}

export default Contact;