import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link, Redirect, NavLink } from 'react-router-dom';


import FixedMenu from './fixedMenu.jsx';
import * as authActions from '../../actions/authActions.js';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://i.imgur.com/xBWTmBD.jpg" alt="Fridge-it" />
              <div className="carousel-caption d-md-block">
                <h1>Fridge-it</h1>
                <h2>Meal planning made convenient and easy.</h2>
                <button type="button" className="btn btn-primary btn-lg" onClick={(e) => {
                e.preventDefault();
                this.props.actions.checkItOut();
              }}>
                <span>Get Started &nbsp;
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
                </button>
             </div>
            </div>
          </div>
        </div>
        <div className="container padding-30" >
          <div className="row">
            <div className="col-8 col-sm-6">
              <h3>Plan meals with items already in your fridge</h3>
              <p>
                Fridge-It allows you to see the contents of your refrigerator no matter where you are. No more getting to the grocery store and forgetting what you already have. Plan meals, bookmark recipes, and eliminate food waste.  
              </p>
              <h3>Share a fridge with family and friends</h3>
              <p>
                Fridge-It makes sharing refrigerators a breeze. Stick magnets on your fridge to send others notes, requests, and reminders, and to make sure no one eats the leftover pizza you've been thinking about all day. 
              </p>
              <button className="btn btn-secondary">Check it out</button>
              <div className="container padding-30">
                <div className="row">
                  <div className="col">
                    <h2>"What a company"</h2>
                    <h5>The members of Team TADA are brilliant!</h5>
                    <h5>I never knew I needed Fridge-It until I started using it!</h5>
                  </div>
                  <div className="col">
                  <h2>"I'll never not use Fridge-It ever again!"</h2>
                    <h5>Nan - very satisfied customer</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-6 mini-fridge-pic">
              <img src="https://i.pinimg.com/564x/fe/7a/14/fe7a147b77ba7e2960d6708e9178b8e5.jpg" />
            </div>
            <hr />
            <div className="padding-30">
              <h3>More about Team TADA</h3>
              <p> Team TADA was formed on September 22, 2017 and were inspired to make Fridge-It by Hack Reactor's fridge. They realized that the idea of keeping track of food was important for all students, thus Fridge-It was born! </p>
              <button className="btn btn-secondary">Read More</button>
          </div>
          <div className="padding-30">
              <h3>Members</h3>
              <p>TADA is an acronym of the creators of this group: Tiffany Phan, Angie Tang, Daniel Chong and Aaron Liss. The project owner of this app is Tiffany Phan. The scrum master of this app is Daniel Chong.</p>
              <button className="btn btn-secondary">I'm Still Quite Interested</button>
          </div>
        </div>

      </div>
      <footer className="footer">
        <div className="container">
        <div className="row">
          <div className="col">
            <h3>About</h3>

          </div>
          <div className="col">
          <h3>Services</h3>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>Plan meals with items already in your fridge</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Fridge-It allows you to see the contents of your refrigerator no matter where you are. No more getting to the grocery store and forgetting what you already have. Plan meals, bookmark recipes, and eliminate food waste.  
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>Share a fridge with family and friends</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Fridge-It makes sharing refrigerators a breeze. Stick magnets on your fridge to send others notes, requests, and reminders, and to make sure no one eats the leftover pizza you've been thinking about all day. 
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src='https://i.pinimg.com/564x/fe/7a/14/fe7a147b77ba7e2960d6708e9178b8e5.jpg'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge' onClick={(e) => {
                  e.preventDefault();
                  this.props.actions.checkItOut();
                }}>Check It Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"What a company"</Header>
                <p style={{ fontSize: '1.33em' }}>The members of Team TADA are brilliant! <br/> I never knew I needed Fridge-It until I started using it!</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"I'll never not use Fridge-It ever again!"</Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src='https://www.allbusiness.com/asset/2015/09/satisfied-customer.jpg'/>
                  <b>Nan</b> - very satisfied customer
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>More about Team TADA</Header>
            <p style={{ fontSize: '1.33em' }}>
              Team TADA was formed on September 22, 2017 and were inspired to make Fridge-It by Hack Reactor's fridge. 
              They realized that the idea of keeping track of food was important for all students, thus
              Fridge-It was born! 
            </p>
            <Button as='a' href='https://github.com/TEAM-TADA' size='large' target="_blank">Read More</Button>
            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='https://github.com/TEAM-TADA'>Members</a>
            </Divider>
            <Header as='h3' style={{ fontSize: '2em' }}>Members</Header>
            <p style={{ fontSize: '1.33em' }}>
              Dev-Team: Max Jacobs, Alex Leigh, Tiffany Wang, Jaafar Skafi, Tiffany Phan, Angie Tang, Daniel Chong and Aaron Liss.
              <br/>The project owners of this app are Max Jacobs and Tiffany Phan.
              <br/>The scrum master of this app is Daniel Chong. 
            </p>
            <Button as='a' href="https://github.com/TEAM-TADA" size='large' target="_blank">I'm Still Quite Interested</Button>
          </Container>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                    <List.Item as='a'>How To Access</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
};

const lpDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(null, lpDispatch)(LandingPage);