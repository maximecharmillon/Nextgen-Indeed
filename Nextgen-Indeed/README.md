# Nextgen-Indeed
First Epitech project, create the new Indeed

1. How to run code
    -copy the directory Nextgen-Indeed in the serveur (/var/www/html)
        (copy the following command in the terminal: cp -r Nextgen-Indeed /var/www/html)

2. How work the code
    1) The MVC :
        - A directory View who contain a file "user.js" who make fetch's request to a "Cuser.php" file and a "Vannonce.js" who make fetch's request to a "Cannonce.php" file.
        - The file "Vannonce.js" also display the advertising line 168.
        - A directory Controler who contain file "Cuser.php" who require fonction from a "Muser.php" file and a "Cannonce.php" file who require fonction from a "Mannonce.php" file.
        - And a directory Model with a "Muser.php" file who contain fonctions. In their functions their is some SQL request ready to be write in MYSQL.
    Conclusion: When a file in the View directory receive an order, it make a special fetch request to a file in the Controller directory, the file in the Controller have a specific function for each special fetch request so for each special request, the file while require a function in a file in the Model directory to have a SQL request pre-filled and the file in the controller just have to fill with informations send by the file in the View and write the function in MYSQL.

    2) The CRUD:
        - each file have at minimum four differents functions/requests. Because we need to create, reed, update or delete data.  
        - To create data the fonctions/request contain "insert" or "create" in it name.
        - To reed data the fonctions/request contain "select" in it name.
        - To update data the fonctions/request contain update" or "modif" in it name.
        - To delete data the fonctions/request contain "delete" or "supp" in it name.


