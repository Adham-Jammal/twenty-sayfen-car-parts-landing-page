document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('booking-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const carType = document.querySelector('select[name="carType"]').value;
        const model = document.getElementById('model').value;
        const specifications = document.querySelector('select[name="Specifications"]').value;
        const manufacturingYear = document.querySelector('select[name="manufacturingYear"]').value;
        const newCheckBox = document.getElementById('new');
        const usedCheckBox = document.getElementById('used');
        const vinNo = document.getElementById('VinNo').value;
        const description = document.getElementById('description').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phonenumber = document.getElementById('phonenumber').value;
        const terms = document.getElementById('terms').checked;

        if (!carType || !model || !specifications || !manufacturingYear || (!newCheckBox.checked && !usedCheckBox.checked) || !vinNo || !description || !name || !email || !phonenumber || !terms) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please make sure to fill in all the information and accept the terms and conditions',
                confirmButtonText: 'OK'
            });
            return;
        }

        var templateParams = {
            carType: carType,
            model: model,
            specifications: specifications,
            manufacturingYear: manufacturingYear,
            newCheckBox: newCheckBox.checked,
            usedCheckBox: usedCheckBox.checked,
            vinNo: vinNo,
            description: description,
            name: name,
            phonenumber: phonenumber,
            email: email
        };
        emailjs.send('service_syupqnu', 'template_5j9m2jj', templateParams)
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Thank you for contacting us. We will get back to you as soon as possible!',
                });
                form.reset();
            })
            .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred while sending the information. Please try again.',
                });
            });
    });
});

(function () {
    emailjs.init('wNP4GhSKjfusHOz68');
})();
AOS.init();
