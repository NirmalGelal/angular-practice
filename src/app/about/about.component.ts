import {Component, OnInit,} from '@angular/core';
import {BookService} from "../service/book.service";
import {Book} from "../interface/Book";
import {Response} from "../interface/Response";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  size:number = 3;
  page:number = 1;

  response?:Response;
  bookList?:Book[];
  constructor(private bookService:BookService) {
  }
  ngOnInit() {
    this.fetchBooks(this.page, this.size);
  }
  fetchBooks(page:number, size:number){
    this.bookService.getBooks(page, size)
      .subscribe((result:Response) =>{
        this.response = result;
        this.bookList = this.response?.data?.content;}
      );
  }

  nextPage(){
    this.page += 1;
    this.fetchBooks(this.page, this.size);
  }

  previousPage(){
    this.page -=1;
    this.fetchBooks(this.page, this.size);
  }

  handleDropdownChange(event:any){
    this.size = Number(event.target.value);
    this.fetchBooks(this.page, this.size);
  }
}
