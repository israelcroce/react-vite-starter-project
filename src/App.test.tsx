import { render } from "@testing-library/react";

import App from "./App";

test("Renders the main page", () => {
  const { getByRole } = render(<App />);
  const headingElement = getByRole("heading", { level: 1 });

  expect(headingElement.textContent).toBe("Hello World!");
});
