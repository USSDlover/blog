import {Component, Input, OnInit} from '@angular/core';
import {ICategory} from '../../../../../../../../@data/interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category: ICategory;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onCategoryClick(): void {
    this.router.navigateByUrl(`explore/search/result?catId=${this.category._id}`);
  }

}
