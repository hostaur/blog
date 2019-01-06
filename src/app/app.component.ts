import { Component } from '@angular/core';
import {POSTS} from './mock-posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = POSTS;
  title = 'blog';
}
