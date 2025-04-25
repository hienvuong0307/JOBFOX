import { ref } from 'vue';
import { useFetch } from 'nuxt/app';
const token = '';
const domain = import.meta.env.DOMAIN || 'http://160.30.252.13:8000'

export default {
    async get (uri, query = null) {
        return await useFetch(`${domain}${uri}`, {
            onRequest({ request, options }) {
                if (token)
                    options.headers.set('Authorization', `Bearer ${token}`)
                if(query)
                    options.query = query
            },
            method: 'GET',
            server: true
        })
    },
    async post (uri, data) {
        return await useFetch(`${domain}${uri}`, {
            onRequest({ request, options }) {
                if (token)
                    options.headers.set('Authorization', `Bearer ${token}`)
                options.body = data
            },
            method: 'POST',
            server: true
        })
    }
}