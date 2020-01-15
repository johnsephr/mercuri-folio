import React, { Fragment } from 'react'

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
    }
}))

const Footer = props => {
    const classes = useStyles(props)

    const openMail = () => {
        window.location.href = 'mailto:hello@mercuri.tech'
    }

    return (
        <div className={classes.root}>
            <Grid
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
            </Grid>

        </div>
    )
}

export default Footer
