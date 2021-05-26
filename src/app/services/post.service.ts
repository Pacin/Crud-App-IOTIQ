import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from '../models/post.model';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  fetchPosts() {
    return this.http.get<PostModel[]>(`${env.baseURL}/posts`);
  }
}
