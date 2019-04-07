import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor( private http: HttpClient) { }

  // url = "https://jsonplaceholder.typicode.com/users";
  postUrl = "http://192.168.43.220:8000/api/post";
  postFoundUrl = "http://192.168.43.220:8000/api/foundpost";

  // getUsers(){
  //   return this.http.get(this.url);
  // }

  post(data, options): Observable<any>{
    return this.http.post(this.postUrl, data, options);
  }

  postfound(data, options): Observable<any>{
    return this.http.post(this.postFoundUrl, data, options);
  }

}
