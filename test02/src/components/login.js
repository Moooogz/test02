import { Avatar, Grid, Paper } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <Grid>
      <Paper
        elevation={10}
        square={false}
        rounded={100}
        style={
            { padding: 40,
             height: "50vh",
             width: 350,
             margin: "60px auto"
           }
            }
      >
        <Grid align='center'>
          <Avatar style={
            {backgroundColor: '#126b83'}}>SSU</Avatar>
          <h1>Sign In</h1>
          <Grid margin={"20px auto"}>
          <TextField id="filled-basic" label="Enter username" variant="filled" fullWidth margin ="10px"/>
          </Grid>
          <Grid align='center'>
          <TextField id="filled-basic" label="Enter password" variant="filled" fullWidth  type="password"/>
          </Grid>
          <Grid margin={"20px auto"}>
          <Button variant="contained" fullWidth>LOG IN</Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
