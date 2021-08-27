// TODO
// - Quadros (2) /quadros
//   -- Mostra as informações pessoais do usuário
//   -- lista os quadros kanban disponíveis
//   -- possibilita criar, editar e excluir quadros
//{"login":"frvs","id":38838958,"node_id":"MDQ6VXNlcjM4ODM4OTU4","avatar_url":"https://avatars.githubusercontent.com/u/38838958?v=4","gravatar_id":"","url":"https://api.github.com/users/frvs","html_url":"https://github.com/frvs","followers_url":"https://api.github.com/users/frvs/followers","following_url":"https://api.github.com/users/frvs/following{/other_user}","gists_url":"https://api.github.com/users/frvs/gists{/gist_id}","starred_url":"https://api.github.com/users/frvs/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/frvs/subscriptions","organizations_url":"https://api.github.com/users/frvs/orgs","repos_url":"https://api.github.com/users/frvs/repos","events_url":"https://api.github.com/users/frvs/events{/privacy}","received_events_url":"https://api.github.com/users/frvs/received_events","type":"User","site_admin":false,"name":"frvs","company":"Lambda3","blog":"https://frvs.com.br","location":"Brazil","email":null,"hireable":true,"bio":"Based in Brazil. 21 years.","twitter_username":"_frvs","public_repos":55,"public_gists":7,"followers":75,"following":100,"created_at":"2018-04-29T16:29:15Z","updated_at":"2021-08-26T21:00:51Z"}
//type Profile = {
//   id: number;
//   name: string;
//   user: string;
//   location: string;
//   email: string;
//   twitter?: string;
// };

const createElementAndSetInnerText = (elementName, text) => {
  let element = document.createElement(elementName);
  element.innerText = text;
  return element;
};

const user = JSON.parse(localStorage.getItem("data_user"));
let nameParagraph = createElementAndSetInnerText("p", user.name);
let userParagraph = createElementAndSetInnerText("p", user.login);
let locationParagraph = createElementAndSetInnerText("p", user.location);
let emailParagraph = createElementAndSetInnerText("p", user.email);

// implementar twitter dentro de um if por ser nullable (twitter-username)
// document
//   .getElementById("personal-info")
//   .appendChild([nameParagraph, userParagraph, locationParagraph, emailParagraph]);

document
  .getElementById("personal-info")
  .appendChild(nameParagraph)
  .appendChild(userParagraph)
  .appendChild(locationParagraph)
  .appendChild(emailParagraph);
