import React, { Component } from 'react';
import '../App.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import fire from '../Firebase';
const styles = {
    card: {
        maxWidth: '40%',
        //position: 'absolute',
        margin: '0 auto',
        padding: 20
      },
    main: {
        width: 'auto',
        display: 'block',
      },
      paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: 'none'
      },
      submit: {
      },
  };

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            pass: ""
        }
    }

    login = () => {
        console.log(this.state.email);
        console.log(this.state.pass);
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.pass).catch(function(error) {
            alert(error.message);
          });
      };

      inputHandler = (ev) => {
          this.setState({
              [ev.target.name]: ev.target.value
          })
      }

  render() {
    return (
        <div className="App">

    <Typography style={{marginTop: 15}} variant="h4" gutterBottom>
          Login
      </Typography>

      <hr style={{width: '30%', marginBottom: '2%'}}/>

        <Card style={styles.card}>
        <CssBaseline />
        <Paper style={styles.paper}>
          <Avatar style={styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Enter Credentials
          </Typography>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" value={this.state.email} onChange={this.inputHandler.bind(this)} autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="pass" type="password" id="pass" autoComplete="current-password" value={this.state.pass} onChange={this.inputHandler.bind(this)} />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={styles.submit}
              onClick={this.login}
            >
              Sign in
            </Button>
        </Paper>
        <Typography variant="display6" style={{float: "right", marginTop: 10}}>
                Don't have account? <Button onClick={()=>{this.props.history.push('/signup')}}>Signup</Button>
            </Typography>
        </Card>
        </div>
    );
  }
}

export default Login;
