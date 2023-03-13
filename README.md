<p align="center">
  <img width="100" height="100" src="./assets/images/clutch/Clutch_icon_1.png">
</p>

# Application Mobile Clutch

## Prerequis

npm et node : [lien d'installation](https://nodejs.org/fr/).

expo-cli
`npm install -g expo-cli`

## Installation

à la racine du projet, éxécuter : `npm i`

## Lancer le projet

Egalement à la racine du projet, éxécutez la commande `npm start`
Vous allez alors être redirigé vers une page proposant plusieurs options :

- LAN ==> utilisation du réseau internet
- Local ==> utilisation du réseau local
- Tunnel ==> en cas d'échec avec LAN, basculer sur tunnel

Une fois le projet lancé, prennez votre téléphone et installez l'application "Expo Go"

- [android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=fr&gl=US)
- [ios](https://apps.apple.com/fr/app/expo-go/id982107779)

Avec l'application, scannez le QR de la page web.

Le projet sera alors disponible depuis votre téléphone avec un rafraichissement automatique lors des modifications en direct.

## Librairies

- Navigation

  - [react navigation](https://reactnavigation.org/)
    - La navigation tourne autour du Tab.Navigator, ce sont les routes disponibles dans le menu.
      Chaque Tab. Chaque Tab.Screen possède un composant "Stack" qui représente la route disponible dans l'item.
      Par exemple, ResearchStack correspond aux screens qui seront disponible lorsque nous seront sur la route Research.

- Gestion des états
  - [redux-toolkits](https://redux-toolkit.js.org/)
    - La gestion des états et le passage de données peut se compliquer assez vite lorsque le nombre de composant augmente.
      Pour pallier à cela, redux est certainement la solution la plus utilisée mais aussi la plus compliqué à mettre en place.
      Redux toolkit permets de réduire la verbosité de redux et améliore son utilisation.
      Lorsque nous voulons stocker des données dans notre application qui seront utilisées par plusieurs composants, nous devons écrire un slice.
      Par exemple: pour stocker des évènenements, nous alons créer un slice. Nous devons lui définir un state, c'est à dire un état initial de données.
      nous implémentons également les méthodes qui viendront modifier notre state. Ces méthodes peuvent être appelé dans n'importe quel composant avec les hooks de redux.
      Dans cette application, nous avons des hook typé, useAppSelector et useAppDispatch car nous travaillons avec typescript.
      - useAppSelector permets de réupérer la valeur dans notre state
      - useAppDispatch permets d'éxécuter une action que nous avons définis dans notre slice.
- Gestion des dates
  - [date-fns](https://date-fns.org/)
    - Plusieurs librairies de gestion des dates existe en javascript, celle-ci à la différence de certaines est compatible avec android et ios.
      C'est également une librairies très largement utilisé et donc maintenue.
- Gestion du style
  - [styled-component](https://styled-components.com/)
    - La gestion du style sur react-native est peu pratique et agréable. Styled-component permets d'écrire du css dans des fichiers séparés. \*
      Les éléments crées par styled-component peuvent être importé directement dans un composant react. Un avantage conséquent de la librairie est que l'on peut intégrer de la logique dans notre style, typiquement der ternaires.

# Structure du projet

```
clutch_app
│   README.md
│   ...
│
└───src
│   └───api
│       │   events.service.ts
│   └───redux
│       │   store.ts
│       │   hooks.ts
│       └───slices
│       │   ....slice.ts
│   └───routes
│       └───...Stack
│       └───root
│       │   Eroutes.ts
│       │   NavigationsOptions.ts
│       │   AppNavigation.tsx
│   └───screens
│       └───agenda
│       └───alerts
│       └───components
│       └───home
│       └───map
│       └───reader
│       └───research
│       └───style
│   └───utils


└───assets
    │   └───fonts
    │   └───images
```

# Debugger l'application

Plusieurs outils permettent de debugger une application react native. Le plus connu est [react native debugger](https://github.com/jhen0409/react-native-debugger). Il faut juste installé l'éxécutable et lancer le debug depuis l'app. Pour cela consultez la documentation : [ici](https://reactnative.dev/docs/debugging)

Il existe aussi [Flipper](https://fbflipper.com/) avec plus de donctionnalités mais donc l'installation est plus compliqué

Si vous utilisez Webstorm ou un autre IDE de JetBrains. Vous avez la possibilité d'utilisé le debugger déjà configurer pour react-native et qui permets de mettre de points d'arrêts dans votre code.

##Règles de codage

- Ne push que dans la branche correspondant a votre groupe
- Dans la mesure du possbile créez des composants réutilisables dans le dossier "style"
- Demander a l'équipe gestion de projet pour merge
- Essayer de spéraer au maximum le style de la logique de la manière suivante :
  - Dans le même dossier :
    - MonComposant.tsx
    - monComposant.style.ts 
