import { Injectable } from '@angular/core';
import {Post} from "./post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:Post[] = [
    {
      username:"Ahmed",
      post_text: "Hello World.",
      post_date: new Date().toLocaleString()
    },
    {
      username:"LoremIpsum",
      post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam justo nulla, fermentum at porta eget, consectetur a orci. Maecenas luctus viverra neque quis sodales. Nullam dui quam, tempor eget ultrices non, gravida vitae tortor. Nunc tristique at turpis non pharetra. Ut eget sapien vel leo sagittis semper. Mauris eu felis sit amet nisl interdum semper sit amet id nulla. Curabitur ullamcorper, nisl sed dignissim dignissim, ante mauris dignissim augue, id ullamcorper leo elit in lectus. Maecenas ligula massa, pretium vel purus eget, fermentum aliquet leo. Etiam ullamcorper nec metus ut ultricies. Vestibulum maximus dapibus dolor sit amet accumsan. Nullam enim lacus, feugiat id neque vel, bibendum pretium nisi.",
      post_date: new Date().toLocaleString()
    },
    {
      username: "Ahmed",
      post_text: "hello again",
      post_date: new Date().toLocaleString()
    }
  ]

  constructor() { }


  addPost(post: Post) {
    this.posts.push(post)
  }
}
