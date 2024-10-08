let totalExpense = 0;

function addExpense() {
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
    
    if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter valid expense details');
        return;
    }

    // Create a new expense item
    const expenseList = document.getElementById('expense-list');
    const expenseItem = document.createElement('div');
    expenseItem.className = 'expense-item';
    expenseItem.innerHTML = `
        <span>${expenseName}: $${expenseAmount.toFixed(2)}</span>
        <button onclick="deleteExpense(this, ${expenseAmount})">Delete</button>
    `;

    expenseList.appendChild(expenseItem);

    // Update the total expense
    totalExpense += expenseAmount;
    document.getElementById('total-expense').textContent = totalExpense.toFixed(2);

    // Clear the input fields
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
}

function deleteExpense(element, amount) {
    // Remove the expense from the list
    const expenseItem = element.parentElement;
    expenseItem.remove();

    // Update the total expense
    totalExpense -= amount;
    document.getElementById('total-expense').textContent = totalExpense.toFixed(2);
}