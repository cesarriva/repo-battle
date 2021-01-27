const id = '60cae75188e4921514ae';
const secret = '80f181acea4b790d594763021aa1f93e1dd63ef8';
const params = `?client_id=${id}&client_secret=${secret};`

export const fetchPopularRepositories = (language) => {
  const endpoint = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  return fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      if (!data.items) {
        throw new Error(data.message);
      }
      return data.items;
    });
};

export const battle = (players) => {
  return Promise.all([
    getUserData(players[0]),
    getUserData(players[1])
  ]).then(results => sortPlayers(results));
};

const getUserData = (player) => {
  return Promise.all([
    getProfile(player),
    getRepositoryByUser(player)
  ]).then(([profile, repositories]) => ({
    profile,
    score: calculateScore(profile.followers, repositories)
  }))
};

const getProfile = (userName) => {
  return fetch(`https://api.github.com/users/${userName}${params}`)
    .then(res => res.json())
    .then(profile => {
      if (profile.message) {
        throw new Error(getErrorMessage(profile.message, userName));
      }
      return profile;
    });
};

const getRepositoryByUser = (userName) => {
  return fetch(`https://api.github.com/users/${userName}/repos${params}&per_page=100`)
    .then(res => res.json())
    .then(repositories => {
      if (repositories.message) {
        throw new Error(getErrorMessage(repositories.message, userName));
      }

      return repositories;
    })
};

const calculateScore = (followers, repositories) => {
  const score = (followers * 3) + getStarCount(repositories);
  return score;
};

const getStarCount = (repositories) => {
  return repositories.reduce((count, { stargazers_count }) => count + stargazers_count, 0)
};

const sortPlayers = (players) => {
  return players.sort((one, two) => two.score - one.score);
};

const getErrorMessage = (message, userName) => {
  if (message === 'Not Found') {
    return `${userName} does not exist`
  }
  return message;
};