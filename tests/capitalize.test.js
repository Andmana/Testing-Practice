const capitalize = require("../src/capitalize");

test("should first", () => {
    expect(capitalize("hero")).toBe("Hero");
});
