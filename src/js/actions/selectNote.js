import {deleteNoteData, selectNoteData} from "../models/modelNote.js";
import {outputNote} from "../views/viewNote.js";

export {selectNote};

/**
 * Получить заметку
 * @param id
 */
function selectNote(id) {
    if(id) {
        const promise = selectNoteData(id);

        promise.then(data => {
            outputNote(data);
            document.getElementById('button-delete').addEventListener('click', () => deleteNoteData(data['id']));
            document.getElementById('button-edit').addEventListener('click', () => window.location = '?action=edit&id=' + data['id']);
        }).catch(error => error.message);
    }
}
