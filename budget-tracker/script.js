let total = 0;

function addExp(){
    const desc_inp = document.getElementById("desc");
    const amt_inp = document.getElementById("amnt");
    const exp_list = document.getElementById("exp_list");
    const total_display = document.getElementById("total");

    const description = desc_inp.value;
    const amount = parseFloat(amt_inp.value);
    
    if(description && !isNaN (amount) && amount > 0){
        const list_item = document.createElement("li");
        list_item.textContent = `${description}: $${amount.toFixed(2)}`;
        exp_list.appendChild(list_item);
        total += amount;
        total_display.textContent = total.toFixed(2);

        // Clear the input fields
        desc_inp.value = '';
        amt_inp.value = '';
    }
     else {
        alert("Please enter a valid description and amount.");
    }


    
}