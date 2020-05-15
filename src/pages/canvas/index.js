import '@/pages/canvas/css/canvas'

var cnv = document.getElementById('canvas')
var cxt = cnv.getContext('2d')
// Z字
cxt.moveTo(50, 50)
cxt.lineTo(100, 50)
cxt.lineTo(50, 100)
cxt.lineTo(100, 100)
cxt.stroke()

// 直角三角形
cxt.moveTo(150, 50)
cxt.lineTo(150, 100)
cxt.lineTo(200, 100)
cxt.lineTo(150, 50)
cxt.stroke()

// 描边矩形
cxt.strokeStyle = 'lightblue'
cxt.strokeRect(250, 50, 50, 50)

// 填充矩形
cxt.fillStyle = 'red'
cxt.fillRect(350, 50, 50, 50)

// 填充描边矩形
cxt.fillStyle = '#ffe8e8'
cxt.fillRect(450, 50, 50, 50)
cxt.strokeStyle = 'red'
cxt.strokeRect(450, 50, 50, 50)

cxt.fillStyle = 'lightblue'
cxt.fillRect(550, 50, 50, 50)
cxt.fillStyle = '#fff'
cxt.fillRect(575, 75, 25, 25)

// 清空矩形
cxt.fillStyle = 'red'
cxt.fillRect(650, 50, 50, 50)
cxt.clearRect(660, 60, 30, 30)