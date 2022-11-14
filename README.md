# MiniGameTask

"People vs People" (compare mass) or "Starships vs Starships" (compare crew)

### Drawing cards logic

- check the total number of cards from the first page
- draw a card for both players (get a random number from 0 to amount of cards - 1, change it to a specific page number and resource index on that page), 
- to prevent unintended requests on free API -> staleTime Infinity 

### Cards colors

- as winner (light green background)
- as loser (light coral background)
- during draw (light grey background)

### Property values interpretation (with examples): 

If the property value is a valid number, the larger number wins

#### Special examples for people:

- mass='unkown' vs mass=20 -> draw
- mass='unkown' vs mass='unkown' -> draw

#### Special examples for starships:

- crew="100-200" (compared as min value from scope) vs crew="200" -> right win
- crew="100,20" (compared as 10020) vs crew="2000" -> left win
