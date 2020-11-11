<?php 
    include('connect.php');
    include('functions.php');

    // if we need one piece. run getOne function 

    // else get all pieces

    if(isset ($_GET["id"])) {
        // this will get one item from that database. which ever one you clicked on and asked from
        $targetID = $_GET["id"];
        $result = getSingleUser($pdo, $targetID);

        return $result; 
    } else {
        //user must want to see all items in the database
        $allUsers = getAllUsers($pdo);

        return $allUsers;
    }