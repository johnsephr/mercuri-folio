import React, { Fragment } from 'react'

// MUI
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        display: 'flex',
        margin: '50px 0'
    },
    leftPanel: {
        width: '50%',
        color: '#72c89e',
        background: 'transparent'
    },
    rightPanel: {
        width: '50%',
        color: '#72c89e',
        textAlign: 'right',
        order: 1,
        background: 'transparent'
    }
}))

const Footer = props => {
    const classes = useStyles(props)
    return (
        <div className={classes.root}>
            <Typography variant='h6' className={classes.leftPanel}>
                hello@mercuri.tech
            </Typography>
            <Typography variant='h6' className={classes.rightPanel}>
                Austin, TX
            </Typography>
        </div>
    )
}

export default Footer
