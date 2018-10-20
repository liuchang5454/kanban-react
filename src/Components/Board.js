import React, { Component } from 'react';
import BoardItem from './BoardItem';

class Board extends Component {
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem(){
    console.log("Adding an item");
  }

  render(){
    const boardTitle = this.props.title;
    const boardList = this.props.list.map((el, index) => {
      return <BoardItem key={index} item={el}/>
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
          <a onClick={this.addItem}>Add an item</a>
        </div>
      </div>
    );
  }
}

export default Board;