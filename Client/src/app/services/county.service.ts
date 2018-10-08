import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountyService {

  constructor(private http: HttpClient) { }

  getCounties(page: number, count: number) {
    return this.http.get(`api/county?page=${page}&count=${count}`);
  }

}
