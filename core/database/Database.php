<?php
include_once 'singletons/Singleton.php';

class Database
{
    /**
     * Получить данные одной заметки
     * @param $id int id заметки
     * @return mixed везвращает объект с данными одной заметки
     * @throws Exception
     */
    static public function getData($id) {
        $pdo = Singleton::getConnection();
        $statement = $pdo->prepare("SELECT * FROM notes WHERE id=?");
        $statement->execute([$id]);

        if($statement->rowCount() === 0) {
            throw new Exception('Нет данных');
        }
        return $statement->fetch();
    }

    /**
     * Получить данные всех заметок
     * @param $countsOnPage
     * @param $currentPage
     * @return array возвращает массив с данными заметок
     * @throws Exception
     */
    static public function getAllData($countsOnPage, $currentPage) {
        $pdo = Singleton::getConnection();
        $start = intval($currentPage) * $countsOnPage - $countsOnPage;
        $statement = $pdo->query("SELECT id, title, date, CONCAT(LEFT(text, 200), '...') as text FROM notes ORDER BY id DESC LIMIT $start,$countsOnPage");

        if($statement->rowCount() === 0) {
            throw new Exception('Нет данных');
        }
        return $statement->fetchAll();
    }

    /**
     * Удалить заметку
     * @param $id int id заметки
     * @throws Exception
     */
    static public function deleteData($id) {
        $pdo = Singleton::getConnection();
        $statement = $pdo->prepare("DELETE FROM notes WHERE id=?");

        if(!$statement->execute([$id])) {
            throw new Exception('Не удалось найти запись');
        }
    }

    /**
     * Добавить новую заметку в БД
     * @param $object array массив данных заметки
     * @throws Exception
     */
    static  public function addNote($object) {
        $pdo = Singleton::getConnection();
        $statement = $pdo->prepare("INSERT INTO notes (title, text, date) VALUES (?, ?, ?)");

        if(!$statement->execute([$object['title'], $object['text'], $object['date']])) {
            throw new Exception('Не удалось добаить запись');
        }
    }

    /**
     * Обновить данные заметки
     * @param $object array массив данных заметки
     * @throws Exception
     */
    static public function updateNote($object) {
        $pdo = Singleton::getConnection();
        $statement = $pdo->prepare("UPDATE notes SET title=?, text=? WHERE id=?");

        if(!$statement->execute([$object['title'], $object['text'], $object['id']])) {
            throw new Exception('Не удалось обновить запись');
        }
    }

    /**
     * Вернуть количество заметок
     * @return mixed
     */
    static public function selectCountNotes() {
        $pdo = Singleton::getConnection();
        $statement = $pdo->query("SELECT COUNT(id) FROM notes");

        return $statement->fetchColumn();
    }
}