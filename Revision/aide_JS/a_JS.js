dictio = {
    0: "",
    1: "1.html",
    2: "2.html",
    3: "3.html",
    4: "4.html",
    5: "5.html",
    6: "6.html",
    7: "7.html",
    8: "8.html",
    9: "9.html",
    10: "10.html",
    11: "11.html",
    12: "12.html",
    13: "13.html",
    14: "14.html",
    15: "15.html"
};
diction = Object.keys(dictio);

for (let i = 1; i <= diction.length; i++) {

    let chemin = "../aide_Pages/" + dictio[diction[i]];
    console.log(chemin);
    let xhr = new XMLHttpRequest();
    xhr.open("HEAD", chemin, true); 

    if (xhr) {
            let cheminTXT = "../Questions/" + `${diction[i]}.txt`;
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