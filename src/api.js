export async function getPopularRepo(language) {
  try {
    const response = await fetch(
      'https://api.github.com/search/repositories?q=stars:>1+language:' +
        language +
        '&sort=stars&order=desc&type=Repositories'
    );
    return response.ok && (await response.json());
  } catch (err) {
    console.error(err);
  }
}

export async function getUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    return response.ok && (await response.json());
  } catch (error) {
    console.log(error);
  }
}

export async function getRepos(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    return response.ok && (await response.json());
  } catch (error) {
    console.log(error);
  }
}
