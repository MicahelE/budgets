
function myFunction() {
    let income = document.getElementById("income").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let status = document.getElementById("status").value;
    let dependents = document.getElementById("dependents").value;
    let person = document.getElementById("person").value;
    let span = document.getElementById("output");
    if (income == "") {
        span.innerText="No input was given"
    }

    if (income>= 1 && age <=18 ) {
        let expense = income/2;
    span.innerText= ` Spend  ₦${expense}  save  ₦${expense}` ;
    }
    else if (income>= 1 && gender =='Male') {
        let expense = income* 0.6;
        let remain = income-saving;
        span.innerText= ` Spend  ₦${expense}  save  ₦${remain}` ;
    }
    else if (income>= 1 && gender =='Female') {
        let expense = income* 0.4;
        let remain = income-saving;
        span.innerText= ` Spend  ₦${expense}  save  ₦${remain}` ;
    }

    else if (income>= 1 && dependents >= 1 ) {
        let expense = income -(dependents* person);
        let remain = income-saving;
        span.innerText= ` Spend  ₦${expense}  save  ₦${remain}` ;
    }

   
  }