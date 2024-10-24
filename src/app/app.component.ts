import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        console.log('Danh sách người dùng:', this.users);
      },
      error: (error) => {
        console.error('Lỗi khi lấy danh sách người dùng:', error);
      }
    });
  }
}