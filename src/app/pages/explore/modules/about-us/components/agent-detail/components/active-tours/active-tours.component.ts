import {Component, Input, OnInit} from '@angular/core';
import {IMember, IPlace} from '../../../../../../../../@data/interfaces';
import {DataFacade} from '../../../../../../../../@data/data.facade';

@Component({
  selector: 'app-active-tours',
  templateUrl: './active-tours.component.html',
  styleUrls: ['./active-tours.component.scss']
})
export class ActiveToursComponent implements OnInit {
  @Input() agent: IMember;
  @Input() isRtl: boolean;
  activeTours: IPlace[];

  constructor(private dataFacade: DataFacade) {
  }

  ngOnInit(): void {
    if (this.agent) {
      this.retrieveAgentActiveTours();
    }
  }

  private async retrieveAgentActiveTours(): Promise<void> {
    if (this.agent.detail?.activeTours?.length > 0) {
      this.activeTours = [];
      for (const activeTour of this.agent.detail.activeTours) {
        this.activeTours.push(await this.dataFacade.getPlaceById(activeTour).toPromise());
      }
    }
  }

}
