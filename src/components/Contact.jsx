import React, { Component } from 'react';
import { Container, Grid, Typography, Box, Card, Paper, useTheme, useMediaQuery} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


import MrKatLogo from './MrKatLogo';
import MohawkBandPic from "../images/lifePics/mohawk/full-band-mohawk.jpeg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${MohawkBandPic})`,
    height: '1000px',
    margin: 'auto',
    padding: 16,
    display: 'flex',
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "#424242",
    borderRadius: 20,
    width: 400,
    padding: 8,
  },
  heroCard: {
    width: 400,
    boxShadow: 0,
    borderRadius: 20,
  },
  paper: {
    // height: 400,
    width: 400,
    borderRadius: 20,
    // backgroundColor: '#1f1f33',
    background:'linear-gradient(160deg,  #111 30%, #25212f 90%)',
  },
  transparent: {
    // height: 400,
    // width: 400,
    backgroundColor: '#0000'
  }
}));

const ContactCard = ({href, text, src}) => {
  return (
      <a href={href} target="_blank">
        {/* <div className="col d-flex flex-row justify-content-center " style={{maxHeight: "inherit"}}> */}
          <div className = "d-flex flex-column align-items-center justify-content-center"> 
            <img width="50px" height="50px" src={src} alt={text}/>
            <WhiteTextTypography className="p-2">{text}</WhiteTextTypography>
          </div>
        {/* </div> */}
      </a>
    
  );
}

const LargeBandBannerImage = ({}) => {
  return (
    <img style={{height: 'auto'}} src={require('../images/lifePics/mohawk/full-band-mohawk.jpeg')}/>
  );
}

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

const MrKatBioAndContact = ({bgColor, cardColor}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  return (
      <>
      <Grid container maxWidth={false} alignItems='flex-end' justifyContent="center" className={classes.mainContainer}>
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid 
              item
            >
              <Box mb={ !isSmall ? '500px' : 0 }>
                <Card className={classes.transparent} >
                  <Grid 
                    container item
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box mr={2}>
                      <MrKatLogo />
                    </Box>
                    
                    <WhiteTextTypography variant='h3'>
                      <b>
                        MR. KAT
                      </b>
                      
                    </WhiteTextTypography>
                    
                  </Grid>
                  
                </Card>
              </Box>
              
            </Grid>
            <Grid 
              item
              // direction="row"
              // justifyContent="center"
              // alignItems="center"
            >
              <Box p={3} className={classes.paper}>
                <WhiteTextTypography variant='h5' text='center'>We are looking to gig in the Austin, San Antonio, College Station, and Dallas area. Our band members are: Kat (vocals and guitar), Isaac (guitar), Johnny (drums), and Victor (bass). Here's some of our demos.</WhiteTextTypography>
                <WhiteTextTypography variant='h4'>Contact us</WhiteTextTypography>
                <WhiteTextTypography variant='h6' align='center' color="textSecondary">Shoot us a DM on the band instagram page or email us at <b>mrkat.mp3@gmail.com</b></WhiteTextTypography>
                <Grid 
                  cols={4}
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <ContactCard
                    text="Band Page"
                    href="https://www.instagram.com/mrkatband/"
                    src="https://img.icons8.com/color/100/000000/instagram-new--v1.png"
                  />
                  <ContactCard
                    text="Email"
                    href={"mailto:mrkat.mp3@gmail.com"}  
                    src="https://img.icons8.com/fluency/100/000000/apple-mail.png"
                  />
                </Grid> 
              </Box>
              
            </Grid>
            
            {/* <Grid 

            item>
              <Grid 
                direction="row"
                justifyContent="center"
                alignItems="center"
                container>
                <Grid 
                  item>
                  <Card>
                    <MrKatLogo/>
                    <Typography color='white' variant='h3'>
                      MR. KAT
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              // container
              direction="column"
              justifyContent="center"
              alignItems="center"
              alignContent='center'
              className={classes.heroCard}
              spacing={3}
            >
              <Grid 
              >
                <Paper className={classes.paper}></Paper>
              </Grid>
              <Grid
                item
                direction="column"
                container
                justifyContent="center"
                alignItems="center"
              >
                
                <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
                  We are looking to gig in the Austin, San Antonio, College Station, and Dallas area. Our band members are: Kat (vocals and guitar), Isaac (guitar), Johnny (drums), and Victor (bass). Here's some of our demos.
                </Typography>
              </Grid>
              
            </Grid>
              <Card className={classes.heroCard} >
            <Typography variant='h4'>Contact us</Typography>
            <Typography variant='h5' align='center' color="textSecondary">Shoot us a DM on the band instagram page or email us at <b>mrkat.mp3@gmail.com</b></Typography>
            <Grid 
              cols={4}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <ContactCard
                text="Band Page"
                href="https://www.instagram.com/mrkatband/"
                src="https://img.icons8.com/color/100/000000/instagram-new--v1.png"
              />
              <ContactCard
                text="Email"
                href={"mailto:mrkat.mp3@gmail.com"}  
                src="https://img.icons8.com/fluency/100/000000/apple-mail.png"
              />
            </Grid> 
          </Card> */}
            
          </Grid>
      </Grid>
        
        
          {/* <div className="w3-card w3-padding-16	 d-flex flex-row align-items-center justify-content-center contact-card-container" style={{backgroundColor: cardColor}}> */}
        
      </>
  );
}

  export default MrKatBioAndContact;