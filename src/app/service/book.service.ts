import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Response} from "../interface/Response";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http:HttpClient) {}

  getBooks(page: number, size:number){
    const url:string = `http://localhost:8080/api/books?page=${page}&size=${size}`;
    return this.http.get<Response>(url);
  }

}
