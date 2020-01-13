import React, { Fragment } from 'react'
import { useMediaPredicate } from "react-media-hook";

// MUI
import { AppBar, Toolbar, Typography } from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: 300,
        width: '100vw',
        maxWidth: '1300px',
        margin: '0 auto',
        padding: '0 10%',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        marginBottom: 95
    },
    rootMobile: {
        display: 'flex',
        height: 300,
        width: '100vw',
        maxWidth: '1300px',
        margin: '0 auto',
        padding: '0 10%',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        marginBottom: 25
    },
    title: {
        color: 'black',
        fontFamily: 'Source Sans Pro',
        margin: 'auto 0'
    },
    name: {
        color: '#72c89e',
        fontSize: 35
    }
}))

const Header = props => {
    const classes = useStyles(props)
    const biggerThan800 = useMediaPredicate("(min-width: 800px)");

    return (
        <div>
            {/* Desktop Header */}
            {biggerThan800 && <AppBar
                position='static'
                color='primary'
                className={classes.root}
            >
                <Typography variant="h4" className={classes.title}>
                    <span className={classes.name}>Michelle Gorski</span> is a <br />
                    UI/UX Design &amp; Researcher.
                </Typography>
            </AppBar>}
            
            {/* Mobile Header */}
            {!biggerThan800 && <AppBar
                position='static'
                color='primary'
                className={classes.rootMobile}
            >
                <Typography variant="h5" className={classes.title}>
                    <span className={classes.name}>Michelle Gorski</span> is a <br />
                    UI/UX Design &amp; Researcher.
                </Typography>
            </AppBar>}
            
        </div>
    )
}

export default Header
