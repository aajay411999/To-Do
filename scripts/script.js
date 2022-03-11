(async function() {


    let inputBox = document.getElementById("username");
    let taskList = document.getElementsByClassName("main-block")[0];
    let taskitemClassName = "task";


    // 
    inputBox.addEventListener("change",function(){
        let data = readUserInput();
        addTaskToTaskList(data);
    });

    function readUserInput(){
        let inputBox = document.getElementById("username");
        let input = inputBox.value;
        inputBox.value = "";
        return input;
    }

    function addTaskToTaskList(data){
        if ( data !== '') {
            let chk = document.createElement('input');  // CREATE CHECK BOX.
            chk.setAttribute('type', 'checkbox');       // SPECIFY THE TYPE OF ELEMENT.
            chk.setAttribute('id', data);     // SET UNIQUE ID.
            chk.setAttribute('value', data);
            chk.setAttribute('name', 'tasks');
            chk.setAttribute('class',taskitemClassName);

            let lbl = document.createElement('label');  // CREATE LABEL.
            lbl.setAttribute('for', data);
            lbl.setAttribute('class',taskitemClassName);

            // CREATE A TEXT NODE AND APPEND IT TO THE LABEL.
            lbl.appendChild(document.createTextNode(data));

            let taskOption = document.createElement('div');
            taskOption.setAttribute('class','task-option');


            // APPEND THE NEWLY CREATED CHECKBOX AND LABEL TO THE <p> ELEMENT.
            taskOption.appendChild(chk);
            taskOption.appendChild(lbl);
            taskList.appendChild(taskOption);
    }

}






})()