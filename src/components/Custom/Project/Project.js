import React, { Fragment } from 'react'

// Icons
import PhotoshopIcon from '../Icons/PhotoshopIcon'
// import VeganEatsMobile from '../Icons/VeganEatsMobile'
import figma from '../../../images/figma.svg'
import satoshiMockup from '../../../images/satoshi-mockup.jpeg'
import veganEats from '../../../images/vegan-eats.jpeg'
import press from '../../../images/press.jpeg'

// MUI
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '50px 0'
    },
    leftPanel: {
        width: '50%',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'flex-start'
    },
    rightPanel: {
        width: '50%',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'flex-end'
    },
    infoContainer: {
        display: 'inline-block',
        margin: 'auto 0'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        background: 'transparent'
    },
    industry: {
        fontSize: 18,
        fontWeight: 600,
        color: '#72c89e',
        opacity: .6,
        background: 'transparent',
        marginTop: -5
    },
    summary: {
        fontSize: 14,
        color: '#111',
        fontFamily: 'Open Sans',
        fontWeight: 'regular',
        background: 'transparent',
        marginTop: 10
    },
    roles: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#72c89e',
        background: 'transparent',
        marginTop: 13
    },
    iconsContainer: {
        marginTop: 16,
        display: 'inline-flex',
        background: 'transparent'
    },
    icon: {
        marginRight: '30px'
    },
    iconReverse: {
        marginLeft: '30px'
    }
}))

const Project = props => {
    const classes = useStyles(props)
    const { project, index } = props
    const { title, industry, summary, roles, icons, image } = project

    return (
        <div>
            {index === 0 || index % 2 === 0 ?
                <div className={classes.root}>
                    <div className={classes.leftPanel}>
                        <div style={{
                            // transform: 'translateY(-120px)',
                            display: 'inline-block',
                            float: 'left'
                        }}>
                            {image === 'satoshi' && <div style={{ marginRight: 'auto', width: '500px', height: 'auto', background: 'transparent' }}><img src={satoshiMockup} height="auto" width="500px" /></div>}
                            {image === 'vegans-eat' && <div style={{ marginRight: 'auto', background: 'transparent', width: 'auto', height: '400px' }}><img src={veganEats} height="auto" width="200px" /></div>}
                            {image === 'press' && <div style={{ marginRight: 'auto', background: 'transparent', width: 'auto', height: '400px', display: 'inline-block' }}><img src={press} height="auto" width="200px" /></div>}
                        </div>
                    </div>
                    <div className={classes.rightPanel}>
                        <div className={classes.infoContainer}>
                            <Typography className={classes.title} style={{ textAlign: 'right' }}>
                                {title}
                            </Typography>
                            <Typography className={classes.industry} style={{ textAlign: 'right' }}>
                                {industry}
                            </Typography>
                            <Typography className={classes.summary} style={{ textAlign: 'right', maxWidth: '250px', marginLeft: 'auto' }}>
                                {summary}
                            </Typography>
                            <Typography className={classes.roles} style={{ textAlign: 'right' }}>
                                {roles}
                            </Typography>

                            <div className={classes.iconsContainer} style={{ float: 'right' }}>
                                {icons.includes('figma') && <div className={classes.icon}><img src={figma} width="auto" height="25px" /></div>}
                                {icons.includes('photoshop') && <PhotoshopIcon className={classes.iconReverse} />}
                            </div>
                        </div>
                    </div>
                </div> : <div className={classes.root}>
                    <div className={classes.leftPanel}>
                        <div className={classes.infoContainer}>
                            <Typography className={classes.title}>
                                {title}
                            </Typography>
                            <Typography className={classes.industry}>
                                {industry}
                            </Typography>
                            <Typography className={classes.summary} style={{ maxWidth: '250px' }}>
                                {summary}
                            </Typography>
                            <Typography className={classes.roles}>
                                {roles}
                            </Typography>

                            <div className={classes.iconsContainer}>
                                {icons.includes('figma') && <div className={classes.icon}><img src={figma} width="auto" height="25px" /></div>}
                                {icons.includes('photoshop') && <PhotoshopIcon className={classes.icon} />}
                            </div>
                        </div>
                    </div>
                    <div className={classes.rightPanel}>
                        <div style={{
                            // transform: 'translateY(-120px)',
                            display: 'inline-block',
                            float: 'right'
                        }}>
                            {image === 'satoshi' && <div style={{ marginLeft: 'auto', width: '300px', height: 'auto', background: 'transparent' }}><img src={satoshiMockup} height="auto" width="300px" /></div>}
                            {image === 'vegans-eat' && <div style={{ marginLeft: 'auto', background: 'transparent', width: 'auto', height: '400px' }}><img src={veganEats} height="auto" width="200px" /></div>}
                            {image === 'press' && <div style={{ marginLeft: 'auto', background: 'transparent', width: 'auto', height: '400px', display: 'inline-block' }}><img src={press} height="auto" width="200px" /></div>}
                        </div>
                    </div>
                </div>}



        </div>
    )
}

export default Project
