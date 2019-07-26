import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  posts: any[];
  isAuth = false;
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
