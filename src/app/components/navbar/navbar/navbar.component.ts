import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostResponseModel } from 'src/app/models/postResponseModel';
import { Root } from 'src/app/models/root';
import { HelperService } from 'src/app/services/helper.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  followUrl:string="https://www.tumblr.com/register/follow/demo?referer=follow_header&source=blognetwork_follow_header";
  exploreUrl:string="https://www.tumblr.com/explore/today";
  text: string = '';
  posts: Post[] = [];
  root: Root;

  postResponseModel: PostResponseModel = {
    data: this.posts,
    message: '',
    success: true,
  };

  constructor(private postService: PostService, private helperService: HelperService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.helperService.getRawData().subscribe((response) => {
      this.text = response;
      this.root = JSON.parse(this.text.substring(22, 27765));
    });
  }

  onClickFollowButton() {
    window.open(this.followUrl, '_blank');
  }
  onClickExploreButton() {
    window.open(this.exploreUrl, '_blank');
  }
}
