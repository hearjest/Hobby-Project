const { ipcMain } = require('electron')
const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')
const mysql=require('mysql2')
require('dotenv').config();
let connection;

try{
  console.log("SNFOIESNOFISNEOFNSFINE")
  connection = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DATABASE,
    authPlugins: {
      mysql_clear_password: () => () => Buffer.from(process.env.DB_PASSWORD + '\0')
    }
  })
  connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }
        console.log('Connected to MySQL database!');
    })
  console.log("afmekfefefef")
}catch(error){
  console.error('Database setup error:', error);
}


let win;
const createWindow = () => {
  win = new BrowserWindow({
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
  ipcMain.handle('dialog:makeWindow',boxWindow);
})

async function handleSubmission(event,data){
  console.log(data)
  console.log("bruh")
  const links = JSON.stringify([
    {
      "title": "Motivation Video 1",
      "url": "https://www.youtube.com/watch?v=example1",
      "type": "video"
    },
    {
      "title": "Inspirational Article",
      "url": "https://example.com/article",
      "type": "article"
    },
    {
      "title": "Goal Tracker",
      "url": "https://example.com/tracker",
      "type": "tool"
    }
  ]);
  try {
    const result = await new Promise((resolve, reject) => {
      connection.query('INSERT INTO boards (name, links) VALUES (?, ?)', [data.hobbyName || "test", links], (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
    console.log('Database insert successful:', result);
    return 1;
  } catch (error) {
    console.error('Database insert error:', error);
    return 0;
  }
}

async function retrieveBoards(){
  //connect to database, select all user boards (probably just an array)
  //retrieve local files, and online ones (for each board)
  //try catch pattern
  
  return 0;
}

async function boxWindow(){
  //get db thingse
  //retrieveBoards
  let win2 = new BrowserWindow({
    parent:win,
    modal:true,
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win2.loadFile('test.html')
}