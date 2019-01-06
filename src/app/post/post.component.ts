import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

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

  substract () { this.post.loveIts--; }
}
