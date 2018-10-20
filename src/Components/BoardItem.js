import React, { Component } from 'react';

class Board extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const item = this.props.item;
    return (
      <div className="boardItem">
        {item}
      </div>
    );
  }
}

export default Board;