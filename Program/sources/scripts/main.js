document.getElementById('form-search').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    alert('Форма не отправлена!');
});

function showAlertError(pageName){
    alert("Раздел '" + pageName + "' Недоступен!")
}
