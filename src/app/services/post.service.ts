import { POSTS } from '../mock-posts';
import { Subject } from 'rxjs';
import { Post } from '../post';

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

  addPost(p:Post){
    this.posts.push(p);
    this.emitPostSubject();
  }

  deletePost(i:number){
    this.posts.splice(i, 1);
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

