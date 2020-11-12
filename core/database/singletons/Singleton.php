<?php
/**
 * Class Singleton
 */
final class Singleton
{
    static public $dataBase;

    static public function getConnection() {
        if(empty(self::$dataBase)) {
            $settings = parse_ini_file('settings.ini', true);
            $opt  = array(
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => TRUE,
            );
            self::$dataBase = new PDO("mysql:host=$settings[host];dbname=$settings[database]",
                $settings['user'], $settings['password'], $opt);
        }
        return self::$dataBase;
    }

    private function __construct(){    }
    private function __clone(){    }
    private function __wakeup(){    }
}
