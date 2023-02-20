export const getDays = async (props)  => {
    const endpoint = 'https://line-chat-bot-1114.herokuapp.com/webview/get_days'

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        mode: "cors",
        body: {},
    }
    const response = await fetch(endpoint, options)
    const result = await response.json()

    return result

}