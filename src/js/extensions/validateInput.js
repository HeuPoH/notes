export {validateInput};

/**
 * @param element object элемент который будет подвергаться проверке
 * @param idElemError string id элемента для вывода ошибки
 */
function validateInput(element, idElemError) {
    const elemError = document.getElementById(idElemError);
    (element.validity.valid)?elemError.innerText = '':elemError.innerText = 'Ошибка ввода';
}