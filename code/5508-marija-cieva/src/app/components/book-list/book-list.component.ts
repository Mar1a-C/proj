import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterLink, CommonModule],  
  standalone: true,
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  deleteBook(id: number): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(id).subscribe(() => {
        this.books = this.books.filter(book => book.id !== id);
      });
    }
  }

  books: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }
}




