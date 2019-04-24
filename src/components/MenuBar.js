import React, { Component } from 'react';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';
import NoteAdd from '@material-ui/icons/NoteAdd';
import CalendarToday from '@material-ui/icons/CalendarToday';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import Dashboard from '@material-ui/icons/Dashboard'

import { withRouter } from "react-router-dom";
import fire from '../Firebase';




const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    align: "right"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  loginButton: {
    alignItems: 'flex-end'
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class MenuBar extends Component {

      state = {
        top: false
      };

      toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };

      signOut = () => {
        fire.auth().signOut()
        .then(()=>{
          this.props.history.push("/");
        });
      }
    
  render() {

    const sideList = (
        <div className={styles.list}>
          <List>
            {/* {['Create Event', 'All Events', 'My Events'].map((text, index) => (
              <ListItem button key={text} onClick={()=>{this.props.history.push('/create')}}>
                <ListItemIcon>{index === 0 ? <NoteAdd /> : index === 1 ? <CalendarToday /> : <AssignmentTurnedIn />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))} */}
            <ListItem button key={"Dashboard"} onClick={()=>{this.props.history.push('/')}}>
                <ListItemIcon> <Dashboard /> </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItem>
              <ListItem button key={"Create Event"} onClick={()=>{this.props.history.push('/create')}}>
                <ListItemIcon> <NoteAdd /> </ListItemIcon>
                <ListItemText primary={"Create Event"} />
              </ListItem>
              <ListItem button key={"All Events"} onClick={()=>{this.props.history.push('/allevents')}}>
                <ListItemIcon> <CalendarToday /> </ListItemIcon>
                <ListItemText primary={"All Events"} />
              </ListItem>
              <ListItem button key={"My Events"} onClick={()=>{this.props.history.push('/myevents')}}>
                <ListItemIcon> <AssignmentTurnedIn /> </ListItemIcon>
                <ListItemText primary={"My Events"} />
              </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem button key={"My Profile"} onClick={()=>{this.props.history.push('/profile')}}>
                <ListItemIcon> <AssignmentTurnedIn /> </ListItemIcon>
                <ListItemText primary={"My Profile"} />
              </ListItem>
          </List>
        </div>
      );
    return (

      <div className="App">
      <AppBar position="static">
      <Toolbar>
      <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon onClick={this.toggleDrawer('left', true)}/>
        </IconButton>


        <Button color="inherit" variant="outlined" onClick={()=>{this.props.history.push('/')}}>
            Dashboard
          </Button>
          <Button raised color="inherit" onClick={()=>{this.props.history.push('/profile')}}>
            Profile
          </Button>
        <Typography variant="h6" color="inherit" style={{ flex: 1 }}></Typography>

        <div>
          <Button raised color="inherit" onClick={this.signOut}>
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>

        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            <div>
            <IconButton onClick={this.toggleDrawer('left', false)}>
                <ChevronLeftIcon />
            </IconButton>
            </div>
            <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
            >
            {sideList}
            </div>
        </Drawer>
        </div>
    );
  }
}

export default withRouter(MenuBar);
