<?php
include_once 'database/Database.php';

if(isset($_POST)) {
    $data = json_decode(file_get_contents('php://input'), true);

    try {
        switch ($data['action']) {
            /**
             * Получить все заметки
             */
            case 'getAllItems':
                $result = Database::getAllData($data['countItemsOnPage'], $data['currentPage']);
                $result[0]['count'] = Database::selectCountNotes();
                for($i = 0; $i < count($result); $i++) {
                    $result[$i]['title'] = htmlspecialchars($result[$i]['title']);
                    $result[$i]['text'] = htmlspecialchars($result[$i]['text']);
                }
            break;

            /**
             * Получить одну заметку
             */
            case 'getSingleItem':
                $result = Database::getData($data['id']);
                $result['title'] = htmlspecialchars($result['title']);
                $result['text'] = htmlspecialchars($result['text']);
            break;

            /**
             * Удалить заметку
             */
            case 'deleteItem':
                Database::deleteData($data['id']);
                $result = ['answer' => 'Удалено'];
            break;

            /**
             * Добавить заметку
             */
            case 'addItem':
                if(mb_strlen($data['title']) > 3 && mb_strlen($data['title']) <= 50 && mb_strlen($data['text']) > 3 && mb_strlen($data['text']) <= 500) {
                    Database::addNote($data);
                    $result = ['answer' => 'Добавлено'];
                }
            break;

            /**
             * Обновить заметку
             */
            case 'updateItem':
                if(mb_strlen($data['title']) > 3 && mb_strlen($data['title']) <= 50 && mb_strlen($data['text']) > 3 && mb_strlen($data['text']) <= 500) {
                    Database::updateNote($data);
                    $result = ['answer' => 'Изменено'];
                }
            break;
        }

        echo json_encode($result);
    } catch (Exception $e) {
        echo json_encode(['title' => $e->getMessage(), 'text' => $e->getMessage()]);
    }
}