import React, { Component } from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import IconButton from '@mui/material/IconButton';

export default class TodoList extends Component {
  renderToDoItems = ([todoItem,todoCompleted]) => {
    if (todoCompleted) {
        todoCompleted = true
        return (
            <>
            <IconButton>
                <CheckBoxIcon/>
            </IconButton>
            <p>{{todoItem}}</p>
            </>
        )
    } else {
        return (
            <div style={{display:'flex',alignItems:'center'}}>
            <IconButton>
                <CheckBoxOutlineBlankIcon />
            </IconButton>
            <p style={{margin:'0'}}>{todoItem}</p>
            </div >
        )
    }
  }
  render() {
    return (
      <div>
        TodoList
        <br />
        {this.props.todoItems.map((todoPair) => {
            return (this.renderToDoItems(todoPair))
        })}
        <br />

      </div>
    )
  }
}
