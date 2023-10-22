# Nextgen-Indeed
First Epitech project, create the new Indeed

_______________________________________________________________________________________________

## HTML Pages
In this part we created 6 pages :
- **acceuil.html**
- **create_annonces.html**
- **see_my_annonces.html**
- **Profile.html**
- **sign-in.html**
- **sign-up.html**

________________________________________________________________________________________________

*acceuil.html* and *see_my_annonces.html* are mostly to display th adverts.
*create_annonces* is to create an annonce if the user is a HR for exemple.
*Profile.html* display the user info and it can be modify.
*sign-in.html* and *sign-up.html* are to login or sign up.
We use the framework **Bootstrap**.

________________________________________________________________________________________________

For most of the pages we added small javascript script for a more dynamic page :
- **Apply.js** this sscript is for the pages *acceuil.html* and *see_my_annonces.html* for our job adverts
- **modify.js** this script is for the *Profile* page, the user will be able to modify is info.
- **salary.js**  this script is for the *create an annonces* page so that HR who is creating is advert can easly choose the salary with the boostrap range and the script display it.
# Back-end
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


