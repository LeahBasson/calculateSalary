function isLeapYear(date) {
    let year = new Date(date).getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

let dateInput = document.querySelector('#dob');

dateInput.addEventListener('input', () => {
    let dateInput = document.querySelector('#dob');
console.log(dateInput);
    if (dateInput.value != "") {
        document.getElementById("date_error").innerHTML = "";
        let leapYearCheck = isLeapYear(dateInput.value);
        // Change the background color of the input field based on whether it's a leap year
        if (leapYearCheck) {
            dateInput.style.backgroundColor = "lightgreen"; 
        } else {
            dateInput.style.backgroundColor = "purple";
        }
    }
});

document.querySelector('[calculateSalary]').addEventListener('click' , ()=>{
   
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let age = document.querySelector('#age').value;
    let date = document.querySelector('#dob').value;
    let displayElement = document.querySelector('[salary]').value;
    
    
    let regex = /^[0-9]+$/;

    if (firstName ==  null || firstName == "" || regex.test(firstName)){
        nameError = "This field is necessary.";
        document.getElementById("name_error").innerHTML = nameError;
        return false;
    }

    else if(lastName == null || lastName == "" || regex.test(lastName)){
        lastNameError = "This field is necessary.";
        document.getElementById("lastName_error").innerHTML = lastNameError;
        return false;
    }

    else if(age == null || age == ""){
        ageError = "This field is necessary.";
        document.getElementById("age_error").innerHTML = ageError;
        return false;
    }

    else if(date == null || date == ""){
        dateError = "This field is necessary.";
        document.getElementById("date_error").innerHTML = dateError;
        return false;
    }

    else{
        document.getElementById("name_error").innerHTML = "";
        document.getElementById("lastName_error").innerHTML = "";
        document.getElementById("age_error").innerHTML = "";
        document.getElementById("date_error").innerHTML = "";
    }

    let taxRate = 18;
    let hours = +document.querySelector('[hours]').value;
    let rate = +document.querySelector('[rate]').value; 
    let result = hours * rate;
    let tax = result * (taxRate/100);
    let salary = result - tax;

    let type = document.querySelector('input[name="option"]:checked').value;
    
    document.querySelector('[salary]').textContent = (`Hello Dear ${type} ${firstName} ${lastName}, 
    We hope you're doing well, here's your salary after deduction: R${salary} , Thank you` );
})

function checkNumber() {
    var value = this.value;
    if (value > 0) {
        this.className = 'positive';
    } else if (value < 0) {
        this.className = 'negative';
    } else {
        this.className = '';
    }
}

document.getElementById('numberInput1').addEventListener('input', checkNumber);
document.getElementById('numberInput2').addEventListener('input', checkNumber);

