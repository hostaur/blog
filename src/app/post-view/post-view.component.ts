import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit,OnDestroy {
  posts: any[];
  postSubscription : Subscription;
  constructor(private postService: PostService) {
  }



  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }

  onReinitialize() {
    if (confirm('Etes-vous sûr de vouloir tout réinitialiser ?')) {
      this.postService.reinitialize();
    } else {
      return null;
    }
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
