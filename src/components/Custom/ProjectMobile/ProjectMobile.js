import React, { useEffect } from 'react'
import { useMediaPredicate } from "react-media-hook";

// Icons
import PhotoshopIcon from '../Icons/PhotoshopIcon'
// import VeganEatsMobile from '../Icons/VeganEatsMobile'
import figma from '../../../images/figma.svg'
import satoshiMockup from '../../../images/satoshi-mockup.jpeg'
import veganEats from '../../../images/vegan-eats.jpeg'

// MUI
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {},
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '50px'
    },
    image: {
        display: 'inline-block',
        margin: '0 auto', 
        background: 'transparent',
    },
    info: {
        marginBottom: '100px'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        background: 'transparent'
    },
    industry: {
        fontSize: 18,
        fontWeight: 600,
        color: '#72c89e',
        opacity: .6,
        marginTop: -5,
        textAlign: 'center',
        background: 'transparent'
    },
    summary: {
        fontSize: 14,
        color: '#111',
        fontFamily: 'Open Sans',
        fontWeight: 'regular',
        marginTop: 10,
        textAlign: 'center',
        background: 'transparent'
    },
    roles: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#72c89e',
        marginTop: 13,
        textAlign: 'center',
        background: 'transparent'
    },
    iconsContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10,
        background: 'transparent'
    },
    icon: {
        margin: '0 15px'
    }
}))

const ProjectMobile = props => {
    const classes = useStyles(props)
    const { project } = props
    const { title, industry, summary, roles, icons, image } = project
    const biggerThan485 = useMediaPredicate("(min-width: 485px)");

    useEffect(() => {
        console.log(veganEats)
    })

    return (
        <div className={classes.root}>
            {/* In Between Desktop & Mobile */}
            {biggerThan485 && <div className={classes.imageContainer}>
                    {image === 'satoshi' && <div className={classes.image}><img src={satoshiMockup} height="500px" width="auto" /></div>}
                    {image === 'vegans-eat' && <div className={classes.image}><img src={veganEats} height="500px" width="auto" /></div>}
            </div>}
            {/* Mobile */}
            {!biggerThan485 && <div className={classes.imageContainer}>
                    {image === 'satoshi' && <div className={classes.image}><img src={satoshiMockup} height="350px" width="auto" /></div>}
                    {image === 'vegans-eat' && <div className={classes.image}><img src={veganEats} height="350px" width="auto" /></div>}
            </div>}
           
            <div className={classes.info}>
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
                    {icons.includes('figma') && <div className={classes.icon}><img src={figma} width="auto" height="25px" /></div>}
                    {icons.includes('photoshop') && <PhotoshopIcon />}
                </div>
            </div>
        </div>
    )
}

export default ProjectMobile
