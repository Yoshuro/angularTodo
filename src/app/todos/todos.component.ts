import { Component, OnInit } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: any
  text: string
  consturctor() {}

  ngOnInit() {
    this.todos = [
      {
        text: 'Add a todo'
      }
    ]
  }

  addTodo() {
    // tekst z inputa
    //this.text
    const todo = {
      text: this.text
    }
    this.todos = this.todos.concat(todo)
    this.text = ''
  }

  deleteTodo(text: string) {
    this.todos = this.todos.filter((todo: any) => {
      if(todo.text === text)
        return false
      return true
    })
  }
}
