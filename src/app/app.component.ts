import { Component } from '@angular/core';
import {PostService} from "./post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'posts-front';

  constructor(private postService: PostService) {
  }

  onScroll(event:Event) {
    let element: HTMLDivElement|null = event.target as HTMLDivElement;
    if(element.scrollTop  >= element.scrollHeight - 2*element.offsetHeight )
      this.postService.getMorePosts();
  }
}
