import React from 'react'
import { useMediaPredicate } from "react-media-hook"

// Components
import BehanceIcon from '../../Custom/Icons/BehanceIcon'

// MUI
import { Link, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        display: 'flex',
        margin: '50px 0'
    },
    leftPanel: {
        display: 'flex',
        alignItems: 'center',
        background: 'transparent'
    },
    leftPanelText: {
        color: '#72c89e',
        fontSize: '20px',
        cursor: 'pointer'
    },
    leftPanelTextMobile: {
        width: '100%',
        color: '#72c89e',
        fontSize: '20px',
        cursor: 'pointer',
        textAlign: 'center'
    },
    centerPanel: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent'
    },
    rightPanel: {
        display: 'flex',
        alignItems: 'center',
        background: 'transparent'
    },
    rightPanelText: {
        width: '100%',
        color: '#72c89e',
        textAlign: 'right',
        fontSize: '20px'
    },
    rightPanelTextMobile: {
        width: '100%',
        color: '#72c89e',
        textAlign: 'center',
        fontSize: '20px'
    }
}))

const Footer = props => {
    const classes = useStyles(props)
    const biggerThan800 = useMediaPredicate("(min-width: 800px)")

    const openMail = () => {
        window.location.href = 'mailto:hello@mercuri.tech'
    }

    return (
        <div className={classes.root}>
            {biggerThan800 ? <Grid
                container
                direction='row'
                alignContent='center'
                spacing={1}
                className={classes.grid}
            >
                <Grid item xs={4} className={classes.leftPanel}>
                    <div className={classes.leftPanelText} onClick={openMail} >
                        {/* <button target='_blank' rel='noopener'> */}
                            hello@mercuri.tech
                        {/* </button> */}
                    </div>
                </Grid>

                <Grid item xs={4} className={classes.centerPanel}>
                    <Link href='https://www.behance.net/mchllgorski' target='_blank' rel='noopener'>
                        <BehanceIcon />
                    </Link>
                </Grid>

                <Grid item xs={4} className={classes.rightPanel}>
                    <div className={classes.rightPanelText}>
                        Austin, TX
                    </div>
                </Grid>
            </Grid> : <Grid
                container
                direction='row'
                alignContent='center'
                spacing={1}
                className={classes.grid}
            >
                <Grid item xs={12} className={classes.leftPanel}>
                    <div className={classes.leftPanelTextMobile} onClick={openMail} >
                        {/* <button target='_blank' rel='noopener'> */}
                            hello@mercuri.tech
                        {/* </button> */}
                    </div>
                </Grid>
                <Grid item xs={12} className={classes.rightPanel}>
                    <div className={classes.rightPanelTextMobile}>
                        Austin, TX
                    </div>
                </Grid>
                <Grid item xs={12} className={classes.centerPanel}>
                    <Link href='https://www.behance.net/mchllgorski' target='_blank' rel='noopener'>
                        <BehanceIcon />
                    </Link>
                </Grid>
            </Grid>}
        </div>
    )
}

export default Footer
