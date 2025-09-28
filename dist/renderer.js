const information = document.getElementById('info')
const form=document.getElementById('MakeMotivationBoard');
information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`

form.addEventListener('submit',async(event)=>{
    event.preventDefault();
    const data=new FormData(form);
    //do tbhgins
    // Method 1: Log each key-value pair
    for (let [key, value] of data.entries()) {
        console.log(key, value);
    }
    
    // Method 2: Convert to a regular object for easier viewing
    const formObject = Object.fromEntries(data);
    console.log(formObject)
    
    // Method 3: Get specific values
    
    //probably invoke something here
    await window.versions.formSubmit(formObject);
    console.log("daiwdw")
})