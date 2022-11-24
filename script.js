
function myFunction() {
    let income = parseInt(document.getElementById("income").value);
    let age = parseInt(document.getElementById("age").value);
    let genders = document.getElementsByName('gender');
let gender_value;
for(let i = 0; i < genders.length; i++){
    if(genders[i].checked){
        gender_value = genders[i].value;
    }
}

    let statuses = document.getElementsByName('status');
    let status_value;
    for(let i = 0; i < statuses.length; i++){
        if(statuses[i].checked){
            status_value = statuses[i].value;
        }
    }
    let dependents = parseInt(document.getElementById("dependents").value);
    let person = parseInt(document.getElementById("person").value);
    let span = document.getElementById("output");
    if (income == "") {
        span.innerText="No input was given"
    }

    if (income== "" || age =="" || gender_value =="" || status_value =="" || dependents =="" || person =="" ) {
        alert("Fill all the fields"); 
    }
    else if (gender_value =="male" && status_value =="single" ) {
        let expense = income -(dependents* person);
        let save= income -expense;
        if (age<=30 && income < 20000) {
            span.innerText= `Look seriously into saving and upskilling You have to save  ₦${expense}  and spend  ₦${save}` ;  
        }
        else if (age>=30 && income < 20000) {
            span.innerText= `Look seriously into Stable source of income You have to save  ₦${expense}  and spend  ₦${save}` ;  
        }
        else if (age>=30 && income > 20000) {
            span.innerText= `Go and marry  ₦${expense}  and spend  ₦${save}` ;  
        }
        else if (age<=30 && income > 20000) {
            span.innerText= `Looking good Try and do investments You have to save  ₦${expense}  and spend  ₦${save}` ;  
        }
    }
    else if (gender_value =="female" && status_value =="single" ) {
        let expense = income -(dependents* person);
        let save= income -expense;
        if (age<=30 && income < 20000) {
            span.innerText= `Look seriously into saving and upskilling You have to save  ₦${expense}  and spend  ₦${save}` ;  
        }
        else if (age>=30 && income < 20000) {
            span.innerText= `Look seriously into Stable source of income You have to save  ₦${expense}  and spend  ₦${save}` ;  
        }
        else if (age>=30 && income > 20000) {
            span.innerText= `Go and marry You have to save  ₦${expense}  and spend  ₦${save}` ;  
        }
        else if (age<=30 && income > 20000) {
            span.innerText= `Looking good Try and do investments You have to save  ₦${expense}  and spend  ₦${save}` ;  
        }
    }
    else if (gender_value =="male" && status_value =="married" ) {
        let expense = income -(dependents* person);
        let save= income -expense;
        if (age<=30 && income < 20000) {
            span.innerText= `Look seriously into saving and upskilling, You have to save ₦${expense}  and spend ${save}` ;  
        }
        else if (age>=30 && income < 20000) {
            span.innerText= `Look seriously into Stable source of income You have to save ₦${expense}  and spend ${save}` ;  
        }
        else if (age>=30 && income > 20000) {
            span.innerText= `Go and marry  You have to save ₦${expense} and spend  ₦${save}` ;  
        }
        else if (age<=30 && income > 20000) {
            span.innerText= `Looking good Try and do investments, You have to save ₦${expense} and spend  ₦${save}` ;  
        }
    }

    else if (gender_value =="female" && status_value =="married" ) {
        let expense = income -(dependents* person);
        let save= income -expense;
        if (age<=30 && income < 20000) {
            span.innerText= `Look seriously into saving and upskilling,  You have to save ₦${expense} and spend  ₦${save}` ;  
        }
        else if (age>=30 && income < 20000) {
            span.innerText= `Look seriously into Stable source of income,  You have to save ₦${expense} and spend  ₦${save}` ;  
        }
        else if (age>=30 && income > 20000) {
            span.innerText= `Go and marry  You have to save ₦${expense} and spend  ₦${save}` ;  
        }
        else if (age<=30 && income > 20000) {
            span.innerText= `Looking good Try and do investments  You have to save ₦${expense} and spend  ₦${save}` ;  
        }
    }

    // else if (income>= 1 && dependents >= 1 ) {
    //     let expense = income -(dependents* person);
    //     let remain = income-saving;
    //     span.innerText= ` Spend  ₦${expense}  save  ₦${remain}` ;
    // }

   
  }