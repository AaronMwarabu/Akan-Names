window.addEventListener("DOMContentLoaded", function() {
    console.log("document loaded");
    let nameList = new Array();
    const dateForm = document.querySelector("#dateForm");
    console.log("Form added",dateForm);


    dateForm.addEventListener("submit", function(submitEvent) {
        submitEvent.preventDefault();
        console.log("submitted");

        let gender = document.querySelector("#Gender").value;

        let dates = document.querySelector("#date").value;
        let calendarDate = new Date(dates);
        let birthday = calendarDate.getDay();


        let nameRow = document.createElement("tr");
        let namesData = document.createElement("td");
        nameTbody.appendChild(nameRow);
        
        let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        if (gender == "male") {
            nameList.push(maleGender[dobDay]);
            displayName();
        } else if (gender == "female") {
            nameList.push(femaleGender[dobDay]);
            displayName();
        } else {
            alert("error input your gender");
        }

        function displayName() { 
            nameList.forEach(function (name) {
                namesData.textContent = name;
                nameRow.appendChild(namesData);
                nameTbody.appendChild(nameRow);
            });
        }
    })
})

