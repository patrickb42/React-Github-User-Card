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

  retrieveFollowers = (username) => axios.get(`https://api.github.com/users/${username}/followers`);

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
  }

  submitUserRequest = (event) => {
    event.preventDefault();

    (async () => {
      const currentTarget = event.currentTarget;

      try {
        const response = await this.retrieveUser(
          currentTarget.querySelector('.username-text').value
        );
  
        console.log(response.data);
        currentTarget.querySelector('h2').classList.add('hidden');
        
        
        this.setState({
          ...this.state,
          input: '',
          user: this.extractUserData(response),
          followers: [],
        });
        currentTarget.querySelector('.username-text').value = '';
      } catch (error) {
        currentTarget.querySelector('h2').classList.remove('hidden');
      }
    })();
  }

  render() {
    // console.log(`user data ${JSON.stringify(this.state.user)}`);
    
    return (
      <div className="container">
        <Header />
        <UserForm
          inputText={this.input}
          updateText={this.updateInputText}
          submitUserRequest={this.submitUserRequest}
        />
        <Cards />
      </div>
    );
  }
}

export default App;
