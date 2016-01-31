const name_array1= ['Webscale', 'Cloud', '10X', 'l33t', 'Hax0r', 'Ping', 'Big', 'Tiny', 'Hakka', 'Lazy', 'Agent'];
const name_array2= ['Intern', 'Money', 'Smith', 'MongoBongo', 'Designer', 'PM', 'Goose', 'lel', 'Fury'];

const events_array1 = ['Jam', 'Click', 'Type', 'Overflow', 'Delete', 'Upload', 'Toggle', 'Compile' , 'Magnify', 'Download', 'Twist', 'Buy', 'Charge', 'Hack'];
const events_array2 = ['the Government', 'Encryption', 'TCP' ,'Bufer', 'Linux','Articulator','Doge', '5Ghz', 'Memes', 'Nuclear Launch', 'Node', 'ASCII', 'GUI', 'Flux Capacitor', 'More RAM', 'Ping', 'Internet', 'Bandwidth', 'the Cloud', 'Quantum', 'Data', 'Ferrocore'];

module.exports = {
  
  generateRoomId: () => {
    const time = new Date().getTime();
    const salt = Math.random() * 1000;
    return new Buffer(Math.floor(time + salt).toString()).toString('base64');
  },
  
  generateUserName: () => {
    return name_array1[Math.floor(Math.random() * name_array1.length)] + 
    " " +
    name_array2[Math.floor(Math.random() * name_array2.length)]; 
  },
  
  generateRandomEvent: () => {
    return events_array1[Math.floor(Math.random() * events_array1.length)] + 
    " " +
    events_array2[Math.floor(Math.random() * events_array2.length)]; 
  },
  
  generateRandomEventsForUser: (num) => {
    if(num == undefined){
      num = 8;
    }
    var events = [];
    for(var i = 0; i < num; i++){
      events.push(module.exports.generateRandomEvent());
    }
    return events;
  },
  
  selectRandomEventAndUser: (eventArray, totalUsers) => {
    return [
      eventArray[Math.floor(Math.random() * eventArray.length)], //event
      Math.floor(Math.random() * totalUsers)]; //user with instruction
  }
};