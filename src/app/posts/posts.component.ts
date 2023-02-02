import { Component } from '@angular/core';
import {Post} from "../post";
import {PostService} from "../post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts:Post[];

  constructor(private postService: PostService) {
    this.posts = postService.posts;
  }

}
