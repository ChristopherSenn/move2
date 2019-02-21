import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MarkerOnMap, UniversityDetailOnMap, UniversityFilters, UniversityMapFilterElement } from '@app/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private server = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getMarkersOnMap(): Observable<MarkerOnMap[]> {
    const options = { headers: this.getJWTHeaders()};
   return this.http.get<MarkerOnMap[]>(this.server + `/api/UniversityMarkersOnMap`, options);
  }

  getUniversityDetailOnMap(id: number): Observable<UniversityDetailOnMap> {
    const options = { headers: this.getJWTHeaders()};
    return this.http.post<UniversityDetailOnMap>(this.server + `/api/UniversityDetailOnMap`, { id },  options);
  }

  getUniversityFilters(filter: string) {
    const options = { headers: this.getJWTHeaders()};
    return this.http.post<UniversityMapFilterElement[]>(this.server + `/api/UniversityFilters`, {filter}, options);
  }

  private getJWTHeaders(): HttpHeaders{
    const token = JSON.parse(localStorage.currentUser);
    const httpHeaders = new HttpHeaders({
      'authorization': 'Bearer ' + token
    });
    return httpHeaders;
  }

  
}
