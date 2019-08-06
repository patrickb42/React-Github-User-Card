import React, { Component } from 'react';

class Card extends Component {
  
  render() {
    const {
      avatar_url,
      name,
      login,
      location,
      html_url,
      followers,
      following,
      bio,
    } = this.props.userData;

    return (
      <div className="card">
        <img src={avatar_url} alt={name}/>
        <div className="card-info">
          <h3 className="name">{name}</h3>
          <p className="username">{login}</p>
          <p>{`Location: ${location}`}</p>
          <p>
            {'Profile: '}
            <a href={html_url}>{html_url}</a>
          </p>
          <p>{`Followers: ${followers}`}</p>
          <p>{`Following: ${following}`}</p>
          <p>{`Bio: ${bio}`}</p>
        </div>
      </div>
    );
  }
}

export default Card;
