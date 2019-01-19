import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "test-tutz";
  x = 0;
  myF;
  constructor(private formB: FormBuilder) {
    this.myF = this.formB.group({
      name: ["", [Validators.required]],
      age: [],
      habits: this.formB.group([])
    });
  }
  users = [];
  add() {
    this.x = this.x + 1;
  }

  sub() {
    this.x = this.x - 1;
  }

  addUsers(x) {
    this.users.push(x);
  }
}
