import { TestBed } from "@angular/core/testing";
import { RenderHelper } from "./render-helper";

const TEST_ADDRESS = "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty";

describe("Polkadot-Angular-Test", () => {
  let component: RenderHelper;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();

    component = RenderHelper;
  });

  it("should create create component", () => {
    expect(component).toBeTruthy();
  });

  // Testing  64px sized & themed polkadot identicon
  it("should render 64px sized and themed polkadot identicon", () => {
    const polkadotIcon = RenderHelper.pickRenderFunction(
      TEST_ADDRESS,
      "polkadot",
      64
    );

    expect(polkadotIcon).toContain('<circle cx="32"  cy="32" fill="#eee"');

   // expect(RenderHelper.renderCircle).toHaveBeenCalled();
  });

  // Testing  64px sized & themed beachball identicon
  it("should render 64px sized and themed beachball Identicon", () => {
    const beachballIcon = RenderHelper.pickRenderFunction(
      TEST_ADDRESS,
      "beachball",
      64
    );

    expect(beachballIcon).toContain(
      '<circle cx="37.21810266874173" cy="37.249034537400256" r="35.510986328125" fill="hsl(353.4, 100%, 25.1%)"></circle>'
    );
  });

  // Testing 64px sized & themed jdenticon  identicon
  it("should render 64px sized and themed jdenticon Identicon", () => {
    const jdenticonIcon = RenderHelper.pickRenderFunction(
      TEST_ADDRESS,
      "jdenticon",
      64
    );

    expect(jdenticonIcon).toContain(
      '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path fill="#e8e8e8"'
    );
  });

  // Testing 32px sized & themed jdenticon identicon
  it("should render 32px sized and themed jdenticon identicon", () => {
    const jdenticon32 = RenderHelper.pickRenderFunction(
      TEST_ADDRESS,
      "jdenticon",
      32
    );

    expect(jdenticon32).toContain(
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#e8e8e8"'
    );
  });

  // Testing 32px sized & themed beachball identicon
  it("should render 32px sized and themed beachbal identiconl", () => {
    const beachball32 = RenderHelper.pickRenderFunction(
      TEST_ADDRESS,
      "beachball",
      32
    );

    expect(beachball32).toContain(
      '<circle cx="18.609051334370864" cy="18.624517268700128" r="17.7554931640625" fill="hsl(353.4, 100%, 25.1%)">'
    );
  });

  // Testing 32px sized & themed polkadot identicon
  it("should render 32px sized and themed polkadot identicon", () => {
    const polkadot32 = RenderHelper.pickRenderFunction(
      TEST_ADDRESS,
      "polkadot",
      32
    );
    expect(polkadot32).toContain('<circle cx="32"  cy="32" fill="#eee"');

  });

   // Testing 32px sized & themed empty identicon
  it("should render 32px sized empty identicon", () => {

    const empty32 = RenderHelper.pickRenderFunction(
      TEST_ADDRESS,
      "",
      32
    );

  });
});