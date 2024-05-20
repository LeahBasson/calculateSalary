
document.querySelector('[calculateSalary]').addEventListener('click' , ()=>{
   
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let age = document.querySelector('#age').value;
    let date = document.querySelector('#dob').value;
    
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

    else if (date != null) {
        // If a date is entered, hide the error message
        document.getElementById("date_error").style.display = "none";
    }

   else{
    document.getElementById("name_error").innerHTML = "";
    document.getElementById("lastName_error").innerHTML = "";
    document.getElementById("age_error").innerHTML = "";
    document.getElementById("date_error").innerHTML = "";
   }


    let hours = +document.querySelector('[hours]').value;
    let rate = +document.querySelector('[rate]').value;

    let salary = hours * rate;
    document.querySelector('[salary]').textContent = (`Your Salary is: ${salary}`);
})

