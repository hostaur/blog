import { POSTS } from '../mock-posts';
import { Subject } from 'rxjs';

export class PostService {
  postsSubject = new Subject<any[]>();
  private posts = POSTS;

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  reinitialize() {
    for (let post of this.posts) {
      post.loveIts = 0;
    }

    this.emitPostSubject();
  }


  reinitializeOne(i:number) {
   this.posts[i].loveIts=0;
   this.emitPostSubject();
  }

  getPostById(id: number) {
    const post = this.posts.find(
      (s) => {
        return s.id === id;
      }
    );
    return post;
}

}

