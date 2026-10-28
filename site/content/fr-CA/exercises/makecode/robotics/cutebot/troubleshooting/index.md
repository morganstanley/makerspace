---
template: exercise
title: 'Dépannage'
level: 1
exercise: 6
category: Cutebot
tags: ['MakeCode', 'Cutebot', 'micro:bit']
description: Les problèmes les plus fréquents, et quoi vérifier en premier
---

Les problèmes les plus fréquents, et quoi vérifier en premier.

- **Pas de catégorie Cutebot Pro** : Extension non ajoutée à ce projet, ou « Cutebot » tout court ajouté. **Solution :** Extensions → chercher `cutebot pro` → Cutebot Pro d’ELECFREAKS.

- **Le robot ne bouge pas** : Interrupteur sur arrêt, batterie vide, ou vitesse trop faible pour faire tourner les roues. **Solution :** Allumer, vérifier la batterie, utiliser 30 % ou plus.

- **Le robot bouge tout seul** : Un code de déplacement placé dans _au démarrage_ ou _toujours_ s’exécute dès la mise sous tension. **Solution :** Le laisser par terre, ou lancer le code avec le bouton A.

- **Le robot ne s’arrête jamais** : Pas de bloc d’arrêt : les moteurs gardent la dernière vitesse. **Solution :** Ajouter **régler toutes les roues pour un arrêt immédiat**.

- **Le robot roule en courbe** : Les roues diffèrent un peu, ou une vitesse est mal tapée. **Solution :** Vérifier les deux nombres. Une petite courbe est normale.

- **Le sonar affiche toujours 0** : Rien à portée, ou il vise quelque chose de mou. **Solution :** Tenir un livre plat entre 10 et 50 cm devant le capteur.

- **Le robot réagit lentement** : **montrer l’icône** / **montrer nombre** prend environ 0,5 s dans une boucle de déplacement. **Solution :** Montrer l’état avec les phares à la place.

- **Le téléchargement ne marche pas** : micro:bit non appairé, ou fichier enregistré dans le dossier Téléchargements. **Solution :** Appairer via ⋯ → Connecter l’appareil, ou glisser le .hex sur le lecteur MICROBIT.
