import  {io} from 'socket.io-client';

const socket = io('https://realtime-canvas-application.netlify.app', {
    reconnection: false
})

export default socket;