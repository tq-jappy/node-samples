describe 'setInterval', ->
  it '一定間隔で処理を実行', (done) ->
    start = new Date().getTime()
    counter = 0

    setInterval(->
      counter += 1

      if counter is 10
        end = new Date().getTime()
        assert (end - start) >= 100
        done()
    , 10)
