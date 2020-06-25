import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class DrinkPostService {
  constructor(private http: HttpClient, private router: Router) {}

  // all posts
  getAllPosts() {
    return this.http.get("https://topshelfdrinks.herokuapp.com/drink-posts");
  }

  // Logged in users posts
  getUserPosts() {
    let headers = new HttpHeaders();
    headers = headers.set(
      "authorization",
      localStorage.getItem("topShelf_token")
    );
    return this.http.get(
      "https://topshelfdrinks.herokuapp.com/drink-posts/users",
      { headers }
    );
  }

  postADrink(formValue) {
    // console.log('formValue', formValue);
    let headers = new HttpHeaders();
    headers = headers.set(
      "authorization",
      localStorage.getItem("topShelf_token")
    );

    this.http
      .post(
        "https://topshelfdrinks.herokuapp.com/drink-posts/users",
        formValue,
        { headers }
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  deletePost(postId) {
    let headers = new HttpHeaders();
    headers = headers.set(
      "authorization",
      localStorage.getItem("topShelf_token")
    );
    console.log("service", postId);

    return this.http.delete(
      `https://topshelfdrinks.herokuapp.com/drink-posts/${postId}`,
      { headers }
    );
  }
}
