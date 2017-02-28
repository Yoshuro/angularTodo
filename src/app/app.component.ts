import { Component } from '@angular/core'

import { TodosComponent } from './todos/todos.component'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent  { title = 'Angular Todo' }
