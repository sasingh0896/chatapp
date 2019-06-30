

var clientSocket = io.connect('http://localhost:4000');
const socket = io('/my-namespace');
clientSocket.on('chat', function(data){
    console.log(data)}
)