window.addEventListener("DOMContentLoaded", function() {
    console.log("document loaded");

    let dateForm = document.querySelector("#dateForm");
    console.log("this is our form", dateForm);

    dateForm.addEventListener("submit", function(submitEvent) {
        submitEvent.preventDefault();
        console.log("submitted");

        let gender = document.querySelector("#Gender").value;

        let dates = document.querySelector("#date").value;
        let calendarDate = new Date(dates);
        let birthday = calendarDate.getDay();
        
        let male = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        if (gender == "male") {
            alert(male[birthday]);
        } else if (gender == "female") {
            alert(female[birthday]);
        } else {
            alert("error input your gender");
        }
    })
})

