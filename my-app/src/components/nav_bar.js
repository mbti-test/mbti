import React from 'react'
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../images/Logo.png'

const useStyles = makeStyles({
    root: {
        background: 'rgba(0, 0, 0, 0)',
        color: 'red',
        height: '0px'
    },
    logo: {
        padding: 10
    }
  });

export default function NavBar() {
    const classes = useStyles();
    return (
        <Box className={classes.root} position="static">
            <Box className={classes.logo}>
                <img src={logo} alt="Logo" />
            </Box>
        </Box>
    );

}
