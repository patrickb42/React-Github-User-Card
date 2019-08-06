import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Header from './components/Header';
import UserForm from './components/UserForm';
import Cards from './components/Cards';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      user: {},
      followers: [],
    };
  }

  updateInputText = (str) => {
    this.setState({
      ...this.state,
      input: str,
    });
  }

  retrieveUser = (username) => axios.get(`https://api.github.com/users/${username}`);

  retrieveFollowersList = (username) => axios.get(`https://api.github.com/users/${username}/followers`);

  extractUserData = (response) => {
    const {
      avatar_url,
      name,
      login,
      location,
      html_url,
      followers,
      following,
      bio,
    } = response.data;

    return {
      avatar_url,
      name,
      login,
      location,
      html_url,
      followers,
      following,
      bio,
    };
  };

  retrieveFollowersData = async (username) => {
      const followersList = await this.retrieveFollowersList(username);
      let extractedFollowers = [];

      const promises = followersList.data.map((follower) => {
        const followerResponse = this.retrieveUser(follower.login);
        const followerData = this.extractUserData(followerResponse);
        return followerData;
      });
      Promise.all(promises)
        .then((responses) => {
          extractedFollowers = responses.map(reponse => this.extractUserData(reponse));
        })
        .catch((error) => {
          console.error(error);
        });
      return extractedFollowers;
  };

  submitUserRequest = (event) => {
    event.preventDefault();

    (async () => {
      const currentTarget = event.currentTarget;
      const username = currentTarget.querySelector('.username-text').value;

      try {
        const response = await this.retrieveUser(username);
  
        currentTarget.querySelector('h2').classList.add('hidden');

        this.setState({
          ...this.state,
          input: '',
          user: this.extractUserData(response),
          followers: await this.retrieveFollowersData(username),
        });
        currentTarget.querySelector('.username-text').value = '';
      } catch (error) {
        currentTarget.querySelector('h2').classList.remove('hidden');
      }
    })();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <UserForm
          inputText={this.input}
          updateText={this.updateInputText}
          submitUserRequest={this.submitUserRequest}
        />
        <Cards
          userData={this.state.user}
          followersData={this.state.followers}
        />
      </div>
    );
  }
}

export default App;
