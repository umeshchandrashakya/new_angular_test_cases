import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it("should create the app", () => {
    // create component and test fixture
    const fixture = TestBed.createComponent(AppComponent);
    // get test component from the fixture
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angulartestcases'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    //debugElement used to access methods and
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("angulartestcases");
  });
  it("hsould have h1 with text", () => {
    const fixture = TestBed.createComponent(AppComponent);
    //To trigger change detection we call the function fixture.detectChanges()
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "This is my Dashboard"
    );
  });
});
