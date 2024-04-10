function addTask() {
    var category = document.getElementById("category").value;
    var subcategory = document.getElementById("subcategory").value;
    var duration = document.getElementById("duration").value;
    var task = document.getElementById("task").value;
    var tableBody = document.getElementById("taskBody");
    var newRow = tableBody.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);    
    var cell5 = newRow.insertCell(4);
    cell1.innerHTML = category;
    cell2.innerHTML = subcategory;
    cell3.innerHTML = duration;
    cell4.innerHTML = task;
    cell5.innerHTML = '<button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>';
        
    document.getElementById("taskForm").reset();
    }

    function editTask(row) {
        var cells = row.parentNode.parentNode.cells;
        var category = cells[0].innerHTML;
        var subcategory = cells[1].innerHTML;
        var duration = cells[2].innerHTML;
        var task = cells[3].innerHTML;

        document.getElementById("category").value = category;
        document.getElementById("subcategory").value = subcategory;
        document.getElementById("duration").value = duration;
        document.getElementById("task").value = task;

        row.parentNode.parentNode.remove();
    }

    function deleteTask(row) {
        row.parentNode.parentNode.remove();
    }
    var users;
fetch('./userDetails.json')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    users=[...data.users];
    console.log(users)
})