import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonEl from '../UI/Button/Button';
import Error from '../UI/ErrorMsg/Error';
import axios from 'axios';

const axiosInstense = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Sayma Man Power
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function SignUp() {
  const [fieldRequiredMsg , setFieldRequiredMsg] = React.useState(false);
  const [alreadyRegisteredMsg , setAlreadyRegisteredMsg] = React.useState(false);



const handleSubmit = async (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);

  const firstName = data.get('firstName').trim();
  const lastName = data.get('lastName').trim();
  const email = data.get('email').trim();
  const phNumber = data.get('phNumber').trim();
  const password = data.get('password').trim();

  if (!firstName || !lastName || !email || !phNumber || !password) {
    console.log('All fields are required');
    setFieldRequiredMsg(true);
    return;
  }

  try {
    const response = await axiosInstense.post('api/v1/users', {
      firstName,
      lastName,
      email,
      phNumber,
      password,
    });
  
    if (response.status === 201) {
      console.log('User registered successfully');
      setFieldRequiredMsg(false);
      window.location.href = '/maids-login';
    } else {
      if (response.status === 400) {
        setAlreadyRegisteredMsg(true);
      } else {
        console.error('User registration failed');
      }
    }
  } catch (error) {
    console.error('Error registering user:', error);
  }
  
};


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          
          <div  style={{display:`${fieldRequiredMsg? "block" : "none" }`}}>
            <Error message="All Fields Required"/>
          </div>
          <div  style={{display:`${alreadyRegisteredMsg? "block" : "none" }`}}>
            <Error message="User Already Registered"/>
          </div>
          
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phNumber"
                label="Phone Number"
                type='number'
                name="phNumber"
                autoComplete="tel"
              />
            </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  type="email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              
            </Grid>
            <div className='w-full text-center my-3'>
                <ButtonEl buttonType="submit" bgColor="#F05D22" hoverBgColor="#1c2b4d" buttonTxt="Sign Up" px={8}/>
            </div>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/maids-login" variant="body2">
                  Already have an account? <span style={{color:"#F05D22"}}>Log In</span>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 , mb: 5}} />
      </Container>
    </ThemeProvider>
  );
}