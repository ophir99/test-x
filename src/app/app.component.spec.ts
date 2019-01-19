import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule, FormBuilder } from "@angular/forms";

describe("AppComponent", () => {
  let myObj;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  // it("should create the app", () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'test-tutz'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual("test-tutz");
  // });

  // it("should render title in a h1 tag", () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector("h1").textContent).toContain(
  //     "Welcome to test-tutz!"
  //   );
  // });

  beforeEach(() => {
    myObj = new AppComponent(new FormBuilder());
  });
  it("TESTing add Method", () => {
    myObj.x = 2;
    myObj.add();
    expect(myObj.x).toBe(3); 
  });

  it("ADD USers method", () => {
    const initialLength = myObj.users.length;
    myObj.addUsers("Raj");

    expect(myObj.users.length).toBe(initialLength + 1);
  });

  it("Validator form NAme control", () => {
    myObj.myF.get("name").setValue("");
    expect(myObj.myF.get("name").valid).toBeFalsy();
  });
});
