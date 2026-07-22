import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/users-mfe/src/environments/environment';
import { API_ENDPOINTS } from '../config/api-endpoints.contant';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = environment.apiUrl;
  private readonly endpoints = API_ENDPOINTS ;

  constructor(private http: HttpClient) { }

  getRandomUsers(page: number, limit: number) {
    return this.http.get(`${this.apiUrl}${this.endpoints.RANDOMUSERS}?page=${page}&limit=${limit}`);
  }

  getRandomUserById(id: string) {
    return this.http.get(`${this.apiUrl}${this.endpoints.RANDOMUSERBYID}`.replace('{id}', id));
  }
}
