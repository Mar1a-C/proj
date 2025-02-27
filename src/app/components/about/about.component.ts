import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule], 
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  studentName: string = "Maria";
  studentID: string = "5508";
  projectYear: number = new Date().getFullYear();
  githubRepo: string = "https://github.com/Mar1a-C/proj";
}
