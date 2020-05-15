import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/agate.css'

hljs.registerLanguage('javascript', javascript);

// 将页面中所有代码设置高亮
const highlightCode = () => {
    const preEl = document.querySelectorAll('pre')
  
    preEl.forEach((el) => {
      hljs.highlightBlock(el)
    })
  }

  highlightCode()  