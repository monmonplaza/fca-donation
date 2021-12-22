<?php

    class Mode {
        public $app_id;
        public $app_mode;      
        public $app_datetime;

        public $connection;
        public $tblMode;

        public function __construct($db) {
            $this->connection = $db;
            $this->tblMode = "ftc_app_mode";
        }
       
        // read 
        public function readMode() {
            $sql = "select * from {$this->tblMode} "; 
            $sql .= "where app_id = 1 ";            
            
            $result = $this->connection->query($sql);
            return $result;
        } 

        // update
        public function update() {
            $sql = "update {$this->tblMode} set ";
            $sql .= "app_mode = '{$this->app_mode}', ";
            $sql .= "app_datetime = '{$this->app_datetime}' ";

            $sql .= "where app_id = '{$this->app_id}' ";
            $result = $this->connection->query($sql);
            $affected = $this->connection->affected_rows;

            if($affected > 0){
                return true;
            }else {
                return false;
            }
            
        }




    }