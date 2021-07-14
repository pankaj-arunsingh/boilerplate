import { render } from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
  test("renders learn react link", () => {
    const component = render(<App />);
    component.getByTestId("dateTime");
    expect(component).toBeDefined();
  });
});
