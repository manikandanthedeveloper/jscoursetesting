let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculateTotalAmount() {
    let groceryOne = document.getElementById('grocery1').value;
    let groceryTwo = document.getElementById('grocery2').value;
    let groceryThree = document.getElementById('grocery3').value;
    let totalAmount = document.getElementById('total-amount');
    let total = parseFloat(groceryOne) + parseFloat(groceryTwo) + parseFloat(groceryThree);
    totalAmount.innerHTML = total.toFixed(2);
}