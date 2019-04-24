import React, { Component } from 'react';
import '../App.css';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import RemoveCircle from '@material-ui/icons/RemoveCircle';
import CircularProgress from '@material-ui/core/CircularProgress';

import fire from '../Firebase';
const database = fire.database().ref('/');

const styles = {
    card: {
      maxWidth: '40%',
      //position: 'absolute',
      margin: '0 auto',
      marginBottom: '2%'
    },
    media: {
      height: 140,
    },
  };

class MyEvents extends Component {


  constructor(props){

    super(props);

    this.state = {
        expanded: false,

        allevents: [],
        loader: true,
    }
}

componentDidMount(){

    let that = this;
    let allevents = [];


    database.child("myevents").child(fire.auth().currentUser.uid).on("value", function(snapshot){

        snapshot.forEach(function(childSnapshot) {
            var obj = childSnapshot.val();
            obj.id = childSnapshot.key;

            allevents.push(obj);

          });
          that.setState({
            allevents: allevents,
          },()=>{
            console.log("All Events",allevents)
             that.setState({loader: false})
          });
        })

}

notGoing = (eventId, Userid) => {
  // let that = this;
  // let newArray = [];
  database.child('myevents').child(Userid).child(eventId).remove()
  .then(()=>{  
    alert("You unfollowed the event now");
  });

}


  render() {
    return (
        <div className="App">

        <Typography style={{marginTop: 15}} variant="h4" gutterBottom>
            My Events
        </Typography>

        <hr style={{width: '30%', marginBottom: '2%'}}/>

        {
                (this.state.loader === true) ?
                (<CircularProgress />) :
                (this.state.allevents.map((event, ind)=>{
                    return <Card style={styles.card}>
                    <CardActionArea>
                        <CardMedia
                        style={styles.media}
                        image={require("../images/event.jpg")}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {event.title}
                        </Typography>
                        <Typography component="p" style={{marginBottom: 15}}>
                            {event.desc}
                        </Typography>
                        <Typography variant="button" align="center" style={{marginTop: 5}}>
                            <span style={{fontWeight: 'bold'}}>Organizer:</span> {event.organizer}
                        </Typography>
                        <Typography variant="button" align="center" style={{marginTop: 5}}>
                        <span style={{fontWeight: 'bold'}}>Venue:</span> {event.venue}
                        </Typography>
                        <Typography variant="button" align="center" style={{marginTop: 5}}>
                        <span style={{fontWeight: 'bold'}}>Date:</span> {event.date}
                        </Typography>
                        </CardContent>
                    </CardActionArea>

                            <CardActions disableActionSpacing>
                                <Button size="small" color="secondary" onClick={this.notGoing.bind(this, event.id, fire.auth().currentUser.uid)}>
                                <RemoveCircle color="secondary" />
                                   Not Going
                                </Button>
                            </CardActions>
                </Card>
                }))
            }
    </div>
    );
  }
}

export default MyEvents;
