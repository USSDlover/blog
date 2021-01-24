import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {
  @Input() backUrl: string;
  isThereBackUrl = true;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.isThereBackUrl = !!this.backUrl;
  }

  onBackClick(): void {
    this.router.navigateByUrl(this.backUrl);
  }
}
