function getData(n) {
    setTimeout((n) => {
        run(n)
    }, 1000);
}


function* run(){
    var x = 1 + (yield getData(10))
    var y = 1 + (yield getData(20))
    var answer = yield getData(x + y)
    console.log(answer)
}

run()