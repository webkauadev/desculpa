function checkAnswers() {
    const answer1 = document.getElementById('answer1').value.trim();
    const answer2 = document.getElementById('answer2').value.trim();
    const answer3 = document.getElementById('answer3').value.trim();

    const resultElement = document.getElementById('result');

    // Verifica se todos os campos foram preenchidos
    if (answer1 !== "" && answer2 !== "" && answer3 !== "") {
        resultElement.innerHTML = `<p>obaaa, voce conseguiu! essa é a playlist do erro, toda vez que ele errar com voce ele vai colocar uma música nela :p</p>
                                   <a href="https://open.spotify.com/playlist/2BItrCovyjBfpjwMjgeqP1?si=b5b0a621f2d04849&pt=b9befe13060336999f41c9d70183a640" target="_blank">Clique aqui para acessar a playlist</a>`;
    } else {
        resultElement.innerHTML = `<p>tente novamente</p>`;
    }
}
