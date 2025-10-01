tableau = [
    "1.html",     "2.html",    "3.html", "4.html",   "5.html",
    "6.html",  "7.html",    "8.html",    "9.html", "10.html",    "11.html",
    "12.html", "13.html", "14.html", "15.html"
];

for (let i = 0; i < tableau.length; i++) {

    let chemin = "../aide_Pages/" + tableau[i];
    console.log(chemin);
    let xhr = new XMLHttpRequest();
    xhr.open("HEAD", chemin, true); 

    if (xhr) {
            let cheminTXT = "../Questions/" + `${i}.txt`;
            console.log(cheminTXT);
            let xhr1 = new XMLHttpRequest();
            xhr1.open("GET", cheminTXT, true);

            xhr1.onload = function () {
                if (xhr1.status === 200) {
                    document.getElementById(`contenu${i}`).textContent = xhr1.responseText;
                } else {
                    document.getElementById(`contenu${i}`).textContent = "Erreur de chargement du texte.";
                    if (window.location.href.includes("../index.html")) {
                        fetch('../Questions/contenu.txt')
                            .then(response => response.text())
                            .then(data => {
                                document.getElementById('contenu').textContent = data;
                            })
                            .catch(error => {
                                document.getElementById('contenu').textContent = "Erreur de chargement du texte.";
                                console.error(error);
                            });
                        }
                }
            };
            xhr1.send();
        }
}

if (window.location.href.includes("index.html")) {
   fetch('./Questions/contenu.txt')
       .then(response => response.text())
       .then(data => {
           document.getElementById('contenu').textContent = data;
       })
       .catch(error => {
           document.getElementById('contenu').textContent = "Erreur de chargement du texte.";
           console.error(error);
       });
   }