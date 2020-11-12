'use strict';

import {selectNotesData} from "../models/modelMain.js";
import {outputNotes, outputNoData} from "../views/viewMain.js";
import {pagination} from "../extensions/pagination.js";
import {COUNT_ITEMS_ON_PAGE} from "../../settings.js";

const currentPage = (document.URL.match(/page=([0-9]*)/))?document.URL.match(/page=([0-9]*)/)[1]:1;
const promise = selectNotesData(COUNT_ITEMS_ON_PAGE, currentPage);

promise.then(data => {
    outputNotes(data);
    document.getElementById('notes').addEventListener('click',event => (event.target.name === 'button-more')?
        window.location = 'note.html?action=show&id=' + event.target.value:false);
    document.getElementById('button-add').style.display = 'block';
    document.getElementById('total-notes').innerText = `Всего: ${data[0]['count']}`;

    document.getElementById('pagination').innerHTML = pagination(data[0]['count'], COUNT_ITEMS_ON_PAGE, currentPage);
}).catch(() => outputNoData());
