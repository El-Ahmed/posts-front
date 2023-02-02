import {Component, Input} from '@angular/core';
import {NgForm} from "@angular/forms";
import {PostService} from "../post.service";
import {Post} from "../post";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  @Input('username') username=""

  constructor(private postService: PostService) {
  }

  onSubmit(f: NgForm) {
    const post:Post = {
      post_date: new Date().toLocaleString(),
      post_text: f.value.post_text,
      username: this.username
    }
    this.postService.addPost(post)
  }

}
