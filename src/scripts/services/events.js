import { baseUrl } from "../variables.js"

async function getUserEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events`)
    const events = await response.json()

    return events
        .filter(event => event.type === "PushEvent" || event.type === "CreateEvent")
        .slice(0, 10)
}

export { getUserEvents }
