import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;
  @Input() id: number;


  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  getColor() {
    if (this.post.loveIts > 0) {
      return 'green';
    } else  if (this.post.loveIts < 0) {
      return 'red';
    }
  }

 add  () {
    this.post.loveIts++;
  }

  onInitialize  () {
    this.postService.reinitializeOne(this.index);
  }

  delete(){
    this.postService.deletePost(this.index);
  }

  isInit(){
    return this.post.loveIts==0;
  }

  substract () { this.post.loveIts--; }
}
