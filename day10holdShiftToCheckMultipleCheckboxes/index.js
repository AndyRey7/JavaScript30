const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    //check to see if the shift key is pressed
    // And check hat are checking it
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        //loop over every checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log("in between");
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;

}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
