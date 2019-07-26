import { POSTS } from '../mock-posts';
export class PostService {
  posts = POSTS;

  reinitialize() {
    for (let post of this.posts) {
      post.loveIts = 0;
    }
  }


  reinitializeOne(i:number) {
   this.posts[i].loveIts=0;
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

