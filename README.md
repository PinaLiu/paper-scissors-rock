# paper-scissors-rock

Qui il link del gioco https://pinaliu.github.io/paper-scissors-rock/

Per estendere il gioco alla variante lizard spok:
- aggiungere sul file index.html i bottoni con le 2 nuove opzioni su entrambe le modalità di gioco.

sul file game.js dobbiamo aggiungere
- nelle scelte  lizard e spok
- sulla funzione winner le opzioni di vincita del player1 

      (choice1 === 'carta' && (choice2 === 'sasso' || choice2 === 'lizard')) ||
      (choice1 === 'forbici' && (choice2 === 'carta' || choice2 === 'lizard')) ||
      (choice1 === 'sasso' && (choice2 === 'forbici' || choice2 === 'lizard')) ||
      (choice1 === 'lizard' && (choice2 === 'spock' || choice2 === 'carta')) ||
      (choice1 === 'spock' && (choice2 === 'forbici' || choice2 === 'sasso'))
