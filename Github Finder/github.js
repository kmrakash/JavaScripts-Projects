class Github {
  constructor() {
    this.client_id = "91d80459cbbdc7611805";
    this.client_secret_id = "6495d93903a958c47bba56bd2cf9df08dd96f5fb";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}$client_secret=${this.client_secret_id}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}$client_secret=${this.client_secret_id}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
