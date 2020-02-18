import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AboutComponent } from "./about.component";
import { HighlightDirective } from "../shared/highlight.directive";

describe("AboutComponent", () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent, HighlightDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should have skyblue <h2>", () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector("h2");
    const bgColor = h2.style.backgroundColor;
    expect(bgColor).toBe("skyblue");
  });
});
