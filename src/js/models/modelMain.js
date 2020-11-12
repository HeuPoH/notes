import {getData} from "../extensions/JSON.js";
export {selectNotesData};

/**
 * Получить данные о заметках
 * @param countItemsOnPage int количество элементов на странице
 * @param currentPage int текущая страница
 * @returns {|Promise|}
 */
function selectNotesData(countItemsOnPage, currentPage) {
    return getData({'action': 'getAllItems', 'countItemsOnPage': countItemsOnPage, 'currentPage': currentPage});
}