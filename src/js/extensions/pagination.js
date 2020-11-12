export {pagination};

/**
 * Пагинация
 * @param countItems int количество всех элементов
 * @param itemsOnPage int количество элементов на странице
 * @param currentPage int текущая страница
 * @returns {string}
 */
function pagination(countItems, itemsOnPage, currentPage) {
    const pages = Math.round(countItems / itemsOnPage);
    let pagesHtml = ``;

    for(let i = 1; i <= pages; i++) {
        let pageLinkActive = (i === +currentPage)?'page-link page-link-active':'page-link';
        pagesHtml += `<li class="page-item"><a class="${pageLinkActive}" href="?page=${i}" id="${i}">${i}</a></li>`;
    }
    return pagesHtml;
}