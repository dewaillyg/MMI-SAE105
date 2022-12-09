/* --------------------------------
------------DONNEES LOCALES-----------
--------------------------------
*/

var menus = {
    "menuA" : {
        "nom" : "Ramen Végétarien au Miso",
        "prix" : {
            "S" : 10,
            "M" : 12,
            "L" : 14,
        },
        "ingredients" : [
            "nouilles fines",
            "champignons shiitake",
            "bok choy",
            "maïs sucré",
            "pousses de bambou",
            "oignons frais",
            "graines de sésame",
        ],
        "bouillon" : [
            "miso",
            "champignons shiitake",
            "kombu",
            "pâte de sésame"
        ],
    },
    "menuB" : {
        "nom" : "Ramen Tonkotsu",
        "prix" : {
            "S" : 10,
            "M" : 12,
            "L" : 14,
        },
        "ingredients" : [
            "nouilles fines",
            "chashu de poitrine de porc BBQ",
            "oeuf",
            "pousses de bambou",
            "champignons",
            "ail",
            "oignons frais",
            "graines de sésame",
        ],
        "bouillon" : [
            "porc",
            "fruits de mer", 
            "champignons shiitake",
            "kombu",
            "huile d'ail noir"
        ],
    },
    "menuC" : {
        "nom" : "Ramen Chili Citron Vert",
        "prix" : {
            "S" : 10,
            "M" : 12,
            "L" : 14,
        },
        "ingredients" : [
            "nouilles épaisses",
            "poulet",
            "oeuf",
            "coriande",
            "citron vert",
            "champignons",
            "tofu",
            "pousses de bambou",
            "oignons frais",
            "graines de sésame"
        ],
        "bouillon" : [
            "poulet",
            "fruits de mer",
            "champignons shiitake",
            "kombu",
            "pâte de piment"
        ],
    },
    "menuD" : {
        "nom" : "Ramen Tantanmen",
        "prix" : {
            "S" : 8,
            "M" : 10,
            "L" : 12,
        },
        "ingredients" : [
            "nouilles fines",
            "poulet haché épicé",
            "oeuf",
            "bok choy",
            "pousses de bamboo",
            "oignons frais",
            "graines de sésame"
        ],
        "bouillon" : [
            "poulet",
            "champignons shiitake",
            "kombu",
            "pâte de sésame",
        ],
    },
    "menuE" : {
        "nom" : "Ramen au Poulet",
        "prix" : {
            "S" : 8,
            "M" : 10,
            "L" : 12,
        },
        "ingredients" : [
            "nouilles fines",
            "poulet",
            "oeuf",
            "champignons",
            "maïs sucré",
            "pousses de bambou",
            "oignons verts",
            "graines de sésame"
        ],
        "bouillon" : [
            "poulet",
            "fruits de mer",
            "champignons shiitake",
            "kombu"
        ],
    },
    "menuF" : {
        "nom" : "Ramen Miso",
        "prix" : {
            "S" : 6,
            "M" : 8,
            "L" : 10,
        },
        "ingredients" : [
            "nouilles épaisses",
            "poulet",
            "porc chashu",
            "oignon blanc"

        ],
        "bouillon" : [
            "miso",
            "champignons shiitake",
            "kombu",
        ],
    }
}

var boissons = {
    "eau" : 1,
    "soda" : 1.5,
    "jus de coco" : 2,
    "bière" : 3
}

var extras = {
    "algues" : 0.25,
    "ail" : 0.5,
    "maïs" : 1,
    "ajitama" : 1.5,
    "chashu" : 2.5
}

var prixTotal = 0;

/* ----------------------------------------
------------FONCTION D'AFFICHAGE-----------
-------------------------------------------
*/

function affichageMenu(nbr) {
    var compteur = 1;

    for (const parametres in menus) {
        if (compteur === nbr) {
            prixTotal = menus[parametres].prix.M;
            const boite = window.document.getElementById("menu");
            boite.innerHTML = `
            <div id="titre"><h3>${menus[parametres].nom}</h3></div>
            <div id="ingredients">
                <div id="ingredients_ramen">
                    <div><h3>Ingredients</h3></div>
                    <div><p>${menus[parametres].ingredients.join(',&nbsp; ')}</p></div>
                </div>
                <div id="ingredients_bouillon">
                    <div><h3>Bouillon</h3></div>
                    <div><p>${menus[parametres].bouillon.join(',&nbsp; ')}</p></div>
                </div>
            </div>
            `;
            boite.appendChild(boiteBoisson);
            boiteBoisson.innerHTML = "<div><h3>Boissons</h3></div>";
            for (const boisson in boissons) {
                boiteBoisson.innerHTML += `
                    <div>
                        <div><input class="inputBoissons" type="checkbox" onClick="majPrix(${boissons[boisson]}, 1)"></div>
                        <div><p>${boisson} ${boissons[boisson]}€</p></div>
                    </div>
                `;
            }
            boite.appendChild(boiteExtras);
            boiteExtras.innerHTML = "<div><h3>Extras</h3></div>";
            for (const extra in extras) {
                boiteExtras.innerHTML += `
                    <div>
                        <div><input class="inputExtras" type="checkbox" onClick="majPrix(${extras[extra]}, 2)"></div>
                        <div><p>${extra} ${extras[extra]}€</p></div>
                    </div>
                `;
            }
            boite.appendChild(boiteFormat);
            boiteFormat.innerHTML = `
                <div><h3>Format</h3></div>
                <div class="conteneur">
                    <div class="conteneurS">
                        <div><h3>S (400ml)</h3></div>
                        <div> <p>${menus[parametres].prix.S}€</p></div>
                        <div><input class="inputFormats" type="radio" name="taille" onClick="majPrix(0, 3, ${compteur})"></div>
                    </div>
                    <div class="conteneurM">
                        <div><h3>M (600ml)</h3></div>
                        <div><p>${menus[parametres].prix.M}€</p></div>
                        <div><input class="inputFormats" type="radio" name="taille" checked onClick="majPrix(1, 3, ${compteur})"></div>
                    </div>
                    <div class="conteneurL">
                        <div><h3>L (800ml)</h3></div>
                        <div><p>${menus[parametres].prix.L}€</p></div>
                        <div><input class="inputFormats" type="radio" name="taille" onClick="majPrix(2, 3, ${compteur})"></div>
                    </div>
                </div>
            `
            boite.appendChild(boitePrix);
            boitePrix.innerHTML = `
                <div><h3>Total</h3></div>
                <div><p id="prixTotal">${prixTotal}€</p></div>
            `; 
        }
        compteur++;
    }
}



/* ----------------------------------------
------------FONCTION M.A.J PRIX-----------
-------------------------------------------
*/

var www = 0;

function reset() {
    www = 0;
}

function majPrix(prix, boite, menu) {
    const texte = window.document.getElementById("prixTotal");
    const boutonsBoissons = window.document.getElementsByClassName("inputBoissons");
    const boutonsExtras = window.document.getElementsByClassName("inputExtras");
    const prixBoissons = [];
    const prixExtras = [];

    for (const prix in boissons) {
        prixBoissons.push(boissons[prix]);
    }

    for (const prix in extras) {
        prixExtras.push(extras[prix]);
    }

    if (boite === 1) {
        for (let i = 0; i < prixBoissons.length; i++) {
            if (prixBoissons[i] === prix && boutonsBoissons[i].checked === true) {
                texte.innerHTML = `${prixTotal += prixBoissons[i]}€`;
            } else if (prixBoissons[i] === prix && boutonsBoissons[i].checked === false) {
                texte.innerHTML = `${prixTotal -= prixBoissons[i]}€`;
            }
        }
    }

    if (boite === 2) {
        for (let i = 0; i < prixExtras.length; i++) {
            if (prixExtras[i] === prix && boutonsExtras[i].checked === true) {
                texte.innerHTML = `${prixTotal += prixExtras[i]}€`;
            } else if (prixExtras[i] === prix && boutonsExtras[i].checked === false) {
                texte.innerHTML = `${prixTotal -= prixExtras[i]}€`;
            }
        }
    }

    if (boite === 3) {
        let compteurB = 1;
        for (const parametres in menus) {
            if (compteurB === menu) {
                if (prix === 0) {
                    if (www === 0) {
                        texte.innerHTML = `${prixTotal -= 2}€`;
                    } else if (www === 1) {
                        texte.innerHTML = `${prixTotal -= 4}€`;
                    }
                    www = -1;
                } else if (prix === 1) {
                    if (www === -1) {
                        texte.innerHTML = `${prixTotal += 2}€`;
                    } else if (www === 1) {
                        texte.innerHTML = `${prixTotal -= 2}€`;
                    }
                    www = 0;
                } else if (prix === 2) {
                    if (www === -1) {
                        texte.innerHTML = `${prixTotal += 4}€`;
                    } else if (www === 0) {
                        texte.innerHTML = `${prixTotal += 2}€`;
                    }
                    www = 1;
                }
            }
            compteurB++;
        }
    }
}

/* ------------------------------------------------------------
-------------TITRES DES CARTES DEPUIS JAVASCRIPT-----------------
---------------------------------------------------------------
*/

const titresCartes = window.document.getElementsByTagName("h2");
var compteurCartes = 0;
for (const parametres in menus) {
    titresCartes[compteurCartes].textContent = menus[parametres].nom;
    compteurCartes++;
}

/* ------------------------------------------------------------
-------------INSTRUCTIONS SUPPLEMENTAIRES POUR FACILITER LE STYLE-----------------
---------------------------------------------------------------
*/

var boiteBoisson = window.document.createElement("div");
var boiteExtras = window.document.createElement("div");
var boiteFormat = window.document.createElement("div");
var boitePrix = window.document.createElement("div");

boiteBoisson.classList.add("boissons");
boiteExtras.classList.add("extras");
boiteFormat.classList.add("format");
boitePrix.classList.add("prix");

