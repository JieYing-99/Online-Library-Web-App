function validateForm() {

    var valid = true;

    /*Name*/
    if (document.feedbackForm.fname.value == "") {
        document.getElementById("name_error").innerHTML = "Please enter your name.";
        valid = false;
    } else {
        document.getElementById("name_error").innerHTML = "";
    }

    /*Age*/
    if (document.feedbackForm.age.value == "") {
        document.getElementById("age_error").innerHTML = "Please select your age.";
        valid = false;
    } else {
        document.getElementById("age_error").innerHTML = "";
    }

    /*Gender*/ 
    if (document.feedbackForm.gender.value == "") {
        document.getElementById("gender_error").innerHTML = "Please select your gender."
        valid = false;
    } else {
        document.getElementById("gender_error").innerHTML = "";
    }
    
    /*Marital status*/
    if (document.feedbackForm.marital_status.value == "") {
        document.getElementById("marital_status_error").innerHTML = "Please select your marital status.";
        valid = false;
    } else {
        document.getElementById("marital_status_error").innerHTML = "";
    }

    /*Nationality*/
    if (document.feedbackForm.nationality.value == "") {
        document.getElementById("nationality_error").innerHTML = "Please select your nationality.";
        valid = false;
    } else {
        document.getElementById("nationality_error").innerHTML = "";
    }
    
    /*Education level*/
    if (document.feedbackForm.education_level.value == "") {
        document.getElementById("education_level_error").innerHTML = "Please select your education level.";
        valid = false;
    } else {
        document.getElementById("education_level_error").innerHTML = "";
    }

    /*Employment status*/
    if (document.feedbackForm.employment_status.value == "") {
        document.getElementById("employment_status_error").innerHTML = "Please select your employment status.";
        valid = false;
    } else {
        document.getElementById("employment_status_error").innerHTML = "";
    }

    /*Q1*/
    if (!(document.feedbackForm.q1c1.checked || document.feedbackForm.q1c2.checked)) { 
        document.getElementById("q1_error").innerHTML = "This is a required field.";
        valid = false;
    } else {
        document.getElementById("q1_error").innerHTML = "";
    }

    /*Q2*/
    if (!(document.feedbackForm.q2c1.checked || document.feedbackForm.q2c2.checked
        || document.feedbackForm.q2c3.checked || document.feedbackForm.q2c4.checked
        || document.feedbackForm.q2c5.checked || document.feedbackForm.q2c6.checked)) { 
        document.getElementById("q2_error").innerHTML = "This is a required field.";
        valid = false;
    } else {
        document.getElementById("q2_error").innerHTML = "";
    }

    /*Q3*/
    if (!(document.feedbackForm.q3c1.checked || document.feedbackForm.q3c2.checked
        || document.feedbackForm.q3c3.checked || document.feedbackForm.q3c4.checked
        || document.feedbackForm.q3c5.checked)) { 
        document.getElementById("q3_error").innerHTML = "This is a required field.";
        valid = false;
    } else {
        document.getElementById("q3_error").innerHTML = "";
    }

    /*Q4*/
    if (!(document.feedbackForm.q4c1.checked || document.feedbackForm.q4c2.checked
        || document.feedbackForm.q4c3.checked || document.feedbackForm.q4c4.checked
        || document.feedbackForm.q4c5.checked)) { 
        document.getElementById("q4_error").innerHTML = "This is a required field.";
        valid = false;
    } else {
        document.getElementById("q4_error").innerHTML = "";
    }

    /*Q5*/
    if (!(document.feedbackForm.q5c1.checked || document.feedbackForm.q5c2.checked
        || document.feedbackForm.q5c3.checked || document.feedbackForm.q5c4.checked
        || document.feedbackForm.q5c5.checked)) { 
        document.getElementById("q5_error").innerHTML = "This is a required field.";
        valid = false;
    } else {
        document.getElementById("q5_error").innerHTML = "";
    }

    /*Q6*/
    if (!(document.feedbackForm.q6c1.checked || document.feedbackForm.q6c2.checked
        || document.feedbackForm.q6c3.checked || document.feedbackForm.q6c4.checked
        || document.feedbackForm.q6c5.checked)) { 
        document.getElementById("q6_error").innerHTML = "This is a required field.";
        valid = false;
    } else {
        document.getElementById("q6_error").innerHTML = "";
    }

    /*Q7*/
    if (!(document.feedbackForm.q7c1.checked || document.feedbackForm.q7c2.checked
        || document.feedbackForm.q7c3.checked || document.feedbackForm.q7c4.checked
        || document.feedbackForm.q7c5.checked || document.feedbackForm.q7c6.checked)) { 
        document.getElementById("q7_error").innerHTML = "This is a required field.";
        valid = false;
    } else {
        document.getElementById("q7_error").innerHTML = "";
    }

    /*Q8*/
    if (!(document.feedbackForm.q8c1.checked || document.feedbackForm.q8c2.checked
        || document.feedbackForm.q8c3.checked || document.feedbackForm.q8c4.checked
        || document.feedbackForm.q8c5.checked)) { 
        document.getElementById("q8_error").innerHTML = "This is a required field.";
        valid = false;
    } else {
        document.getElementById("q8_error").innerHTML = "";
    }

    
    if (valid == false) {
        alert("Please fill up the required field(s) in the form.");
    }
    else {
        return confirm("Are you sure you want to submit the form?\nClick 'OK' to confirm or 'Cancel' to return to the form.");
    }
    
    return valid;
}


function resetForm() {

    document.getElementById("name_error").innerHTML = "";
    document.getElementById("age_error").innerHTML = "";
    document.getElementById("gender_error").innerHTML = "";
    document.getElementById("marital_status_error").innerHTML = "";
    document.getElementById("nationality_error").innerHTML = "";
    document.getElementById("education_level_error").innerHTML = "";
    document.getElementById("employment_status_error").innerHTML = "";
    document.getElementById("q1_error").innerHTML = "";
    document.getElementById("q2_error").innerHTML = "";
    document.getElementById("q3_error").innerHTML = "";
    document.getElementById("q4_error").innerHTML = "";
    document.getElementById("q5_error").innerHTML = "";
    document.getElementById("q6_error").innerHTML = "";
    document.getElementById("q7_error").innerHTML = "";
    document.getElementById("q8_error").innerHTML = "";
    
    return confirm("Are you sure you want to reset the form?\nClick 'OK' to confirm or 'Cancel' to return to the form.");
}