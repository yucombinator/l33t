module.exports = {
  generateRoomId: function() {
    const time = new Date().getTime();
    const salt = Math.random() * 1000;
    return new Buffer(Math.floor(time + salt).toString()).toString('base64');
  },
  
  generateRandomEvent: function() {
    
  }
};