import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
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
      <Link color="inherit" to="/">
        Sayma Man Power
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function SignIn() {
  const [fieldRequiredMsg, setFieldRequiredMsg] = React.useState(false); 
  const [incorrectCredentialsMsg, setIncorrectCredentialsMsg] = React.useState(false); 
  // const navigate = useNavigate();
  // const location = useLocation();
  // const { from } = location.state || { from: { pathname: '/' } };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    const phNumber = data.get('phNumber').trim();
    const password = data.get('password').trim();
  
    if (!phNumber || !password) {
      setFieldRequiredMsg(true);
      return;
    }
  
    try {
      const response = await axiosInstense.post('api/v1/users/login', {
        phNumber,
        password
      });
  
      if (response.status === 200) {
        const { token } = response.data;
  
        localStorage.setItem('authToken', token);
        localStorage.setItem('phonenoofuser', phNumber);
        setFieldRequiredMsg(false);
        console.log('User logged in successfully');
        setIncorrectCredentialsMsg(false);
        const prevPage = localStorage.getItem('prevPage');
        if (prevPage) {
          localStorage.removeItem('prevPage');
          window.location.href = prevPage;
        } else {
          window.location.href = '/';
        }
      } else if (response.status === 401) {
        setFieldRequiredMsg(false);
        setIncorrectCredentialsMsg(true);
        console.error('Invalid credentials');
      } else {
        console.error('User login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
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
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

          <div  style={{display:`${fieldRequiredMsg? "block" : "none" }`}}>
            <Error message="All Fields Required"/>
          </div>
          <div  style={{display:`${incorrectCredentialsMsg? "block" : "none" }`}}>
            <Error message="Incorrect Phone.No or Password"/>
          </div>
          
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phNumber"
            autoComplete="tel"
          />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <div className='w-full text-center my-3'>
                <ButtonEl  buttonType="submit" bgColor="#F05D22" hoverBgColor="#1c2b4d" buttonTxt="Log In" px={8}/>
            </div>
            <Grid container  justifyContent="flex-end">
              <Grid item>
                <Link to="/nepali-housekeeper" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}