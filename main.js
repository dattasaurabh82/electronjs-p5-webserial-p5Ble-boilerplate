// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')


// Live reload module which watches `public` folder
// const _ = require('electron-reload')(__dirname + '/public')

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected
let mainWindow


function createWindow() {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 1080,
		height: 480,
		show: true,
		center: true,
		frame: true,
		resizable: true,
		alwaysOnTop: false,
		preload: path.join(app.getAppPath(), 'preload.js'),
		useContentSize: true // when false, width/height will set the size of the whole app, including frames. If true, innerWindow will be set instead, resulting in a bigger app window	
	})
	
	// Load the index.html of the app
    	mainWindow.loadURL(url.format({
        	pathname: path.join(__dirname, 'public', 'index.html'),
        	protocol: 'file:',
        	slashes: true
    	}))

	// Open the DevTools on start
    	// mainWindow.webContents.openDevTools("undock")
	
	// Emitted when the window is closed
    	mainWindow.on('closed', function() {
        	// Dereference the window object, usually you would store windows
        	// in an array if your app supports multi windows, this is the time
        	// when you should delete the corresponding element
        	mainWindow = null
   	 })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// **NOTE: Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	createWindow()

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
		// On OS X it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (mainWindow === null) {
			createWindow()
		}
	})
})


app.on('window-all-closed', () => {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
        	app.quit()
    	}
})



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
