const information = document.getElementById('info')
const form=document.getElementById('MakeMotivationBoard');
information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`
const parse=new DOMParser();
form.addEventListener('submit',async (event)=>{
    event.preventDefault();
    const data=new FormData(form);    
    const formObject = Object.fromEntries(data);
    const res =await window.versions.formSubmit(formObject);
    if(res==1){
        addBox(formObject)
    }
    console.log("daiwdw")
})

function addBox(data){
    const boxHtml = createHtmlBox(data);
    const boxContainer = document.getElementById('box');
    if (boxContainer) {
        boxContainer.append(boxHtml);
    }
    const boxButElement=document.getElementById(data.hobbyName)
    console.log("hi!!!",data.hobbyName)
    boxButElement.addEventListener('click',async ()=>{//give info as parameter
        await window.versions.makeWindow();
        //retrieve data, populate window
    })
    return 0;
}

function createHtmlBox(data) {
    const name = data && data.hobbyName ? data.hobbyName : 'Unnamed';
    const divi=document.createElement('div');
    divi.innerHTML= `
        <div class="box" id ="${data.hobbyName}" style="
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
    return divi;
}

