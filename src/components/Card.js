import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        {/* <img src={null} alt={this.props.cardData.username}/> */}
        <img src={null} alt="placeholder"/>
        <div className="card-info">
          <h3 className="name">Name</h3>
          <p className="username">Username</p>
          <p>{`Location: `}</p>
          <p>
            {'Profile: '}
            <a href="#">{`Address`}</a>
          </p>
          <p>{`Followers: `}</p>
          <p>{`Following: `}</p>
          <p>{`Bio: `}</p>
        </div>
      </div>
    );
  }
}

export default Card;
