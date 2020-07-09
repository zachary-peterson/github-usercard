/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import Axios from 'Axios';

const buildIt = document.querySelector('.cards');
const myGitRepos = 'https://api.github.com/users/zachary-peterson';
const runWithThis = {
  "login": "zachary-peterson",
  "id": 15370405,
  "node_id": "MDQ6VXNlcjE1MzcwNDA1",
  "avatar_url": "https://avatars0.githubusercontent.com/u/15370405?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/zachary-peterson",
  "html_url": "https://github.com/zachary-peterson",
  "followers_url": "https://api.github.com/users/zachary-peterson/followers",
  "following_url": "https://api.github.com/users/zachary-peterson/following{/other_user}",
  "gists_url": "https://api.github.com/users/zachary-peterson/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/zachary-peterson/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/zachary-peterson/subscriptions",
  "organizations_url": "https://api.github.com/users/zachary-peterson/orgs",
  "repos_url": "https://api.github.com/users/zachary-peterson/repos",
  "events_url": "https://api.github.com/users/zachary-peterson/events{/privacy}",
  "received_events_url": "https://api.github.com/users/zachary-peterson/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Zachary Peterson",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 21,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2015-10-28T22:23:44Z",
  "updated_at": "2020-06-29T15:26:20Z"
}
const listRunWithThis =[
  {
    "login": "zachary-peterson",
    "id": 15370405,
    "node_id": "MDQ6VXNlcjE1MzcwNDA1",
    "avatar_url": "https://avatars0.githubusercontent.com/u/15370405?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/zachary-peterson",
    "html_url": "https://github.com/zachary-peterson",
    "followers_url": "https://api.github.com/users/zachary-peterson/followers",
    "following_url": "https://api.github.com/users/zachary-peterson/following{/other_user}",
    "gists_url": "https://api.github.com/users/zachary-peterson/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/zachary-peterson/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/zachary-peterson/subscriptions",
    "organizations_url": "https://api.github.com/users/zachary-peterson/orgs",
    "repos_url": "https://api.github.com/users/zachary-peterson/repos",
    "events_url": "https://api.github.com/users/zachary-peterson/events{/privacy}",
    "received_events_url": "https://api.github.com/users/zachary-peterson/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Zachary Peterson",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 21,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2015-10-28T22:23:44Z",
    "updated_at": "2020-06-29T15:26:20Z"
  },
  {
    "login": "zachary-peterson",
    "id": 15370405,
    "node_id": "MDQ6VXNlcjE1MzcwNDA1",
    "avatar_url": "https://avatars0.githubusercontent.com/u/15370405?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/zachary-peterson",
    "html_url": "https://github.com/zachary-peterson",
    "followers_url": "https://api.github.com/users/zachary-peterson/followers",
    "following_url": "https://api.github.com/users/zachary-peterson/following{/other_user}",
    "gists_url": "https://api.github.com/users/zachary-peterson/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/zachary-peterson/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/zachary-peterson/subscriptions",
    "organizations_url": "https://api.github.com/users/zachary-peterson/orgs",
    "repos_url": "https://api.github.com/users/zachary-peterson/repos",
    "events_url": "https://api.github.com/users/zachary-peterson/events{/privacy}",
    "received_events_url": "https://api.github.com/users/zachary-peterson/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Zachary Peterson",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 21,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2015-10-28T22:23:44Z",
    "updated_at": "2020-06-29T15:26:20Z"
  },
  {
    "login": "zachary-peterson",
    "id": 15370405,
    "node_id": "MDQ6VXNlcjE1MzcwNDA1",
    "avatar_url": "https://avatars0.githubusercontent.com/u/15370405?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/zachary-peterson",
    "html_url": "https://github.com/zachary-peterson",
    "followers_url": "https://api.github.com/users/zachary-peterson/followers",
    "following_url": "https://api.github.com/users/zachary-peterson/following{/other_user}",
    "gists_url": "https://api.github.com/users/zachary-peterson/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/zachary-peterson/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/zachary-peterson/subscriptions",
    "organizations_url": "https://api.github.com/users/zachary-peterson/orgs",
    "repos_url": "https://api.github.com/users/zachary-peterson/repos",
    "events_url": "https://api.github.com/users/zachary-peterson/events{/privacy}",
    "received_events_url": "https://api.github.com/users/zachary-peterson/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Zachary Peterson",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 21,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2015-10-28T22:23:44Z",
    "updated_at": "2020-06-29T15:26:20Z"
  },
  {
    "login": "zachary-peterson",
    "id": 15370405,
    "node_id": "MDQ6VXNlcjE1MzcwNDA1",
    "avatar_url": "https://avatars0.githubusercontent.com/u/15370405?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/zachary-peterson",
    "html_url": "https://github.com/zachary-peterson",
    "followers_url": "https://api.github.com/users/zachary-peterson/followers",
    "following_url": "https://api.github.com/users/zachary-peterson/following{/other_user}",
    "gists_url": "https://api.github.com/users/zachary-peterson/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/zachary-peterson/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/zachary-peterson/subscriptions",
    "organizations_url": "https://api.github.com/users/zachary-peterson/orgs",
    "repos_url": "https://api.github.com/users/zachary-peterson/repos",
    "events_url": "https://api.github.com/users/zachary-peterson/events{/privacy}",
    "received_events_url": "https://api.github.com/users/zachary-peterson/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Zachary Peterson",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 21,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2015-10-28T22:23:44Z",
    "updated_at": "2020-06-29T15:26:20Z"
  }
]

// Axios.get(myGitRepos)
// .then(function(suc){
//   console.log(suc);
//   // gitReposWork = suc;
//   gitCardMaker(myGitRepos);
// })
// .catch(function(err){
//   console.log(err);
// })

// console.log(Axios);

// Axios.get(followersArray)
// .then(function(suc){
//   gitMultiCardMaker(suc);
//   console.log('It worked')
// })
// .catch(function(err){
//   debugger
//   console.log('err');
// })
// debugger

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [{'https://api.github.com/users/tetondan'}, {'https://api.github.com/users/dustinmyers'}, {'https://api.github.com/users/justsml'}, {'https://api.github.com/users/luishrd'}, {'https://api.github.com/users/bigknell'}];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function gitCardMaker(object){
  const theCard = document.createElement('div');
  const cardImage = document.createElement('img');
  const cardInfoDiv = document.createElement('div');
  const cardHeading = document.createElement('h3');
  const cardUserName = document.createElement('p');
  const cardLocation = document.createElement('p');
  const cardProfile = document.createElement('p');
  const cardLink = document.createElement('a')
  const cardFollowers = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const cardBio = document.createElement('p');

  theCard.appendChild(cardImage);
  theCard.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(cardHeading);
  cardInfoDiv.appendChild(cardUserName);
  cardInfoDiv.appendChild(cardLocation);
  cardInfoDiv.appendChild(cardProfile);
  cardProfile.appendChild(cardLink);
  cardInfoDiv.appendChild(cardFollowers);
  cardInfoDiv.appendChild(cardFollowing);
  cardInfoDiv.appendChild(cardBio);
  

  theCard.classList.add('card');
  cardInfoDiv.classList.add('card-info');
  cardHeading.classList.add('name');
  cardUserName.classList.add('username');

  cardImage.src = object['avatar_url'];
  cardHeading.textContent = `${object.name}`;
  cardUserName.textContent = `${object.login}`;
  cardLocation.textContent = `Location: ${object.location}`;
  cardProfile.innerHTML = `Profile: <a href="${object['html_url']}">${object['html_url']}</a>`;

  cardFollowers.textContent = `Followers: ${object.followers}`;
  cardFollowing.textContent = `Following: ${object.following}`;
  cardBio.textContent = `Bio: ${object.bio}`;

  return theCard;
}

// buildIt.appendChild(gitCardMaker(runWithThis));

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

function gitMultiCardMaker(array){
  array.forEach(obj => {
    const theCard = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardInfoDiv = document.createElement('div');
    const cardHeading = document.createElement('h3');
    const cardUserName = document.createElement('p');
    const cardLocation = document.createElement('p');
    const cardProfile = document.createElement('p');
    const cardLink = document.createElement('a')
    const cardFollowers = document.createElement('p');
    const cardFollowing = document.createElement('p');
    const cardBio = document.createElement('p');

    theCard.appendChild(cardImage);
    theCard.appendChild(cardInfoDiv);
    cardInfoDiv.appendChild(cardHeading);
    cardInfoDiv.appendChild(cardUserName);
    cardInfoDiv.appendChild(cardLocation);
    cardInfoDiv.appendChild(cardProfile);
    cardProfile.appendChild(cardLink);
    cardInfoDiv.appendChild(cardFollowers);
    cardInfoDiv.appendChild(cardFollowing);
    cardInfoDiv.appendChild(cardBio);
    

    theCard.classList.add('card');
    cardInfoDiv.classList.add('card-info');
    cardHeading.classList.add('name');
    cardUserName.classList.add('username');

    cardImage.src = obj['avatar_url'];
    cardHeading.textContent = `${obj.name}`;
    cardUserName.textContent = `${obj.login}`;
    cardLocation.textContent = `Location: ${obj.location}`;
    cardProfile.innerHTML = `Profile: <a href="${obj['html_url']}">${obj['html_url']}</a>`;

    cardFollowers.textContent = `Followers: ${obj.followers}`;
    cardFollowing.textContent = `Following: ${obj.following}`;
    cardBio.textContent = `Bio: ${obj.bio}`;

    buildIt.appendChild(theCard);
  })
}

gitMultiCardMaker(listRunWithThis);
// gitMultiCardMaker(playingAround);