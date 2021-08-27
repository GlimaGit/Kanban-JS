const githubUserRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

document.getElementById("login").addEventListener("click", function (event) {
  event.preventDefault();
  // 1. Validar usuário inserido
  // 2. Chamar API do Github e obter dados
  // 3. Salvar dados no localStorage
  // 4. Redirecionar para a próxima página /boards
  // 5. deixar bonito
  const user = document.getElementById("input-login").value;

  if (!user || !githubUserRegex.test(user)) {
    return;
  }
  console.log(user);

  fetch(`https://api.github.com/users/${user}`)
    .then((res) => res.json())
    .then((data) => {
      const stringified = JSON.stringify(data);
      // alert(`${stringified}`);
      localStorage.setItem("data_user", stringified);
      window.location.href = "/boards.html";
    })
    .catch(() => alert("erro ao buscar usuário no github"));
});
