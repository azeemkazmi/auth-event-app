import React, { Component } from 'react';

import '../App.css';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TrendingFlat from '@material-ui/icons/TrendingFlat';
import Avatar from '@material-ui/core/Avatar';

import Create from '@material-ui/icons/Create'
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn'
import CalendarToday from '@material-ui/icons/CalendarToday'


const styles = {
    media: {
      height: 140,
    },
    root: {
        flexGrow: 1,
      },
      card: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
  };

class Dashboard extends Component {
  render() {
    return (
        <div className="App">

        <Typography style={{marginTop: 15}} variant="h4" gutterBottom>
            Dashboard
        </Typography>

        <hr style={{width: '30%', marginBottom: '2%'}}/>

        <Grid container style={styles.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={Number(16)}>

              <Grid item>
                    <Card style={styles.card}>
                        
                        <CardContent>
                            <Avatar style={{position: 'absolute'}}>
                                <Create />
                            </Avatar>
                            <Typography variant="h5" component="h2">
                                Create Event
                            </Typography>
                            <Typography style={styles.pos} color="textSecondary">
                           
                            </Typography>
                            <Typography component="p">
                            Create an event
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="outlined" onClick={()=>{this.props.history.push("/create")}}>
                                Proceed
                                {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                                <TrendingFlat >send</TrendingFlat >
                            </Button>
                        </CardActions>
                        </Card>
              </Grid>

              <Grid item>
                    <Card style={styles.card}>
                        
                        <CardContent>
                            <Avatar style={{position: 'absolute'}}>
                                <CalendarToday />
                            </Avatar>
                            <Typography variant="h5" component="h2">
                                All Events
                            </Typography>
                            <Typography style={styles.pos} color="textSecondary">
                            
                            </Typography>
                            <Typography component="p">
                             View all events
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="outlined" onClick={()=>{this.props.history.push("/allevents")}}>
                                Proceed
                                {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                                <TrendingFlat >send</TrendingFlat >
                            </Button>
                        </CardActions>
                        </Card>
              </Grid>

              <Grid item>
                    <Card style={styles.card}>
                        
                        <CardContent>
                            <Avatar style={{position: 'absolute'}}>
                                <AssignmentTurnedIn />
                            </Avatar>
                            <Typography variant="h5" component="h2">
                                My Events
                            </Typography>
                            <Typography style={styles.pos} color="textSecondary">
                            
                            </Typography>
                            <Typography component="p">
                                View events you joined
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="outlined" onClick={()=>{this.props.history.push("/myevents")}}>
                                Proceed
                                {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                                <TrendingFlat >send</TrendingFlat >
                            </Button>
                        </CardActions>
                        </Card>
              </Grid>

          </Grid>
        </Grid>
        </Grid>

        

    </div>
    );
  }
}

export default Dashboard;
