<?php

    class Database {
        private $host;
        private $databaseName;
        private $username;
        private $password;

        public function getConnection() {
            // Database account DEVELOPMENT
            define("DB_NAME", "dbtfynrtidq7vl");

            // Database account PRODUCTION
            // define("DB_NAME", "dbvlpxnjlkk6og");

            define("DB_USERNAME", "ugkdcdjzshbtd");
            define("DB_PASSWORD", "lbtkc2rhggvt");

            $host = "localhost";
            $databaseName = DB_NAME;
            $username = DB_USERNAME;
            $password = DB_PASSWORD;
            $mysqli = new mysqli($host, $username, $password, $databaseName);
            // $mysqli = new mysqli("localhost", "frontli5_fbs", "6o~q%}%U^&67", "frontli5_fbs_ems");
            if($mysqli->connect_error) {
                $mysqli = null;
            }
            return $mysqli;
        }
    }
