import { baseUrl, repositoriesQuantity } from "../variables.js"

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    const repositories = await response.json()
    // return response.json()

    return repositories.map(repo => ({
        name: repo.name,
        html_url: repo.html_url,
        forks: repo.forks,
        stars: repo.stargazers_count,
        watchers: repo.watchers,
        language: repo.language ?? "Não especificado"
    }))
}

export { getRepositories }