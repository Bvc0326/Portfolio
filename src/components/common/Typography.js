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
            fontSize: '2em',
            marginBottom: '1em'
        },
        h2: {
            fontSize: 18,
            marginBottom: '1em'
        },
        h3: {
            fontSize: '1.65em',
            marginBottom: '1em'
        },
        h4: {
            fontSize: '17px',
            marginBottom: '1.5em',
            fontWeight: 400,
            lineHeight: 1.8
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
