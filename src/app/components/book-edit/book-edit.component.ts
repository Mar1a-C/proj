import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-edit',
  imports: [RouterModule, CommonModule, FormsModule],
  standalone: true,
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})

export class BookEditComponent {
  book: any = {};

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id).subscribe(data => {
      this.book = data;
    });
  }

  saveBook(): void {
    this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
