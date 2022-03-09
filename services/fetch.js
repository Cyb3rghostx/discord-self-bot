import fetch from 'node-fetch'

const fetchService = {
    get(url, headers, data = {}) {
        return fetch(url, { 
            method: "GET",
            headers: headers
        })
    },
    post(url, headers, data = {}) {
        return fetch(url, { 
            method: "POST",
            body: JSON.stringify(data),
            headers: headers    
        })
    },
    put(url, data = {}) {
        console.log('fetch put...')
    },
    delete(url, data = {}) {
        console.log('fetch delete...')
    }
}

export default fetchService;