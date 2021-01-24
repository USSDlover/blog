import {Component} from '@angular/core';
import {IInfoBox, IMember} from '../../../../../../@data/interfaces';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  aboutUs: IInfoBox;
  members: IMember[];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (route.snapshot?.data?.info?.members && route.snapshot?.data?.info?.aboutUs) {
      this.members = route.snapshot.data.info.members;
      this.aboutUs = route.snapshot.data.info.aboutUs;
    }
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  onAgentBtnClick(): void {
    this.router.navigateByUrl('explore/about/agents');
  }
}
