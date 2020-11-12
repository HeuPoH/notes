import {getData} from "../extensions/JSON.js";
export {deleteNote};

/**
 * Удалить заметку
 * @param id int id аметки
 */
function deleteNote(id) {
    if(id) {
        const promise = getData({'type': 'deleteItem', 'id': id});
        promise.then(() => window.location = 'index.html');
    }
}