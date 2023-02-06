import { Injectable } from '@angular/core';
import {Post} from "./post";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Subject<Post[]> = new Subject<Post[]>();
  username = '0'
  page = 0
  last_post?:Post;

  constructor(private http: HttpClient) {
    this.posts.subscribe(posts=> {
      this.last_post = posts[posts.length-1]
    })

  }


  addPost(post: Post) {
    return this.http.post('api/posts/',post)
  }

  getPosts(username: string): Subject<Post[]> {
    this.username = username
    this.page=0
    this.last_post = undefined
    this.getMorePosts()

    return this.posts
  }


  getMorePosts() {
    this.http.get('api/posts', {params:{username: this.username, offset: this.page*10}}).subscribe(
      (posts:any) => {
        if (JSON.stringify(this.last_post) == JSON.stringify(posts[posts.length-1])) {
          return
        }
        this.posts.next(posts)
        this.page++
      }
    )
  }
}
