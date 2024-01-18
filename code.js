const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const yearOutput = document.getElementById('calculated-years');
const monthOutput = document.getElementById('calculated-months');
const dayOutput = document.getElementById('calculated-days');
const calculationBtn = document.querySelector('button');

calculationBtn.addEventListener('click', function() {
    validateForm();
    calculate();
});

function calculate() {

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (dayInput.value && monthInput.value && yearInput.value) {
        let birthDay = parseInt(dayInput.value);
        let birthMonth = parseInt(monthInput.value);
        let birthYear = parseInt(yearInput.value);

        let ageYear = year - birthYear;
        let ageMonth, ageDay;

        if (month >= birthMonth) {
        ageMonth = month - birthMonth;
        ageDay = day - birthDay;
        } else {
        ageYear--;
        ageMonth = 12 + month - birthMonth;
        }
        if (day < birthDay) {
            ageMonth--;
            const daysInPreviousMonth = new Date(year, month - 2, 0).getDate();
            ageDay = daysInPreviousMonth + day - birthDay;
        } else {
            ageDay = day - birthDay;
        }

        dayOutput.innerText = ageDay;
        monthOutput.innerText = ageMonth;
        yearOutput.innerText = ageYear;
    }
};

function validateForm() {
  
    if (dayInput.value === "") {
        document.getElementById("day").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("day-input").style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("day-error").innerHTML = "This field is required";
    } else {
        document.getElementById("day").style.color = "";
        document.getElementById("day-input").style.borderColor = "";
        document.getElementById("day-error").innerHTML = "";
    }

    if (monthInput.value === "") {
        document.getElementById("month").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("month-input").style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("month-error").innerHTML = "This field is required";
    } else {
        document.getElementById("month").style.color = "";
        document.getElementById("month-input").style.borderColor = "";
        document.getElementById("month-error").innerHTML = "";
    }

    if (yearInput.value === "") {
        document.getElementById("year").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("year-input").style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("year-error").innerHTML = "This field is required";
    } else {
        document.getElementById("year").style.color = "";
        document.getElementById("year-input").style.borderColor = "";
        document.getElementById("year-error").innerHTML = "";
    }

    let day = parseInt(dayInput.value);
    let month = parseInt(monthInput.value);
    let year = parseInt(yearInput.value);

    if (day === NaN || day < 1 || day > 31) {
        document.getElementById("day").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("day-input").style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("day-error").innerHTML = "Must be a valid day";
    }

    if (month === NaN || month < 1 || month > 12) {
        document.getElementById("month").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("month-input").style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("month-error").innerHTML = "Must be a valid month";
    }

    let currentYear = new Date().getFullYear();

    if ( year === NaN || year > currentYear) {
        document.getElementById("year").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("year-input").style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("year-error").innerHTML = "Must be in the past";

    }
};
