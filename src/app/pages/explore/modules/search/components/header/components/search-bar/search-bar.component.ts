import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() isRtl = true;
  searchForm: FormGroup;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.initTheForm();
  }

  onSubmit(): boolean {
    if (this.searchForm.get('terms').value) {
      this.router.navigate(['explore/search/result'], {
        queryParams: {
          terms: this.searchForm.get('terms').value
        }
      });
    }

    return false;
  }

  private initTheForm(): void {
    this.searchForm = new FormGroup({
      terms: new FormControl(null)
    });
  }

}
