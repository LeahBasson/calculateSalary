
document.querySelector('[calculateSalary]').addEventListener('click' , ()=>{
    let hours = +document.querySelector('[hours]').value;
    let rate = +document.querySelector('[rate]').value;
   

    let firstName = document.querySelector('[firstName]').value;

    if (firstName == ""){
        nameError = "This field is necessary.";
        document.getElementById("name_error").innerHTML = nameError;
        return false;
    }

    let salary = hours * rate;
    document.querySelector('[salary]').textContent = (`Your Salary is: ${salary}`);
})

