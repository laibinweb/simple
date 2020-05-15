import '@/pages/practice/common/highlight'
import './css/index.scss'

function $(id) {
    return document.getElementById(id)
}

$('search-submit').onclick = function() {
    // 获取正则表达式
    var pattern = $('pattern').value
    var reg = new RegExp(pattern, 'g')

    // 获取被搜索的文本
    var searchString = $('incoming').value

    var matchArray,
        resultString = '<pre>',
        first = 0,
        last = 0
    // 找到每一个匹配
    while((matchArray = reg.exec(searchString))) {
        last = matchArray.index
        // 获取所有匹配的字符串, 将其连接起来
        resultString += searchString.substring(first, last)
        resultString += '<span class="found">'+ matchArray[0] +'</span>'
        first = reg.lastIndex
    }
    
    // 完成字符串
    resultString += searchString.substring(first, searchString.length)
    resultString += '</pre>'

    $('search-result').innerHTML = resultString
}

