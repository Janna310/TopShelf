import { Component, OnInit } from "@angular/core";
import { RecipeApiService } from "src/app/services/recipeAPI.service";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"],
})
export class QuizComponent implements OnInit {
  constructor(private api: RecipeApiService) {}

  ngOnInit(): void {}
}
