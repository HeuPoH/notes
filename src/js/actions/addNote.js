import {validateInput} from "../extensions/validateInput.js";
import {insertNoteData} from "../models/modelNote.js";
import {outputNoteForm} from "../views/viewNote.js";

export {addNote};

/**
 * Добавить заметку
 */
function addNote() {
    try {
        outputNoteForm();
        const title = document.getElementById('title');
        const text = document.getElementById('text');

        /**
         * Выводит ошибку в реал тайме если поля не проходят валидацию
         */
        title.addEventListener('input', function (){validateInput(this, 'title-error')});
        text.addEventListener('input', function (){validateInput(this, 'text-error')});

        document.getElementById('button-save').addEventListener('click', () => insertNoteData(title, text));
    } catch (e) {
        e.toString();
    }
}
