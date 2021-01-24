import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ICategory, IInfoBox, IMember, IPlace, IPlaceDetail} from './interfaces';
import {AgentsService, CategoriesService, InfoService, MembersService, PlacesService} from './services';

@Injectable()
export class DataFacade {
  constructor(
    private placesService: PlacesService,
    private categoriesService: CategoriesService,
    private agentsService: AgentsService,
    private membersService: MembersService,
    private infoService: InfoService
  ) {
  }

  getTop5Places(): Observable<IPlace[]> {
    return this.placesService.getTop5Places();
  }

  getPlaceById(placeId: string): Observable<IPlaceDetail | null> {
    return this.placesService.getPlaceById(placeId);
  }

  searchForPlace(terms: string): Observable<IPlace[]> {
    return this.placesService.searchForPlace(terms);
  }

  getPlacesByCatId(catId: string): Observable<IPlace[]> {
    return this.placesService.getPlacesByCatId(catId);
  }

  getTop2Categories(): Observable<ICategory[]> {
    return this.categoriesService.getTop2Categories();
  }

  getAllCategories(): Observable<ICategory[]> {
    return this.categoriesService.getAllCategories();
  }

  getCatById(catId: string): Observable<ICategory> {
    return this.categoriesService.getCategoryById(catId);
  }

  getAgents(): Observable<IMember[]> {
    return this.agentsService.getAgents();
  }

  getAgentById(agentId: string): Observable<IMember> {
    return this.agentsService.getAgentById(agentId);
  }

  getMembers(): Observable<IMember[]> {
    return this.membersService.getMembers();
  }

  getInfo(infoId: string): Observable<IInfoBox> {
    return this.infoService.getInfo(infoId);
  }
}
