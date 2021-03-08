/*
const x = 10;
console.log(x);
let y = 20;
console.log(y);
y = 41;
console.log(y);
let z = y % 4;
console.log(z);
y++;
console.log(y);
z--;
console.log(z);
console.log("la valeur de y est :" + y);
y += 11; //y=y+11;
console.log(y);
y -= 3; //y=y-3;
console.log(y);
let chaine = 'chaine "met en quote" reste de la chaine';
console.log(chaine);
chaine = " It's a good day";
console.log(chaine);
let dossier = "dossier\\mesimages\\image.png";
console.log(dossier);
chaine = "premiere ligne\n deuxieme ligne";
console.log(chaine);
let person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());
function afficherMessage() {
  console.log("un message");
}
afficherMessage();
function somme(a, b) {
  console.log(a + b);
}
somme(2, 3);
somme(6, 12);

function sommeReturn(a, b) {
  return a + b;
}
let s;
s = sommeReturn(2, 3);
console.log(s);
let val1 = Math.random() * 10;
console.log(val1);
let val2 = Math.random() * 10;
console.log(val2);
s = sommeReturn(val1, val2);
console.log(s);
s = Math.floor(Math.random() * 10);
console.log(s);

function egalite(c, d) {
  console.log(c == d);
}
egalite(2, 5);
egalite(4, 6);

function egaliteReturn(c, d) {
  return c == d;
}
let f;
f = egaliteReturn(6, 7);
console.log(f);
chaine = " ";
console.log(Boolean(chaine));

let hour = 10;
let greeting = "";

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);


function heure(hour) {
  let greeting = "";
  if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  return greeting;
}

let resultat = heure(22);
console.log(resultat);


if (numbre <= 10) {
  greeting = "enfant";
} else if (numbre <= 15) {
  greeting = "adolescent";
} else if (numbre <= 20) {
  greeting = "jeune";
} else if (numbre <= 45) {
  greeting = "adulet";
} else if (numbre <= 100) {
  greeting = "senior";
} else {
  greeting = "trop vieux";
}
return greeting;
}
let message = age(101);
console.log(message);

function ages(age) {
let numbre = "";

switch (true) {
  case age <= 10:
    numbre = "enfant";
    break;
  case age <= 15:
    numbre = "adolescent";
    break;
  case age <= 100:
    numbre = "senior";
    break;
  default:
    numbre = "trop vieux";
}
return numbre;
}

console.log(ages(2));



function entiers(tab) {
  let message =""
let i;
for (i = 0; i < cars.length; i++)
{
  message+= tab[i] +"\n";
}
return message
}
let tab1= [1,2,3,4,5,6,7];
console.log(entiers(tab));




function exemple(tab) {
  let message = "";
  let i;
  for (i = 0; i < tab.length; i++) {
    if (tab[i] === "non") {
      continue;
    }
    message += tab[i] + "\n";
  }
  return message;
}
let tab1 = ["yes", "oui", "no", "non", "yeah", "nous", "merci"];
console.log(exemple(tab1));

function exemple(x) {
  let message = "";
  let i = 0;
  while (x[i]) {
    if (x[i] === "Saab") {
      i++;
      continue;
    }
    message += x[i] + "\n";
    i++;
  }
  return message;
}
message1 = ["BMW", "Volvo", "Saab", "Ford"];
console.log(exemple(message1));

function exemple(x) {
  let message = "";
  let i = 0;
  while (x[i]) {
    message += x[i] + "\n";
    i++;
  }
  return message;
}
message1 = ["aaa", "bbb", "cccc", "dddd"];
console.log(exemple(message1));





var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
document.getElementById("demo").innerHTML = cars[0];



function entiers(tab) {
  let message =""
let i;
for (i = 1; i < cars.length; i++)
{
  message+= tab[i] +"\n";
}
return message
}
let tab1= ["a","b","c","d","e"];
console.log(entiers(tab));



let tab = ["a", "b", "d" ,"e" ,"p"];
tab [0] =  "z"

console.log(tab[0])




 let message =""
for (let somme = 0; somme < moyenne.length; somme++)
{
  message+= tab[somme] +"\n";
}
return message



let tab1= [1,2,3,4,5,6,7];
console.log(moyenne(tab));


function moyenne(tab) {
  if (tab.length == 0) {
    return 0;
  }
  let somme = 0;
  let i;
  for (i = 0; i < tab.length; i++) {
    somme += tab[i];
  }
  return somme / tab.length;
}
let tab1 = [2, 2, 4, 7, 8, 5, 6, 9];
console.log(moyenne(tab1));
let tab2 = [];
console.log(moyenne(tab2));



if (numbre <= 10) {
  greeting = "enfant";
} else if (numbre <= 15) {
  greeting = "adolescent";
} else if (numbre <= 20) {
  greeting = "jeune";
} else if (numbre <= 45) {
  greeting = "adulet";
} else if (numbre <= 100) {
  greeting = "senior";
} else {
  greeting = "trop vieux";
}
return greeting;
}
let message = age(101);
console.log(message);

function moyenne(tab) {
  let somme = 0;
  let i;
  for (i = 0; i < tab.length; i++) {
    somme += tab[i];
  }
  return somme < somme ;
}
let tab1 = [2, 2, 4, 7, 8, 5, 6, 2];
console.log(moyenne(tab1));
Llet indice = fruits1.indexOf(fruit;


     if (tab[i]> max) {
      max = tab [i]
     }

function max(tab) {
  let max = tab[0];
  let i;
  for (i = 0; i < tab.length; i++) {
    if (tab[i] > max) {
      max = tab[i];
    }
  }
return max;
}
let tab1= [1,95,5,87,58,71,60];
console.log(max(tab1));


function possition(tab, val) {
  let i;
  for (i = 0; i < tab.length; i++) {    
  }
}
let tab1 = [1, 95, 5, 87, 8, 71, 60];
console.log(possition(tab1, 8));



function possition(tab,val) {
  let i = 0;
  while (i < tab.length) {
    if (tab[i] == val) {
      return i + 1;
    }
 i++;
  }
}
let tab1 = [1, 95, 5, 87, 8, 71, 60];
console.log(possition(tab1, 5));


function ages(age) {
let numbre = "";
switch (true) {
  case age <= 10:
    numbre = "enfant";
    break;
  case age <= 15:
    numbre = "adolescent";
    break;
  case age <= 100:
    numbre = "senior";
    break;
  default:
    numbre = "trop vieux";
}
return numbre;
}
console.log(ages(2));


function nombreJour(m,a) {
  if (m == 2) {
    if (a %4==0) {
      return 29;
    }
    else 
    return 28;
  }
  let tab =[31,28,31,30,31,30,31,31,30,31,30,31]
  return tab [m- 1 ];
 }
console.log(nombreJour(2,2024));

function nbJour(mois, annee) {
  let n = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  switch (mois) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2: 
      if (mois == 2) {              //si je suis au mois de fivrier
        if (annee % 4 == 0) {
          return 29;
        } 
        else {
          return 28;
        }
      }
  }
}
console.log(nbJour(12));
console.log(nbJour(2));

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

str.


function inverse(ch) {
  let chaine = "";
  let i;
  for (i = ch.length-1; i >= 0; i--) {
    chaine = chaine + ch[i];
  }
  return chaine;
}
let str = ["inverser","invers","inverse","inve","inv","inv"];
let nmMot = str.length;
console.log(nmMot)


function nmMot(nombre) {
let tab= nombre.split(" ") 
return tab.length ;
}
 let nombre1="ne fonctionne pas dans Internet Explorer ou version anterieure";
 console.log(nmMot(nombre1))

function nmMot(ch1,ch2) {
return  nmMots(ch1)==nmMots(ch2);

console.log(nmMot("salut bonjour","holle word"))



function carre(a) {
  return a ** 2;
}
console.log(carre(3));
/////////////////////
function carre(a) {
  return Math.pow(a, 2);
}
console.log(carre(2, 2));

function racine(a) {
  return Math.sqrt(a);
}
console.log(racine(9));

function perimetre(a, b) {
  return (a + b) * 2;
}
console.log(perimetre(5, 6));

function somme(a, b) { 
  if (a + b < 100) {
    return true;
  } else {
    return false;
  }
}
console.log(somme(a, b))


function inverssion (tab){
let tab1 ="";
let i;
for ( i= tab.lengt-1; i>= 0; i--){
tab0= tab0+ tab[i];
}
return tab0
}
let tab1=[2,5,8,7,4,56,9,85,56]
console.log(inverssion (tab1));

function divisible(nb1, nb2) {
  if (nb2%=nb1) {
    return true;
  } else {
    return false;
  }
}
console.log(divisible(20,5));


function divisible(nb1, nb2) {
  let nb = nb2%nb1;
  if (nb == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(divisible(10,42));

function inversion(tab) {
  let tab0 = [];
  let i;
  for (i = tab.length- 1; i>=0; i--) {
    tab0.push(tab[i]) ;
  }
  return tab0;
}
let tab1 = [2, 5, 8, 7, 4, 56, 9, 85, 56];
console.log(inversion(tab1));
 
if (numbre <= 10) {
  greeting = "enfant";
} else if (numbre <= 15) {
  greeting = "adolescent";
} else if (numbre <= 20) {
  greeting = "jeune";
} else if (numbre <= 45) {
  greeting = "adulet";
} else if (numbre <= 100) {
  greeting = "senior";
} else {
  greeting = "trop vieux";
}
return greeting;
}
let message = age(101);
console.log(message);

function ages(age) {
let numbre = "";

function inversion(tab) {
  let tab0 = [];
  let i;
  for (i = tab.length- 1; i >= 0; i--) {
    tab0 = tab0 + tab[i];
  }
  return tab0;
}
let tab1 = [2, 5, 8, 7, 4, 56, 9, 85, 56];
console.log(inversion(tab1));
 


function inversion(tab) {
  let tab0 = [];
  let i;
  for (i = tab.length- 1; i>=0; i--) {
    tab0.push(tab[i]) ;
  }
  return tab0;
}
let tab1 = [2, 5, 8, 7, 4, 56, 9, 85, 56];
console.log(inversion(tab1));
 


age(tab[i].age) +    
/*/

let tab = [
  { nom: "jo", prenom: "dob", age: 25, revenu: 2000 },
  { nom: "tom", prenom: "kim", age: 45, revenu: 1500 },
  { nom: "ziddane", prenom: "zindine", age: 60, revenu: 5000 },
];
function age(age) {
  if (age <= 10) {
    return "enfant";
  } else if (age <= 18) {
    return "adolescent";
  } else if (age <= 25) {
    return "jeune";
  } else if (age <= 45) {
    return "adult";
  } else {
    return "trop vieux";
  }
}
function impo(revenu) {
  if (revenu <= 1000) {
    return revenu * 0.05;
  } else if (revenu <= 2000) {
    return revenu * 0.07;
  } else if (revenu <= 3000) {
    return revenu * 0.11;
  } else if (revenu >= 4000) {
    return revenu * 0.15;
  }
}
function secu(revenu) {
  if (revenu <= 1000) {
    return revenu * 0.03;
  } else if (revenu <= 2000) {
    return revenu * 0.06;
  } else if (revenu <= 3000) {
    return revenu * 0.08;
  } else if (revenu >= 3000) {
    return revenu * 0.12;
  }
}
function info(tab) {
  let info = "";
  for (i = 0; i < tab.length; i++) {
    info +=
      tab[i].nom +
      " " +
      tab[i].prenom +
      " " +
      age(tab[i].age) +
      " " +
      impo(tab[i].revenu) +
      " " +
      secu(tab[i].revenu) +
      "\n";
  }
  return info;
}
console.log(info(tab));
