export default async function getPopularRepo(language) {
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
