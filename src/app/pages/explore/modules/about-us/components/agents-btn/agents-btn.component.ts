import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-agents-btn',
  templateUrl: './agents-btn.component.html',
  styleUrls: ['./agents-btn.component.scss']
})
export class AgentsBtnComponent implements OnInit {
  @Input() btnTitle = 'نمایندگان ما';
  @Output() btnClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
