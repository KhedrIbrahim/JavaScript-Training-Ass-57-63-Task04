function checkStatus(a , b , c) {
    // Your Code Here
    let Name , age, staus;
    if (typeof a === "string") {
        userName = a;
    }else if (typeof a === "number") {
        age = a;
    }else if (a === true){
        status = a;
    }

    if (typeof b === "string") {
        userName = b;
    }else if (typeof b === "number") {
        age = b;
    }else if (b === true){
        status = b;
    }

    if (typeof c === "string") {
        userName = c;
    }else if (typeof c === "number") {
        age = c;
    }else if (c === true){
        status = c;
    }
    if (a === true || b === true || c === true) {
        console.log(`Hello ${userName}, Your Age Is ${age}, You Are Available For Hire`);
    }else {
        console.log(`Hello ${userName}, Your Age Is ${age}, You Are "Not" Available For Hire`);
    }
}


// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"