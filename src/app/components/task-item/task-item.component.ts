import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  faTimes = faTimes;
  @Output() onDeleteTask = new EventEmitter();
  @Output() onToggleTask = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  onDelete() {
    this.onDeleteTask.emit();
  }

  onToggle(){
    this.onToggleTask.emit();
  }
}
