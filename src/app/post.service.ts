import { Injectable } from '@angular/core';
import {Post} from "./post";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Subject<Post[]> = new Subject<Post[]>();
  username = '0'
  offset = 0

  constructor(private http: HttpClient) {
    this.posts.subscribe(posts=>{
      this.offset += posts.length
    })
  }


  addPost(post: Post) {
    return this.http.post('api/posts/',post)
  }

  getPosts(username: string): Subject<Post[]> {
    if (username != this.username) {
      this.initializePosts(username).subscribe(posts => {
        this.posts.next(posts)
      })
      this.offset=0
      this.username = username
    }

    return this.posts
  }

  initializePosts(username: string): Observable<Post[]>  {
    return this.http.get('api/posts', {params:{username: username}}) as Observable<Post[]>
  }
  getMorePosts() {
    if (this.offset == 0)
      return
    this.http.get('api/posts', {params:{username: this.username, offset: this.offset}}).subscribe(
      (posts:any) => {
        this.posts.next(posts)
      }
    )
  }
}
