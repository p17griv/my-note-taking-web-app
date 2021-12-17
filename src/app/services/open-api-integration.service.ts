import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from '../models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class OpenApiIntegrationService {

  constructor(private http: HttpClient) { }

  getOpenApiResult() {
    return this.http.get<Activity>('https://www.boredapi.com/api/activity/', {observe: 'body'});
  }
}
