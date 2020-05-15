var _Class = function() {
    var kclass = function() {
        this.init.apply(this, arguments)
    }
    kclass.prototype.init = function() {
        console.log('初始化方法')
    }
    return kclass
}

var obj = new _Class()



console.log('obj', new obj() === new obj())