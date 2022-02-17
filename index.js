

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
let listItems = "";

inputBtn.addEventListener("click", function() {
    
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads();
    console.log(myLeads);
});

function renderLeads() {
    for(let i = 0; i<myLeads.length; i++) {

        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems;
}