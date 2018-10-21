import React, { Component } from 'react';

class Board extends Component {
  constructor(props){
    super(props);
    this.moveToLeft = this.moveToLeft.bind(this);
    this.moveToRight = this.moveToRight.bind(this);
  }

  moveToLeft(){
    const boardIndex = this.props.boardIndex; 
    const itemIndex = this.props.itemIndex;
    this.props.onMoveToLeft(boardIndex, itemIndex);
  }
  
  moveToRight(){
    const boardIndex = this.props.boardIndex; 
    const itemIndex = this.props.itemIndex;
    this.props.onMoveToRight(boardIndex, itemIndex);
  }

  render(){
    const item = this.props.item;
    return (
      <div className="boardItem">
        {
          this.props.isLeftMost ? null : <div className="leftArrow" onClick={this.moveToLeft}>&#8249;</div>
        }
        
        <div className="itemText">
          {item}
        </div>

        {
          this.props.isRightMost ? null : <div className="rightArrow" onClick={this.moveToRight}>&#8250;</div>
        }
      </div>
    );
  }
}

export default Board;