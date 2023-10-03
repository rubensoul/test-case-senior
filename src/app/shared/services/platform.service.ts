import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestService } from './request.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
// import * as data from '../../mocks/loan.json';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  env = environment;

  constructor(
    private requestService: RequestService,
    private httpClient: HttpClient
    ) { }

    postInfo(data): Observable<any>{
      if (this.env.mock) {
        return this.httpClient.get('assets/mocks/loan.json', data);
      }
      return this.requestService.post(`info`, data);
    }
}

