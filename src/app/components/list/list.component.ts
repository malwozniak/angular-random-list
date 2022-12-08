import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { Todo } from '../../models/todo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  todoForm: FormGroup;

  constructor(private service: ListService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      todo: ['', Validators.required],
    });
  }
  addItem() {
    this.service.create({
      value: this.todoForm.controls.todo.value,
      completed: false,
    });
    this.todoForm.reset();
  }
}
