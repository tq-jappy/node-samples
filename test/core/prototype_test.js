// constructor
function Greeting(name) {
  this.name = name;
}

// instance method
Greeting.prototype.hello = function() {
  return "hello, " + this.name;
}

describe("Greeting", function() {
  beforeEach(function() {
    this.greeting = new Greeting("node");
  });

  describe("hello", function() {
    it("helloメッセージを返す", function() {
      assert(this.greeting.hello() === "hello, node");
    });
  });
});

