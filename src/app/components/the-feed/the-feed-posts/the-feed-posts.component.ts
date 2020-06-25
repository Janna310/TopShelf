import { Component, OnInit } from "@angular/core";
import { DrinkPostService } from "src/app/services/drink-post.service";

@Component({
  selector: "the-feed-posts",
  templateUrl: "./the-feed-posts.component.html",
  styleUrls: ["./the-feed-posts.component.css"],
})
export class TheFeedPostsComponent implements OnInit {
  theFeed;
  commentHide = true;

  constructor(private postService: DrinkPostService) {}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((data) => {
      this.theFeed = data;
      console.log(this.theFeed);
    });
  }

  toggle() {
    this.commentHide = !this.commentHide;
  }
}
