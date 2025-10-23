$(function () {
  $(".Home").click(function () {
    window.location.href = "index.html"; // Presmerovanie na domovskú stránku
  });
});
//---------EFEKT TZV. AKORDEON --------
let list = $(".skills");
list.find("p").hide();
list.find(".skill-img").on("click", function () {
  $(this).next().slideToggle();
});

// let job = "teacher";
// console.log(job);

// let firstName = "Miloš";
// let secondName = "machara";
// let age = 33;
// console.log("Tento človek sa vola " + firstName + " " + age);

// alert("ahoj");
// confirm("pod dalje?");
// prompt("koľko máš rokov ?");

// let age = prompt("kolko mas rokov");

// console.log(typeof adult);

// if (age < 18) {
//   confirm("mladík");
// } else {
//   console.log("starý");
// }

// let number1 = Number(prompt("Zadaj prvé číslo"));
// let number2 = Number(prompt("Zadaj druhé číslo"));
// let sign = prompt("zadaj znak");

// if (sign === "+") {
//   console.log(number1 + number2);
// } else if (sign === "-") {
//   console.log(number1 - number2);
// } else if (sign === "*") {
//   alert("tvoj výsledok je " + number1 * number2);
// } else if (sign === "/" && number2 != 0) {
//   console.log(number1 / number2);
// } else if (sign === "/" && number2 == 0) {
//   console.log("nulou sa nedá deliť");
// } else {
//   console.log("toto nedokazem sorry");
// }

//---------EFEKT TZV. AKORDEON, NO Už VYLEPSENý ABY MI VžDY JEDEN ZATVORILO KED OTVORí DALšI, dá sa to robiť aj jednoduchsšie ak mám priameho
// potomka v DOM no v mojom prípade to nešlo keďže som použil col  --------

// let list = $(".skills");
// list.find("p").hide();

// list.find(".skill-img").on("click", function () {
//   let paragraph = $(this).closest(".col").find("p"); // Nájde <p> v aktuálnom bloku
//   list.find("p").not(paragraph).slideUp(); // Skryje všetky ostatné <p>
//   paragraph.slideToggle(); // Otvorí/zavrie len kliknutý <p>
// });

//---------PADANIE ICON----------------
// var icons = $(".navbar a"),
//   styles = {
//     position: "relative",
//   },
//   settings = { top: 1000 },
//   speed = 5000;

// icons.css(styles);

// icons.on("mouseenter", function () {
//   $(this).animate(settings, speed);
// });

// -------PREJDENIE MYŠOU -------------------------

// $(".navbar a").on("mouseenter", function () {
//   alert("Ešte to nie je hotové :D ");
// });

// function calculateAge(birth) {
//   return 2025 - birth;
// }

// function yearsUntilRetirement(year, firstname) {
//   let age = calculateAge(year);
//   let retirement = 65 - age;

//   if (retirement > 0) {
//     console.log("počet rokov do dôchodku " + retirement + "u " + firstname);
//   } else {
//     retirement = -retirement;
//     console.log(firstname + "je už na dôchodku " + retirement);
//   }
// }

// yearsUntilRetirement(1992, "david");
// yearsUntilRetirement(1925, "diana");
// yearsUntilRetirement(1855, "peter");

function checkCombination(name, profession) {
  const validNames = ["David", "Peter"];
  const validProfessions = ["manazer", "pravnik"];

  if (!validNames.includes(name)) {
    console.log("Neplatné meno");
    return;
  }

  if (!validProfessions.includes(profession)) {
    console.log("Povolanie neexistuje");
    return;
  } else {
    console.log(`${name} je ${profession}`);
  }
}

checkCombination("David", "manazer"); // David je manazer
checkCombination("Peter", "pravnik"); // Peter je pravnik
checkCombination("John", "manazer"); // Neplatné meno
checkCombination("David", "doktor"); // Povolanie neexistuje
