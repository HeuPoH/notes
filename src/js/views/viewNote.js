import * as settings from "../../settings.js";
export {outputNote, outputNoteForm};

/**
 * Добавить в DOM информацию о заметке
 * @param dataNote
 */
function outputNote(dataNote) {
    document.getElementById('note').innerHTML =
        `<div class="card-body">
            <h5 class="card-title" id="title">${dataNote['title']}</h5>
            <p class="card-text" id="text">${dataNote['text']}</p>
        </div>
        <span class="card-date" id="card-date">${dataNote['date']}</span>
        <button type="button" class="btn-sm btn-secondary" id="button-delete">Удалить</button>
        <button type="button" class="btn-sm btn-secondary" id="button-edit">Изменить</button>
        <button type="button" class="btn-sm btn-secondary" id="button-to-home" onclick="window.location = 'index.html'">Главная</button>
        `;
}

/**
 * Вывести форму для создания/редактирования заметки
 * dataNote по умолчанию используется для вывода пустой формы
 * @param dataNote object
 */
function outputNoteForm(dataNote = {'title': '', 'text': ''}) {
    document.getElementById('note').innerHTML = `
    <form id="form">
        <div class="mb-3">
            <label for="title" class="form-label">Введите название:</label>
            <input type="text" class="form-control" id="title" minlength="${settings.MIN_LENGTH_TITLE}" maxlength="${settings.MAX_LENGTH_TITLE}" value="${dataNote['title']}" required>
            <div class="error-input" id="title-error"></div>
            <label for="text">Введите текст:</label>
            <textarea class="form-control" id="text" minlength="${settings.MIN_LENGTH_TEXT}" maxlength="${settings.MAX_LENGTH_TEXT}" required>${dataNote['text']}</textarea>
            <div class="error-input" id="text-error"></div>
        </div>    
    </form>
    <button class="btn-sm btn-secondary" id="button-save">Отправить</button>
    <button class="btn-sm btn-secondary" id="button-to-home" onclick="window.location = 'index.html'">Главная</button>`;
}