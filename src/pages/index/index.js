if(module && module.hot) {
    module.hot.accept()
}
import './css/index.scss'

Function.prototype.bind2 = function(content) {
    if (typeof this !== 'function') {
        throw Error("not a function")
    }
    var fn = this
    var args = [].slice.call(arguments, 1)
    var result = function() {
        return fn.apply(content ? fn : window, args.concat([].slice.call(arguments)))
    }
    return result
}

var a = 1
var fn = function() {
    console.log('this', this.a, this)
}
var fn1 = fn.bind2(null)
console.log('111', fn1())

var data = [1,22,3,14,52,6,27,8,19,10]
// var len = data.length
// var result = []
// var limit = 3
// var count = len % limit === 0 ? len / limit : Math.ceil(len / limit)
// for (var i = 0; i < count; i++) {
//     result.push(data.slice(i * limit, i * limit + limit))
// }

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    var left = [],
        right = [],
        current = arr.splice(0, 1); // 基准值
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < current) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(current, quickSort(right))    
}