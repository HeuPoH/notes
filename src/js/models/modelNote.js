export {deleteNoteData, selectNoteData, insertNoteData, updateNoteData};
import {getData} from "../extensions/JSON.js";

/**
 * Получить данные о заметке
 * @param id int id заметки
 * @returns {Promise}
 */
function selectNoteData(id) {
    return getData({'action': 'getSingleItem', 'id': id});
}

/**
 * Удалить заметку
 * @param id int id заметки
 */
function deleteNoteData(id) {
    const promise = getData({'action': 'deleteItem', 'id': id});
    promise.then(() => window.location = 'index.html');
}

/**
 * Добавить новую заметку в БД
 * @param title string
 * @param text string
 */
function insertNoteData(title, text) {
    if(title.validity.valid && text.validity.valid) {
        const date = new Date();
        const dateString = date.getHours() + ':' + date.getMinutes() + ' ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
        const promise = getData({'action': 'addItem', 'title': title.value, 'text': text.value, 'date': dateString});
        promise.then(() => window.location = 'index.html');
    }
}

/**
 * Обновить заметку
 * @param id int
 * @param title string
 * @param text string
 */
function updateNoteData(id, title, text) {
    if(title.validity.valid && text.validity.valid) {
        const promise = getData({'action': 'updateItem', 'id': id, 'title': title.value, 'text': text.value});
        promise.then(() => window.location = '?action=show&id=' + id).catch((e) => e.message);
    }
}