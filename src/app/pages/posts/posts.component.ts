import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { UserModel } from 'src/app/models/user.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  displayedColumns: string[] = ['username', 'title', 'body'];
  dataSource: any;
  data: PostModel[];
  userList: UserModel[];

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.fetchUserList();
  }

  getTodos() {
    this.postService.fetchPosts().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        let userId = data[i].userId;
        let userInfo = this.userList.find((user) => user.id === userId);
        let name = userInfo.username;
        data[i]['username'] = name;
      }
      this.dataSource = data;
    });
  }

  fetchUserList() {
    this.userService.fetchUser().subscribe((data) => {
      this.userList = data;
      this.getTodos();
    });
  }

  openPostBodyModal() {
    console.log('model opened.');
  }

  openPostModal() {
    console.log('Post Modal Opened.');
  }
}
