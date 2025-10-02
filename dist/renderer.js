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
    const res =await window.versions.formSubmit(formObject);
    if(res==1){
        addBox(formObject)
    }
    console.log("daiwdw")
})

function addBox(data){
    const boxHtml = createHtmlPage(data);
    const boxContainer = document.getElementById('box');
    if (boxContainer) {
        boxContainer.innerHTML += boxHtml;
    }
    return 0;
}

function createHtmlPage(data) {
    const name = data && data.hobbyName ? data.hobbyName : 'Unnamed';
    return `
        <div class="box" style="
            display: inline-block;
            padding: 15px 25px;
            border: 2px solid #333;
            border-radius: 8px;
            background-color: #f0f0f0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            min-width: 100px;
            margin: 5px;
        ">${name}</div>
    `;
}