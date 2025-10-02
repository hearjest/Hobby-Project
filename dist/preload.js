const { ipcRenderer } = require('electron')
const { contextBridge } = require('electron/renderer')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  formSubmit:(data)=>ipcRenderer.invoke('dialog:sendBoardData',data),
  makeWindow:()=>ipcRenderer.invoke('dialog:makeWindow'),
})