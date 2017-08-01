// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const BrowserWindow = require('electron').remote.BrowserWindow
const newWindowBtn = document.getElementById('frameless-window')

const path = require('path')

newWindowBtn.addEventListener('click', function(event) {
    const modalPath = path.join('file://', __dirname, '../../sections/windows/modal.html')
    let win = new BrowserWindow({
        frame: false,
        transparent: true,
        frame: false
    })
    win.on('close', function() { win = null })
    win.loadURL(modalPath)
    win.show()
})