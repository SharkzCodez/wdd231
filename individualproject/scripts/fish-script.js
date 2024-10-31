//CARDS on HOME PAGE
fetch('./scripts/facts.json')
  .then(response => response.json())
  .then(facts => {
    const container = document.getElementById("cards-section");

    const isHomePage = window.location.pathname.includes('index.html') || window.location.pathname === '/';

    // Se estiver na home, mostra 6 produtos, senão mostra todos
    const factsToDisplay = isHomePage ? facts.slice(0, 6) : facts;

    // Renderizando os produtos apropriados
    factsToDisplay.forEach(fact => {
      const item = document.createElement("div")
      item.classList.add("card");
      

      item.innerHTML = `
        <h3>${fact.rumor}</h3>
        <p>${fact.truth}</p>
      `;
      container.appendChild(item);
    });
  })
  .catch(error => console.error('Error loading facts:', error));