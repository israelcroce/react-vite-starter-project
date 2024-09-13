import { render } from "@testing-library/react";

import HelloWorld from "./HelloWorld";

describe("HelloWorld Snapshots Suite", () => {
  it("Render correctly", () => {
    const { baseElement } = render(<HelloWorld />);

    expect(baseElement).toMatchSnapshot();
  });
});
