import { Injectable } from '@angular/core';
import {Post} from "./post";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Subject<Post[]> = new Subject<Post[]>();
  username = ""

  constructor(private http: HttpClient) {
    this.initializePosts("").subscribe(posts => {
      this.posts.next(posts)
    })
  }


  addPost(post: Post) {
    return this.http.post('api/posts/',post)
  }

  getPosts(username: string): Subject<Post[]> {
    if (username != this.username) {
      this.initializePosts("").subscribe(posts => {
        this.posts.next(posts)
      })
      this.username = username
    }

    return this.posts
  }

  initializePosts(username: string): Observable<Post[]>  {
    return this.http.get('api/posts', {params:{username: username}}) as Observable<Post[]>
  }
  getMorePosts() {
    this.initializePosts(this.username).subscribe(
      posts => {
        this.posts.next(posts);
      }
    )
  }
}
