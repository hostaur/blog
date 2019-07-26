

import { PostService } from './services/post.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 
  title = 'blog';
  isAuth = false;
  lastUpdate = new Date();
  posts: any[];

  constructor(private postService: PostService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  ngOnInit() {
    this.posts = this.postService.posts;
  }

  onReinitialize() {
    if (confirm('Etes-vous sûr de vouloir tout réinitialiser ?')) {
      this.postService.reinitialize();
    } else {
      return null;
    }
  }
 

}
