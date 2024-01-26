function calculateAge() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var today = new Date();

    var ageInMilliseconds = today - birthdate;

    var years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));//rounds a number DOWN to the nearest integer, 
                                                                                // if necessary, and returns the result
    var months = Math.floor((ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    var days = Math.floor((ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    document.getElementById("result").innerHTML = "Your Age: " + years + " years, " + months + " months, " + days + " days";
}