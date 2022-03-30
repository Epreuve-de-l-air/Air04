#! node

// Script qui fusionne deux listes de nombres, triées de manière croissantes.

// Parsing
let arg = process.argv;
arg.splice(0, 2);

let listeA = arg.slice(0, arg.indexOf("fusion"));
let listeB = arg.slice(arg.indexOf("fusion") + 1, arg.length);

// Function
const sort = (liste) => {
  liste = arg.map((num) => Number(num));
  for (let x = 1; x < liste.length; x++) {
    if (liste[x] < liste[x - 1]) {
      console.log(
        "La liste " + liste + " n'est pas triée de manière croissante"
      );
      return true;
    }
  }
};

// Gestion d'erreur
if (sort(listeA) || sort(listeB)) {
  return;
}

if (!arg.includes("fusion")) {
  console.log(
    'Veuillez séparer les deux liste à fusionner par le mot "fusion"'
  );
  return;
}

// Résolution du problème

const fusion = (listeA, listeB) => {
  a = listeA.map((num) => Number(num));
  b = listeB.map((num) => Number(num));
  let listeC = [];
  while (a.length !== 0 && b.length !== 0) {
    if (a[0] < b[0]) {
      listeC.push(a.shift());
    } else {
      listeC.push(b.shift());
    }
  }
  return listeC.concat(a, b);
};

// Affichage

console.log(fusion(listeA, listeB));
