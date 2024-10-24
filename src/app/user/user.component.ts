import { Component, input } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  id = input();
  name = input();
  email = input();
  address = input();
  phone = input();
  company = input();
}
