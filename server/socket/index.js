class Socket {
  setIO(io) {
    this.io = io
    this.rooms = {}
    io.on("connection", socket => this.newConnection(socket));
    io.on("join", data => this.joinRoom(data))
  }
  newConnection(socket) {
    socket.emit("CONNECTED", {
      socket: socket.id,
      message: "Successfully Connected"
    });
  }

  joinRoom(data) {
    //FIXME this.io.join(data.)
  }

  notifyMessage(data) {
    this.io.emit('create', data)
  }


}


const socket = new Socket();

module.exports = socket