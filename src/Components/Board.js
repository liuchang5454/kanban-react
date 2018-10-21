import React, { Component } from 'react';
import BoardItem from './BoardItem';

class Board extends Component {
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem(){
    const index = this.props.index;
    const newItem = prompt("Please enter your new item", "New item...");
    this.props.onAddItem(index, newItem);
  }


  render(){
    const isLeftMost = this.props.isLeftMost;
    const isRightMost = this.props.isRightMost;

    const boardTitle = this.props.title;
    const boardList = this.props.list.map((el, index) => {
      return <BoardItem 
                key={index} 
                item={el} 
                isLeftMost={isLeftMost} 
                isRightMost={isRightMost}
                onMoveToLeft={this.props.onMoveToLeft}
                onMoveToRight={this.props.onMoveToRight} 
                boardIndex={this.props.index}
                itemIndex={index}
              />
    });
    return (
      <div className="board">
        <div className={"boardTitle " + this.props.color}>
          {boardTitle}
        </div>
        <div className="boardList">
          {boardList}
        </div>
        <div className="addItem">
          <a onClick={this.addItem}>Add a new item</a>
        </div>
      </div>
    );
  }
}
//html button instead of a ???
export default Board;