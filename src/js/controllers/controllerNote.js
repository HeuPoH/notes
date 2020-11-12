'use strict';
import {selectNote} from "../actions/selectNote.js";
import {deleteNote} from "../actions/deleteNote.js";
import {addNote} from "../actions/addNote.js";
import {updateNote} from "../actions/updateNote.js";

/**
 * Делегирование операций над заметками
 */
const url = document.URL;
const id = (url.match(/id=([0-9]*)/))?url.match(/id=([0-9]*)/)[1]:false;
const action = (url.match(/action=([a-z]*)/))?url.match(/action=([a-z]*)/)[1]:false;

switch (action) {
   case 'show':
       selectNote(id);
   break;

   case 'delete':
        deleteNote(id);
   break;

   case 'add':
       addNote();
   break;

   case 'edit':
       updateNote(id);
   break;

   default:
       window.location = 'index.html';
   break
}
