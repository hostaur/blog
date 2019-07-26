import { POSTS } from '../mock-posts';
export class PostService {
  posts = POSTS;;

  reinitialize() {
    for (let post of this.posts) {
      post.loveIts = 0;
    }
  }


  reinitializeOne(i:number) {
   this.posts[i].loveIts=0;
  }

}

