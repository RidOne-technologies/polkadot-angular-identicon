import { TestBed } from "@angular/core/testing";
import { RenderHelper } from "./render-helper";
describe("Polkadot-Angular-Test", () => {
  let component: RenderHelper;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();
  });

  beforeEach(() => {
    component = RenderHelper;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should render 64 sized polkadot", () => {
    var x = RenderHelper.pickRenderFunction(
      "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
      "polkadot",
      64
    );
    expect(x).toContain('<circle cx="32"  cy="32" fill="#eee"');
  });
  it("should render 64 sized beachball", () => {
    var x = RenderHelper.pickRenderFunction(
      "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
      "beachball",
      64
    );
    expect(x).toContain(
      '<circle cx="37.21810266874173" cy="37.249034537400256" r="35.510986328125" fill="hsl(353.4, 100%, 25.1%)"></circle>'
    );
  });
  it("should render 64 sized jdenticon", () => {
    var x = RenderHelper.pickRenderFunction(
      "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
      "jdenticon",
      64
    );
    expect(x).toContain(
      '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path fill="#e8e8e8"'
    );
  });
  it("should render 32 sized jdenticon", () => {
    var x = RenderHelper.pickRenderFunction(
      "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
      "jdenticon",
      32
    );
    expect(x).toContain(
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#e8e8e8"'
    );
  });
  it("should render 32 sized beachball", () => {
    var x = RenderHelper.pickRenderFunction(
      "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
      "beachball",
      32
    );
    expect(x).toContain(
      '<circle cx="18.609051334370864" cy="18.624517268700128" r="17.7554931640625" fill="hsl(353.4, 100%, 25.1%)">'
    );
  });
  it("should render 32 sized polkadot", () => {
    var x = RenderHelper.pickRenderFunction(
      "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
      "polkadot",
      32
    );
    expect(x).toContain('<circle cx="32"  cy="32" fill="#eee"');
  });
  it("should render empty", () => {
    var x = RenderHelper.pickRenderFunction(
      "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
      "",
      32
    );
    expect(x).toContain('<circle cx="50%" cy="50%" fill="#eee" r="50%" />');
  });
});