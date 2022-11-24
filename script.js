
function myFunction() {
    let income = document.getElementById("income").value;
    // let age = document.getElementById("age");
    // let gender = document.getElementById("gender");
    // let status = document.getElementById("status");
    // let dependents = document.getElementById("dependents");
    // let persons = document.getElementById("persons");
    let span = document.getElementById("output");
    if (income == "") {
        span.innerText="No input was given"
    }

    if (income>= 1) {
        span.innerText="This is good"
    }
  }