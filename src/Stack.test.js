import Stack from "./Stack";

const sampleItem = { name: "foo" };
const initialStack = [sampleItem];
let isEmptySpy;

describe("Stack", () => {
  describe("constructor", () => {
    it("default initializes correctly", () => {
      const result = new Stack();
      expect(result.stack).toEqual([]);
    });
    it("initializes with array input correctly", () => {
      const result = new Stack(initialStack);
      expect(result.stack).toEqual(initialStack);
    });
    it("initializes with non array input correctly", () => {
      const result = new Stack(sampleItem);
      expect(result.stack).toEqual(initialStack);
    });
  });
  describe("isEmpty", () => {
    it("returns true when empty", () => {
      const result = new Stack();
      expect(result.isEmpty()).toEqual(true);
    });
    it("returns false when not empty", () => {
      const result = new Stack(initialStack);
      expect(result.isEmpty()).toEqual(false);
    });
  });

  describe("length", () => {
    it("returns 0 when empty", () => {
      const result = new Stack();
      expect(result.length).toEqual(0);
    });
    it("returns length when not empty", () => {
      const result = new Stack(initialStack);
      expect(result.length).toEqual(1);
    });
  });

  describe("peek", () => {
    beforeEach(() => {
      isEmptySpy = jest.spyOn(Stack.prototype, "isEmpty");
    });
    it("returns null when stack is empty", () => {
      const result = new Stack();

      expect(result.peek()).toEqual(null);
      expect(isEmptySpy).toHaveBeenCalledTimes(1);
    });

    it("returns last item when stack is populated", () => {
      const result = new Stack(initialStack);
      expect(result.peek()).toEqual(sampleItem);
      expect(isEmptySpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("push", () => {
    it("returns length after push", () => {
      const result = new Stack();
      const expected = result.push(sampleItem);
      expect(expected).toEqual(1);
    });
  });

  describe("pop", () => {
    let peekSpy;
    beforeEach(() => {
      isEmptySpy = jest.spyOn(Stack.prototype, "isEmpty");
      peekSpy = jest.spyOn(Stack.prototype, "peek");
    });
    it("returns null when empty", () => {
      const result = new Stack();
      const expected = result.pop();
      expect(expected).toEqual(null);
      expect(isEmptySpy).toHaveBeenCalledTimes(1);
      expect(peekSpy).toHaveBeenCalledTimes(0);
    });

    it("returns top item when not empty", () => {
      const result = new Stack(initialStack);
      const initialLength = result.length;
      const expected = result.pop();
      expect(expected).toEqual(sampleItem);
      expect(result.length).toEqual(initialLength - 1);
      expect(isEmptySpy).toHaveBeenCalledTimes(2);
      expect(peekSpy).toHaveBeenCalledTimes(1);
    });
  });
});
