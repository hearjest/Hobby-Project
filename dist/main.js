const { ipcMain } = require('electron')
const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('dummy.html')

  win.webContents.openDevTools()
  win.setAlwaysOnTop(true, 'screen-saver');

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.whenReady().then(()=>{
  console.log("ready!");
  ipcMain.handle('dialog:sendBoardData',handleSubmission);
})

async function handleSubmission(event,data){
  console.log(data)
  console.log("bruh")
  // Take info, upload to database, create a box tht opens up to the respective motivation board
  // try catch
  return 1;
  //app.quit();
}

async function retrieveBoards(){
  //connect to database, select all user boards (probably just an array)
  //retrieve local files, and online ones (for each board)
  //try catch pattern
  return 0;
}