const caesarChiper = require("../src/caesarChiper");

test("xyz -> abc", () => {
    expect(caesarChiper("xyz", 3)).toBe("abc");
});

test("HeLLo -> KhOOr", () => {
    expect(caesarChiper("HeLLo", 3)).toBe("KhOOr");
});

test("HeLLo -> KhOOr", () => {
    expect(caesarChiper("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
