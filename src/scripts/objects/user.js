const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    events: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories){
        // console.log(repositories);
        
        this.repositories = repositories.map(repo => ({
            name: repo.name,
            html_url: repo.html_url,
            forks: repo.forks,
            stars: repo.stars,
            watchers: repo.watchers,
            language: repo.language
        }))
    },
    setEvents(events){
        this.events = events
    }
}

export { user }