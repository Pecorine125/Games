fetch('games.json')
  .then(response => response.json())
  .then(data => {
    const index = localStorage.getItem("gameIndex");
    const game = data[index];
    document.getElementById("game-view").innerHTML = `
      <h2>${game.NomeGames}</h2>
      <iframe src="${game.LinkGames}"></iframe>
    `;
  });
