import { AppPage } from "./app.po";
import { browser, logging, element, by } from "protractor";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual("angulartestcases app is running!");
  });

  it("should add one and two", function() {
    browser.get("http://juliemr.github.io/protractor-demo/");
    element(by.model("first")).sendKeys(1);
    element(by.model("second")).sendKeys(2);

    element(by.id("gobutton")).click();
    expect(element(by.binding("latest")).getText()).toEqual("5"); // This is wrong!
  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
