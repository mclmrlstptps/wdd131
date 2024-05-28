window.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('productForm');
    form.addEventListener('submit', function (event) {
    });


    window.addEventListener('beforeunload', function (event) {
        var confirmationMessage = 'Are you sure you want to leave? Your changes may not be saved.';
        event.returnValue = confirmationMessage;
        return confirmationMessage;
    });
});