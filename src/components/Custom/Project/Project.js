import React, { Fragment } from 'react'

// Icons
import PhotoshopIcon from '../Icons/PhotoshopIcon'
// import VeganEatsMobile from '../Icons/VeganEatsMobile'
import figma from '../../../images/figma.jpeg'
import satoshiMockup from '../../../images/satoshi-mockup.jpeg'

// MUI
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    leftPanel: {
        width: '50%'
    },
    rightPanel: {
        width: '50%'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    industry: {
        fontSize: 18,
        fontWeight: 600,
        color: '#72c89e',
        opacity: .6,
        marginTop: -5
    },
    summary: {
        fontSize: 14,
        color: '#111',
        fontFamily: 'Open Sans',
        fontWeight: 'regular',
        marginTop: 10
    },
    roles: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#72c89e',
        marginTop: 13
    },
    iconsContainer: {
        marginTop: 10,
        display: 'inline-flex'
    },
    icon: {
        marginRight: '20px'
    },
    iconReverse: {
        marginLeft: '20px'
    }
}))

const Project = props => {
    const classes = useStyles(props)
    const { project, index } = props
    const { title, industry, summary, roles, icons } = project

    return (
        <div>
            {index === 0 || index % 2 === 0 ?
                <div className={classes.root}>
                    <div className={classes.leftPanel}>
                        <Typography className={classes.title}>
                            {title}
                        </Typography>
                        <Typography className={classes.industry}>
                            {industry}
                        </Typography>
                        <Typography className={classes.summary}>
                            {summary}
                        </Typography>
                        <Typography className={classes.roles}>
                            {roles}
                        </Typography>

                        <div className={classes.iconsContainer}>
                            {icons.includes('figma') && <div className={classes.icon}><img src={figma} width="auto" height="30px" /></div>}
                            {icons.includes('photoshop') && <PhotoshopIcon className={classes.icon} />}
                        </div>
                    </div>
                    <div className={classes.rightPanel}>
                        <div style={{
                            justifyContent: 'flex-end',
                            transform: 'translateY(-120px)'
                        }}>
                            <div style={{ marginLeft: 'auto', width: '500px' }}><img src={satoshiMockup} height="auto" width="500px" /></div>
                        </div>
                    </div>
                </div> : <div className={classes.root}>
                    <div className={classes.leftPanel}>
                        <div style={{
                            justifyContent: 'flex-start',
                            transform: 'translateY(-120px)'
                        }}>
                            <img src={satoshiMockup} height="auto" width="500px" />
                        </div>
                    </div>
                    <div className={classes.rightPanel}>
                        <Typography className={classes.title} style={{ textAlign: 'right'}}>
                            {title}
                        </Typography>
                        <Typography className={classes.industry} style={{ textAlign: 'right'}}>
                            {industry}
                        </Typography>
                        <Typography className={classes.summary} style={{ textAlign: 'right'}}>
                            {summary}
                        </Typography>
                        <Typography className={classes.roles} style={{ textAlign: 'right'}}>
                            {roles}
                        </Typography>

                        <div className={classes.iconsContainer} style={{ float: 'right' }}>
                            {icons.includes('figma') && <div className={classes.icon}><img src={figma} width="auto" height="30px" /></div>}
                            {icons.includes('photoshop') && <PhotoshopIcon className={classes.iconReverse} />}
                        </div>
                    </div>
                </div>}



        </div>
    )
}

export default Project
