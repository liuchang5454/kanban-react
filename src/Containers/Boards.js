import React, { Component } from 'react';
import Board from '../Components/Board';

class Boards extends Component {
  constructor(props){
    super(props);
    this.state= {
      boards: [
        {
          title: "Winnie",
          color: "LightCoral",
          list: [
            "Winnie to do item 1",
            "Winnie to do item 2"
          ]
        },
        {
          title: "Bob",
          color: "ForestGreen",
          list: [
            "Bob to do item 1",
            "Bob to do item 2"
          ]
        },
        {
          title: "Thomas",
          color: "Goldenrod",
          list: [
            "Thomas to do item 1",
            "Thomas to do item 2"
          ]
        },
        {
          title: "George",
          color: "DarkTurquoise",
          list: [
            "George to do item 1",
            "George to do item 2"
          ]
        }
      ]
    }; 
    this.addItem = this.addItem.bind(this);
    this.moveToLeft = this.moveToLeft.bind(this);
    this.moveToRight = this.moveToRight.bind(this);
  }

  addItem(index, newItem){
    let newBoards = this.state.boards.slice();
    newBoards[index].list.push(newItem);
    this.setState({boards: newBoards})
  }

  moveToLeft(boardIndex, itemIndex){
    console.log("moving to left");
    let newBoards = this.state.boards.slice();
    const item = newBoards[boardIndex].list[itemIndex];
    //add to the bottom of previous board
    newBoards[boardIndex - 1].list.push(item);
    //remove from current board
    newBoards[boardIndex].list.splice(itemIndex, 1);
    this.setState({boards: newBoards});
  }

  moveToRight(boardIndex, itemIndex){
    console.log("moving to right");
    let newBoards = this.state.boards.slice();
    const item = newBoards[boardIndex].list[itemIndex];
    //add to the bottom of next board
    newBoards[boardIndex + 1].list.push(item);
    //remove from current board
    newBoards[boardIndex].list.splice(itemIndex, 1);
    this.setState({boards: newBoards});
  }

  render(){
    const kanbans = this.state.boards.map((el, index) => {
      const isLeftMost = index === 0 ? true : false;
      const isRightMost = index === this.state.boards.length - 1 ? true : false;
      return <Board key={index} 
                    index={index}
                    title={el.title} 
                    list={el.list} 
                    color={el.color}
                    onAddItem={this.addItem}
                    isLeftMost={isLeftMost}
                    isRightMost={isRightMost}
                    onMoveToLeft={this.moveToLeft}
                    onMoveToRight={this.moveToRight}
              />
    });
    return (
      <div className="boards">
        {kanbans}
      </div>
    );
  }
}

export default Boards;