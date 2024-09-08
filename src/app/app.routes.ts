import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { TodosComponent } from './modules/todos/todos.component';
import { TodoComponent } from './modules/todos/todo/todo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'todo', redirectTo: 'todos' },
  { path: 'todo/:id', component: TodoComponent  },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];
