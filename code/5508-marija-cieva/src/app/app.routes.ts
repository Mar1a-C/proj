import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { AboutComponent } from './components/about/about.component';
import { PublisherListComponent } from './components/publisher-list/publisher-list.component';
import { PublisherDetailsComponent } from './components/publisher-details/publisher-details.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

export const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'books/create', component: BookCreateComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'books/:id/edit', component: BookEditComponent },
  { path: 'publishers', component: PublisherListComponent },
  { path: 'publishers/:id', component: PublisherDetailsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/books' }
];
