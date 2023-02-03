import { Injectable } from '@angular/core';
import {Post} from "./post";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient) {
  }


  addPost(post: Post) {
    return this.http.post('api/posts/',post)
  }

  getPosts(username: string) {
    if(username != "")
      return this.http.get('api/posts?username='+username)
    return this.http.get('api/posts')
  }
}
