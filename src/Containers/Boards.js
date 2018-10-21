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
  }

  addItem(index, newItem){
    let newBoards = this.state.boards.slice();
    newBoards[index].list.push(newItem);
    this.setState({boards: newBoards})
  }

  render(){
    const kanbans = this.state.boards.map((el, index) => {
      return <Board key={index} 
                    index={index}
                    title={el.title} 
                    list={el.list} 
                    color={el.color}
                    onAddItem={this.addItem}
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