import { Component } from '@angular/core';
import {Post} from "../post";
import {PostService} from "../post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts:Post[] = []

  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe( paramMap => {
      const username = paramMap.get('id');
      if (username == null) {
        this.posts = postService.posts;
      }
      else {
        this.posts = postService.getPosts(username)
      }
    })
  }

}
