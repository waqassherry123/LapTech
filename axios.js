import axios from 'axios'
import humps from 'humps'


const instance = axios.create()

instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.defaults.headers.put['Content-Type'] = 'application/json'
instance.defaults.headers.patch['Content-Type'] = 'application/json'
instance.defaults.headers.get['Content-Type'] = 'application/json'

instance.interceptors.request.use(async (request) => {
    if (global.userEmail && global.userPassword && !request.headers.Authorization) {
        request.headers.authorization =
            'Basic ' + Buffer.from(`${global.userEmail}:${global.userPassword}`).toString('base64')
    }
    if (typeof Intl !== 'undefined')
        request.headers['X-Timezone'] = Intl.DateTimeFormat().resolvedOptions().timeZone
    if (request.data && typeof request.data !== 'string') {
        request.data = JSON.stringify(humps.decamelizeKeys(request.data))
    }
    return request
})
instance.interceptors.response.use((response) => {
    if (response.data) {
        return response.data
    }
})

export default instance