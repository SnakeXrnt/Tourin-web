document.addEventListener('DOMContentLoaded', () => {
    // Get references to the checkbox element and the status display element
    const switchCheckbox = document.getElementById("mySwitch");
    const switchStatus = document.getElementById("switchStatus");

    // Add an event listener to the checkbox
    switchCheckbox.addEventListener("change", function() {
    if (switchCheckbox.checked) {
        // Checkbox is checked (switch is ON)
        switchStatus.textContent = "Search by keyword";
        // Add your code to handle the switch being ON
    } else {
        // Checkbox is not checked (switch is OFF)
        switchStatus.textContent = "Search by region";
        // Add your code to handle the switch being OFF
    }
    });

});