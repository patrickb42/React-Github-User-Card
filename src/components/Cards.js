import React, { Component } from 'react';

import Card from './Card';

class Cards extends Component {
  render() {
    console.log(this.props.userData);
    
    return (
      <div className="cards">
        {this.props.userData.login
          && <>
            <Card userData={this.props.userData}/>
          </>
        }
      </div>
    );
  }
}

export default Cards;
