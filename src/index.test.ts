import { slugify } from "./index";
describe("slugify", () => {


  test("lowercase ", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  test("trim + collapse spaces", () => {
    expect(slugify(" HELLO world ")).toBe("hello-world");
  });


  test("underscores", () => {
    expect(slugify("hello__world")).toBe("hello-world");
  });

  test("multiple dashes", () => {
    expect(slugify("hello----world")).toBe("hello-world");
  });

  test("dash with spaces", () => {
    expect(slugify("hello - world")).toBe("hello-world");
  });

  test("remove punctuation", () => {
    expect(slugify("hello, world!")).toBe("hello-world");
  });

  test("replace special symbols", () => {
    expect(slugify("hello@world#test")).toBe("hello-world-test");
  });

 
  test("empty string", () => {
    expect(slugify("")).toBe("");
  });

  test("only spaces", () => {
    expect(slugify("   ")).toBe("");
  });

  test("only dashes", () => {
    expect(slugify("---")).toBe("");
  });

  test("numbers", () => {
    expect(slugify("123 456")).toBe("123-456");
  });


  test("throws error for non-string input", () => {
    expect(() => slugify(123)).toThrow();
  });
});
