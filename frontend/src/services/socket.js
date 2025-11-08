import { io } from 'socket.io-client'

const socket = io('https://full-stack-blogs-application.vercel.app/',{
    withCredentails: true,
    transports: ['websocket','polling']
})

export default socket