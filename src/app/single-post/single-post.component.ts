import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor(private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.title = this.postService.getPostById(+id).title;
  }

  

}
