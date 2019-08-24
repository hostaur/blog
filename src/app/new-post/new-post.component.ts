import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  post: Post;
  constructor(private postService: PostService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    this.post = new Post;
    this.post.title = form.value['titre'];
    this.post.content = form.value['content'];
    this.postService.addPost(this.post);
    this.router.navigate(['/posts']);
  }


}
