import React, { Component } from 'react'
import { TextField, Button } from '@mui/material';
import TodoList from '../components/TodoList';


export default class TodoPage extends Component {
	constructor() {
		super();
		this.state = {
			todoInputText: '',
			todoListItems: [],
		};
	}

	handleChange = (e) => {
		this.setState({ todoInputText: e.target.value })
		// console.log(e.target.value,"here is console value")
	}

	addToTodoListItems = (e) => {
		const currentTodoListItems = this.state.todoListItems
		let newTodoListItems = []
		for (let i=0;i<currentTodoListItems.length;i++) {
			newTodoListItems.push(currentTodoListItems[i])
		}
		
		// newTodoListItems.push({text:e.target[0].value,complete:false})
		newTodoListItems.push([e.target[0].value,false])
		this.setState({ todoListItems: newTodoListItems })
		console.log(this.state.todoListItems)
	}

	makeTodoItem = (todoPair) => {
		return (
			<div>
				{todoPair}
			</div>
		)
	}

	makePrint = (val) => {
		console.log(val)
	}

	render() {
		return (
			<div className='side-margin'>
				<br />
				<h1>Todo List</h1>
				
				{/* {this.state.todoListItems.forEach(this.makeTodoItem)} */}
				
				<TodoList todoItems={this.state.todoListItems}/>
				<br />
				<form style={{display:'flex',alignItems:'center'}}
				onSubmit={(e) => {
					e.preventDefault()
					// console.log(e)
					this.addToTodoListItems(e)
				}}>	
					<TextField
						variant='outlined'
						label='Enter Todo'
						sx={{ width: '400px' }}
						value={this.state.todoInputText}
						onChange={this.handleChange}
					/>
					<Button variant='outlined' type='submit'>Hello</Button>
				</form>

				<br />
				{/* <div>
					{this.state.todoListItems.map(this.makeTodoItem)}
				</div> */}
				
				
			</div>
		)
	}
}
