describe 'setTimeout', ->
  it '一定時間後に処理を実行', (done)->
    start = new Date().getTime()

    setTimeout(->
      end = new Date().getTime()
      assert (end - start) >= 100

      done()
    , 100)
