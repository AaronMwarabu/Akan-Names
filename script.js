window.addEventListener("DOMContentLoaded",function(){
    console.log("Content loaded");
    let nameList = new Array();
    let dateForm = document.querySelector("#dateForm");
    let nameTbody = document.querySelector("#nameTbody");
    console.log("Form added",dateForm);
    // console.log("Table body",nameTbody);

    dateForm.addEventListener("submit", function(event){
        event.preventDefault();
        console.log("Submitted")

        const gender = document.querySelector("#gender").value;
        // console.log("gender",gender);

        let dateInput = document.querySelector("#date").value;
        let calendarDate = new Date(dateInput);
        let birthday = calendarDate.getDay();
        // dateInput = dobDay;
        // console.log(dobDay);

        let nameRow = document.createElement("tr");
        // let nameData = document.createElement("td");

        // nameRow.appendChild(nameData);
        let namesData = document.createElement("td");
        nameTbody.appendChild(nameRow);

        let male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
        let female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

        if (gender == "Male") { 
            nameList.push(male[birthday]);
            displayName();
        } else if(gender == "Female") {
            nameList.push(female[birthday]);
            displayName();
        } else { 
            alert("Error!Please select your gender");
        }

        function displayName() { 
            nameList.forEach(function (name) {
                namesData.textContent = name;
                nameRow.appendChild(namesData);
                nameTbody.appendChild(nameRow);
            });
        }
    });
});