const inputfields = document.querySelector('.input-field')
const output = document.querySelector('.output')


let inputShow = true
async function TextEditor(element) {

    const newEditor = await ClassicEditor
    
    .create(element,{

        toolbar: ['heading', 'bold', 'italic', 'underline', 'bulletedList', 'numberedList', 'blockQuote'],

    })
   
        return newEditor;

}

let workExpDetails;

TextEditor(inputfields["workexp"]).then(nEditor=>{
    workExpDetails=nEditor
})

let Academic;

TextEditor(inputfields["acadenis"]).then(nEditor=>{
    Academic=nEditor
})


function toggle(){
    if(inputShow) {
        inputfields.style.display = "none"
        inputShow = false;
        output.innerHTML = `
        <div class="herro">
        <h1>${inputfields["name"].value}</h1>
        <h3>${inputfields["title"].value} </h3>
        </div>

        <div class = "main">

        <h2> Objective </h2>

        <p>  ${inputfields["objective"].value} </p>

        <h2> Skills </h2>
        <p> ${inputfields["skills"].value} </p>

        <h2> Achievements </h2>
        <p> ${inputfields["achievment"].value} </p>

        <h2> Contact </h2>
        <p> ${inputfields["contact"].value} </p>

        <div> 
        <h2> Work Exp </h2>
        <p> ${workExpDetails.getData()} </p>
        
        <h2> Academic details </h2>
        <p> ${Academic.getData()} </p>

        
        </div>

        </div>

        <div class="btn">
                <button onclick="print()"> Print </button>

            </div>`




    }
    else {
        inputfield.style.display = "block";
        inputShow= true
        output.innerHTML = ""


    }
}