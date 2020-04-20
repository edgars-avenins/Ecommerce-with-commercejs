import request from 'superagent'

export default function start(){
    return request
        .get('/v1/api')
        .then(res => {
            process.env.API_KEY = res.text
            return
        })
}