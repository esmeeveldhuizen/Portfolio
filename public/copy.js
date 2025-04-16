document.getElementById("discordBtn").addEventListener("click", function () {
    const tekst = "qwertyde6e"; // <- jouw eigen tekst hier

    navigator.clipboard.writeText(tekst).then(() => {
        console.log("Username copied!");
        // Je kan hier ook een visuele bevestiging laten zien als je wil
    }).catch(err => {
        console.error("Kopiëren mislukt: ", err);
    });
});
