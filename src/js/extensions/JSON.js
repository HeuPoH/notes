export {getData};

/**
 * Отправка и получение данных с сервера с помощью JSON
 * @param object объект который должен иметь action, а так необходимые параметры
 * @returns {Promise}
 */
function getData(object) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();

        request.open('POST', '/core/main.php', true);
        request.setRequestHeader('Content-type', 'application/json');
        request.onload = function () {
            try {
                if(request.status === 200) {
                    resolve(JSON.parse(request.response));
                } else {
                    reject(request.statusText);
                }
            } catch (e) {
                e.message;
            }
        };

        request.onerror = function () {
            reject(request.statusText);
        };
        request.send(JSON.stringify(object));
    });
}