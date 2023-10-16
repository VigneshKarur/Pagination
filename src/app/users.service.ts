import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs-compat';


const endpoint = 'https://jsonplaceholder.typicode.com/posts' 
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {

   
    }
    getPost():Observable<any>{
      return this.http.get(endpoint);
   }
}
