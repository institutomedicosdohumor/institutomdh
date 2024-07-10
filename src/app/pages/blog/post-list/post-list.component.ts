import {Component} from '@angular/core';
import {Post} from "../../../models/post.model";
import {MockPostsService} from "./mock-posts.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  posts: Post[] = [];

  constructor(private mockPostsService: MockPostsService) {
  }

  ngOnInit(): void {
    this.posts = this.mockPostsService.getPosts();
  }

}
