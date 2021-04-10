# Préparation des commandes

## I. Presentation
Nous avions pour but de créer une application web affin de permettre au  
employé de pouvoir interagire avec leur commandes à préparer restante.  
Pour chaque command, l'empoyee peut afficher les details de cette commande  
affin de pouvoir renseigner les produit préparer


-------------


## II. Outils utilisé
Pour réaliser ce projet, nous avons utilisé les outils suivant :  
* Le cadriciel [Ember JS](https://emberjs.com/)  
* Un server [XAMPP](https://www.apachefriends.org/fr/index.html)  
* Le gestionnaire de dépendances PHP [composer](https://getcomposer.org/)
* [Semantic ui](https://semantic-ui.com/) pour le style graphique de mon application


-------------
## III. Fonctionnement & Prise en main du site
Quand vous arriver sur le site, vous devez vous connecter avec vos identifiant d'employée.  
Une fois que vous êtes connecté, vous avez access a votre __board__ qui vous permet de choissir  
entre la gestion du stock ou les commands restantes.  
La page __Commandes__ vous donne access a toutes les commandes qu'il vous reste a préparer    
mais également a la liste des produits contenue dans cette command que vous devait aussi préparer ou non.  
Vous avez également la possibilité de modifier le status de votre command ou bien de supprimer cette commande de votre liste.  


-------------
## IV. Aspect du site
###Le site est construit sur trois couleurs dominantes à savoir :
* le violet
* le gris
* le noir
-------------
###Voici quelque capture du site :

* La page __index__ pour la connection pour les employés  


![page de connection](https://github.com/Snoopyyyyy/ember-tds/blob/eval/img/loggin.PNG)


* La page __board__ pour voir les commandes restantes à préparer par l'employé  


![page de connection](https://github.com/Snoopyyyyy/ember-tds/blob/eval/img/board.PNG)


* La page __sections__ pour voir la liste des sections du store, ainsi qu'un petit onglet  
déroulant pour voir ces produit  


![page de connection](https://github.com/Snoopyyyyy/ember-tds/blob/eval/img/sections.PNG)


* La page __sections/edit__ pour voir les détails de la section, ainsi que la possibilité de modifier  
mais aussi un petit onglet déroulant pour voir la liste de ces produit *(nom, description)*


![page de connection](https://github.com/Snoopyyyyy/ember-tds/blob/eval/img/sections_edit.PNG)


* La page __sections/add__ pour pouvoir ajouter une nouvelle section  


![page de connection](https://github.com/Snoopyyyyy/ember-tds/blob/eval/img/sections_add.PNG)


* La page __sections/addProduct__ pour pouvoir ajouter un nouveau produit dans une  
section définie par l'employé via le menu déroulant  


![page de connection](https://github.com/Snoopyyyyy/ember-tds/blob/eval/img/sections_addProduct.PNG)


* La page __sections/delete__ pour pouvoir supprimer la section ainsi que tous ses produits  


![page de connection](https://github.com/Snoopyyyyy/ember-tds/blob/eval/img/sections_delete.PNG)
