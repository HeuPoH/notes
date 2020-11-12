export {outputNotes, outputNoData}

/**
 * Вывести в DOM заметки
 * @param dataNotes object данные о заметках
 */
function outputNotes(dataNotes) {
    const notesElement = document.getElementById('notes');

    dataNotes.forEach(item => {
        notesElement.insertAdjacentHTML('beforeend', getNotesHTML(item));
    });
}

/**
 * Получить html каждой заметки
 * @param dataNotes
 * @returns {string}
 */
function getNotesHTML(dataNotes) {
    return `<div class="card-body">
        <h5 class="card-title">${dataNotes['title']}</h5>
        <p class="card-text">${dataNotes['text']}</p>
        <button type="button" name="button-more" class="btn-sm btn-secondary" value="${dataNotes['id']}">Подробнее</button>
        <span class="card-date">${dataNotes['date']}</span>
        </div>`;
}

/**
 * Вывести, если нет заметок
 */
function outputNoData() {
    document.getElementById('notes').insertAdjacentHTML('beforeend', getNotesHTML({'title': 'Нет данных', 'text': 'Нет данных'}));
    document.getElementById('button-add').style.display = 'block';
}