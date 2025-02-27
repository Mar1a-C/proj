import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {
  book: any = {
    title: '',
    author: '',
    publishedYear: '',
    publisher: '',
    condition: 'New',
    categories: [],
    available: true
  };

  constructor(private bookService: BookService, private router: Router) {}

  createBook(): void {
    this.bookService.createBook(this.book).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
