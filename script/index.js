let tasks = [];

function adding() {
    let taskList = {
        name: document.getElementById("tasks").value,
        completed: false
    };
    tasks.push(taskList)

    let toDoList = document.querySelector("#results");
    toDoList.innerHTML="";
    tasks.forEach((data) => {
        toDoList.innerHTML += 
        `
        <input type="checkbox">
        <p>${data.name}</p>

        `
    });
    
    stored()
}

function stored() {
    localStorage.setItem("data", results.innerHTML)
}

function dataRefresh() {
    results.innerHTML=localStorage.getItem("data")
}

// function sorting(){
//     document.querySelector(".results").innerHTML= tasks.sort()
// }