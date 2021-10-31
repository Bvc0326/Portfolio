import React from 'react';
import { Typography as MuiTypography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';

function Typography(props) {

    const { variant, children } = props;

    const styles = () => createStyles({
        root: {
            fontFamily: ['Overpass', 'sans-serif'].join(','),
        },
        h1: {
            fontSize: '3em',
            marginBottom: '1em'
        },
        h2: {
            fontSize: 18,
        },
        h3: {
            fontSize: '1.65em',
            marginBottom: '2em'
        },
        h4: {
            fontSize: '1.25em',
            marginBottom: '1.5em'
        },
    })

    const createdStyles = makeStyles(styles);
    const typographyStyles = createdStyles(); 

    return (
        <MuiTypography 
            variant={variant}
            classes={typographyStyles}
        >
            {children}
        </MuiTypography>
    )
}

export default Typography
