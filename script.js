function check_birthday() {
    let gender = document.querySelector("#Gender").value;

    let dates = document.querySelector("#date").value;
    let calendarDate = new dates(dates);
    let birthday = calendarDate.getDay();

    let male = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    
}