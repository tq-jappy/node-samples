# constructor
class Greeting
  constructor: (@name) ->

  hello: ->
    "hello, #{@name}"

describe "Greeting", ->
  beforeEach ->
    @greeting = new Greeting("node")

  describe "hello", ->
    it "helloメッセージを返す", ->
      assert @greeting.hello() is "hello, node"

