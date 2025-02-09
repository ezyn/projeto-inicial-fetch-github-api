const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data"
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                            <p>👥 Seguidores: ${user.followers ?? 'Não possui seguidores cadastrados'}</p>
                                            <p>🔄 Seguindo: ${user.following ?? 'Não segue ninguém'}</p>
                                        </div>
                                    </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>🗂️ Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventsList = ''
        user.events.forEach(event => {
            if (event.type === "PushEvent"){
                eventsList += `<li><strong>${event.repo.name}</strong>: ${event.payload.commits?.[0]?.message ?? 'Sem mensagem de commit'}</li>`
            }else if (event.type === "CreatEvent") {
                eventsList += `<li><strong>${event.repo.name}</strong>: 'Sem mensagem de commit'</li>`
            }
        })

        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>📋 Eventos</h2><br>
                                                <ul>${eventsList}</ul>
                                           </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }