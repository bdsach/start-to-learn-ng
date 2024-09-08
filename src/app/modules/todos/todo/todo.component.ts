import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { TodoService } from '../../../core/services/todo.service';
import { Todo } from '../../../domain/models/todo/todo.model';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todo: Todo | undefined;
  isLoading = true;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.todoService.getTodo(id).subscribe({
        next: (todo) => {
          this.todo = todo;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error fetching todo', error);
          this.isLoading = false;
        },
        complete: () => {
          console.log('Todo fetched');
        },
      });
    } else {
      this.todo = undefined;
      this.isLoading = false;
    }
  }
}
