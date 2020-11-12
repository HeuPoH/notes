import {outputNoteForm} from "../views/viewNote.js";
import {selectNoteData, updateNoteData} from "../models/modelNote.js";
import {validateInput} from "../extensions/validateInput.js";

export {updateNote};

/**
 * Обновить заметку
 * @param id int id заметки
 */
function updateNote(id) {
    if(id) {
        const promise = selectNoteData(id);

        promise.then((data) => {
            outputNoteForm(data);

            const title = document.getElementById('title');
            const text = document.getElementById('text');

            title.addEventListener('input', function() {validateInput(this, 'title-error')});
            text.addEventListener('input', function () {validateInput(this, 'text-error')});

            document.getElementById('button-save').addEventListener('click', () => updateNoteData(id, title, text));
        }).catch((e) => e.message);
    }
}