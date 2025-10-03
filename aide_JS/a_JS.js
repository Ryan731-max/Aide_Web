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

for (let i = 1; i < diction.length; i++) {
    let cheminTXT = `../Questions/${diction[i]}.txt`;
    console.log(cheminTXT);

    fetch(cheminTXT)
        .then(response => response.ok ? response.text() : Promise.reject("Erreur de chargement"))
        .then(data => {
            document.getElementById(`contenu${i}`).textContent = data;
        })
        .catch(err => {
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
                
        console.error(err);
        });
}


for (let i = 1; i < diction.length; i++) {
    let cheminTXT = `../../../../Questions/${diction[i]}.txt`;
    console.log(cheminTXT);

    fetch(cheminTXT)
        .then(response => response.ok ? response.text() : Promise.reject("Erreur de chargement"))
        .then(data => {
            document.getElementById(`contenu${i}`).textContent = data;
        })
        .catch(err => {
            document.getElementById(`contenu${i}`).textContent = "Erreur de chargement du texte.";
            if (window.location.href.includes("../../../../index.html")) {
                        fetch('../../../../Questions/contenu.txt')
                            .then(response => response.text())
                            .then(data => {
                                document.getElementById('contenu').textContent = data;
                            })
                            .catch(error => {
                                document.getElementById('contenu').textContent = "Erreur de chargement du texte.";
                                console.error(error);
                            });
                        }
                
        console.error(err);
        });
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