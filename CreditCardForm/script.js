document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('credit-card-form');
    const cardNumber = document.getElementById('card-number');
    const cardMonth = document.getElementById('card-month');
    const cardYear = document.getElementById('card-year');
    const cardCVC = document.getElementById('card-cvc');
    const cardHolder = document.getElementById('card-holder');
    const formErrors = document.getElementById('form-errors');
    const cardSuccess = document.getElementById('card-success');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic Validation
        if (
            !cardNumber.value ||
            !cardMonth.value ||
            !cardYear.value ||
            !cardCVC.value ||
            !cardHolder.value
        ) {
            formErrors.textContent = "Please complete all fields.";
            formErrors.style.display = "block";
            cardSuccess.style.display = "none";
        } else if (cardNumber.value.length < 16 || cardCVC.value.length !== 3) {
            formErrors.textContent = "Please enter valid card details.";
            formErrors.style.display = "block";
            cardSuccess.style.display = "none";
        } else {
            formErrors.style.display = "none";
            cardSuccess.style.display = "block";
        }
    });
});