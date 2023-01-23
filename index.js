let loginButton = document.getElementById("pushButton");

const User = function (nome, cognome, data) {
  this.nome = nome;
  this.cognome = cognome;
  this.data = data;
};

loginButton.onclick = function () {
  let person = new User(
    document.getElementById("username").value,
    document.getElementById("surname").value,
    document.getElementById("data").value
  );
  const rigaUtente = document.createElement("tr");
  const colonnaNome = document.createElement("td");
  const colonnaCognome = document.createElement("td");
  const colonnaData = document.createElement("td");
  colonnaNome.innerHTML = person.nome;
  colonnaCognome.innerHTML = person.cognome;
  colonnaData.innerHTML = person.data;
  rigaUtente.appendChild(colonnaNome);
  rigaUtente.appendChild(colonnaCognome);
  rigaUtente.appendChild(colonnaData);
  const idTabella = document.getElementById("tabella");
  idTabella.appendChild(rigaUtente);
  idTabella.style.display = "block";
};
