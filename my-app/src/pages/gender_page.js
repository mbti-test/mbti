import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GenderContext } from "../App";
import female_pic from "../images/gender/female_pic.jpg";
import male_pic from "../images/gender/male_pic.jpg";
import NavBar from "../components/nav_bar";
import { makeStyles } from "@material-ui/core/styles";
import {  Button , Box, Grid  } from '@material-ui/core';
import { Mobile, Tablet, PC, PCwide } from '../components/MediaQuery' 

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: 'black'
  },

  container: {
    height: "100vh",
    display: "grid",
    gridTemplateRows: "repeat(3, 1fr)",
    gridTemplateColumns: "1fr 2fr 1fr",
    gridGap: theme.spacing(2),
  },

  emptyRowGrid: {
    gridRow: "span 2",
  },
  emptyColumnGrid: {
    gridColumn: "span 2",
  },

  title: {
    paddingBottom: '1vh',
    fontSize: '28px',
    color: 'white',
  },

  imgTitle: {
    fontSize: 20,
    color: 'white',
  },

  gender_img: {
    borderRadius:'10px',
    '&:hover': {
      backgroundColor: "white",
      borderRadius:'10px'

    },
    padding: '4px 4px',
    marginBottom: '10px' 
  },

  image: { 
    borderRadius:'10px',
  },

//mobile
 mobileContainer: {
    height: "100vh",
    display: "grid",
    gridTemplateRows: "repeat(3, 1fr)",
    gridGap: theme.spacing(1),
 },

 mobileGrid:{
  gridRow: '2/span 1'
 },

 mobiletitle: {
  paddingBottom: '1vh',
  fontSize: '20px',
  color: 'white',
},

mobileImageTitle: {
  fontSize: 17,
  color:'white'
}

}));

function GenderPageSelect() {
  const classes = useStyles();
  const { selectedGender, setSelectedGender } = useContext(GenderContext);

  const handleGenderChange = (event) => {
    setSelectedGender(event.currentTarget.value);
    console.log(selectedGender);
  };

  return (
    <Box>
      <PC>
      <Box>
        <Box className={classes.title} align="center" gutterBottom>
          테스트를 진행할 프로필을 선택하세요.
        </Box>
        <Box display="flex" justifyContent="center" mt={3}>
          <Box mr={5}>
            <Link to="/test">
              <Button className={classes.gender_img} value="male" onClick={handleGenderChange}>
                <img src={male_pic} alt="male_pic" className={classes.image} />
              </Button>
            </Link>
            <Box className={classes.imgTitle} variant="h6" align="center" gutterBottom>
              남성
            </Box>
          </Box>
          <Box>
            <Link to="/test">
            <Button className={classes.gender_img} value="female" onClick={handleGenderChange}>
                <img src={female_pic} alt="female_pic" className={classes.image}/>
              </Button>
            </Link>
            <Box className={classes.imgTitle} variant="h6" align="center" gutterBottom>
              여성
            </Box>
          </Box>
        </Box>
      </Box>
      </PC>


      <Mobile>
      <Box className={classes.mobiletitle} align="center" gutterBottom>
          테스트를 진행할 프로필을 선택하세요.
        </Box>
        <Box display="flex" justifyContent="center" mt={3}>
          <Box mr={5}>
            <Link to="/test">
              <Button className={classes.gender_img} value="male" onClick={handleGenderChange}>
                <img src={male_pic} alt="male_pic" className={classes.image} />
              </Button>
            </Link>
            <Box className={classes.mobileImageTitle} variant="h6" align="center" gutterBottom>
              남성
            </Box>
          </Box>
          <Box>
            <Link to="/test">
            <Button className={classes.mobileImageTitle} value="female" onClick={handleGenderChange}>
                <img src={female_pic} alt="female_pic" className={classes.image}/>
              </Button>
            </Link>
            <Box className={classes.mobileImageTitle} variant="h6" align="center" gutterBottom>
              여성
            </Box>
          </Box>
        </Box>
      </Mobile>

      <Tablet>
        <Box>
        <Box className={classes.title} align="center" gutterBottom>
          테스트를 진행할 프로필을 선택하세요.
        </Box>
        <Box display="flex" justifyContent="center" mt={3}>
          <Box mr={5}>
            <Link to="/test">
              <Button className={classes.gender_img} value="male" onClick={handleGenderChange}>
                <img src={male_pic} alt="male_pic" className={classes.image} />
              </Button>
            </Link>
            <Box className={classes.imgTitle} variant="h6" align="center" gutterBottom>
              남성
            </Box>
          </Box>
          <Box>
            <Link to="/test">
            <Button className={classes.gender_img} value="female" onClick={handleGenderChange}>
                <img src={female_pic} alt="female_pic" className={classes.image}/>
              </Button>
            </Link>
            <Box className={classes.imgTitle} variant="h6" align="center" gutterBottom>
              여성
            </Box>
          </Box>
        </Box>
      </Box>
      </Tablet>
      <PCwide>
        <Box>
        <Box className={classes.title} align="center" gutterBottom>
          테스트를 진행할 프로필을 선택하세요.
        </Box>
        <Box display="flex" justifyContent="center" mt={3}>
          <Box mr={5}>
            <Link to="/test">
              <Button className={classes.gender_img} value="male" onClick={handleGenderChange}>
                <img src={male_pic} alt="male_pic" className={classes.image} />
              </Button>
            </Link>
            <Box className={classes.imgTitle} variant="h6" align="center" gutterBottom>
              남성
            </Box>
          </Box>
          <Box>
            <Link to="/test">
            <Button className={classes.gender_img} value="female" onClick={handleGenderChange}>
                <img src={female_pic} alt="female_pic" className={classes.image}/>
              </Button>
            </Link>
            <Box className={classes.imgTitle} variant="h6" align="center" gutterBottom>
              여성
            </Box>
          </Box>
        </Box>
      </Box>
      </PCwide>
    </Box>
  );
}

export function GenderPage() {
  const classes = useStyles();
  return (
  <Box className={classes.root}>
    <PC>
      <Grid className={classes.container} spacing={3}>
        <NavBar />
        <Grid className={classes.emptyColumnGrid} item></Grid>
        <Grid className={classes.emptyRowGrid} item></Grid>
        <Grid item>
          <GenderPageSelect />
        </Grid>
      </Grid>
    </PC>

    <Mobile>
      <Grid className={classes.mobileContainer}>
          <NavBar pageType="mobile"/>
          <Grid className={classes.mobileGrid} item>
            <GenderPageSelect />
          </Grid>
        </Grid>
    </Mobile>

    <Tablet>
      <Grid className={classes.container} spacing={3}>
          <NavBar />
          <Grid className={classes.emptyColumnGrid} item></Grid>
          <Grid className={classes.emptyRowGrid} item></Grid>
          <Grid item>
            <GenderPageSelect />
          </Grid>
      </Grid>
    </Tablet>

    <PCwide>
      <Grid className={classes.container} spacing={3}>
          <NavBar />
          <Grid className={classes.emptyColumnGrid} item></Grid>
          <Grid className={classes.emptyRowGrid} item></Grid>
          <Grid item>
            <GenderPageSelect />
          </Grid>
      </Grid>
    </PCwide>
  </Box>
  );
}
