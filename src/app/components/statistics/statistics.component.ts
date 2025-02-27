import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  totalBooks: number = 0;
  availableBooks: number = 0;
  borrowedBooks: number = 0;
  booksByCategory: any = {};
  booksByLanguage: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/books').subscribe(books => {
      this.totalBooks = books.length;
      this.availableBooks = books.filter(book => book.available).length;
      this.borrowedBooks = books.length - this.availableBooks;

      this.booksByCategory = this.countOccurrences(books, 'categories');
      this.booksByLanguage = this.countOccurrences(books, 'language');
    });
  }

  countOccurrences(items: any[], key: string): any {
    const countMap: any = {};
    items.forEach(item => {
      const values = Array.isArray(item[key]) ? item[key] : [item[key]];
      values.forEach(value => {
        if (value) countMap[value] = (countMap[value] || 0) + 1;
      });
    });
    return countMap;
  }


  get categoryKeys(): string[] {
    return Object.keys(this.booksByCategory);
  }

  get languageKeys(): string[] {
    return Object.keys(this.booksByLanguage);
  }
}
