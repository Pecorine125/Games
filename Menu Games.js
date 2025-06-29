fetch('games.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("menu-container");
    data.forEach((game, index) => {
      const item = document.createElement("div");
      item.className = "game-item";
      item.innerHTML = `
        <img src="${game.ImagensGames}" alt="${game.NomeGames}" onclick="selectGame(${index})" />
        <p>${game.NomeGames}</p>
      `;
      container.appendChild(item);
    });
  });

function selectGame(index) {
  localStorage.setItem("gameIndex", index);
  window.location.href = "Games.html";
}
