import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IMember} from '../../../../../@data/interfaces';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  @Input() member: IMember;
  @Input() isRtl: boolean;
  @Output() memberClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onMemberClick(): void {
    if (this.member.role.id === 'agent') {
      this.memberClicked.emit();
    }
  }

}
