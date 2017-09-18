function receivesAFunction(callback) {
    callback()
}


var returnsANamedFunction = function fn(){return function x(){}}


var returnsANamedFunction = function fn() {
    return function dog() {

    }
}

// var returnsAnAnonymousFunction = function() {
//     return function() {

//     }
// }

function returnsAnAnonymousFunction() {
    return function() {

    }
}
