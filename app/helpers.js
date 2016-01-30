module.exports = {
  name_array1: ['Webscale', 'Cloud', '10X', 'VC', 'Visual Studio', 'Ping', 'Big Data', 'Machine Learning', 'IoT', 'Responsive'],
  name_array2: ['Intern', 'Money', 'GUI', 'Mongo', 'Designer', 'PM', 'Goose'],
  
  generateRoomId: () => {
    const time = new Date().getTime();
    const salt = Math.random() * 1000;
    return new Buffer(Math.floor(time + salt).toString()).toString('base64');
  },
  
  generateUserName: () => {
    return this.name_array1[Math.floor(Math.random() * this.name_array1.length)] + 
    " " +
    this.name_array2[Math.floor(Math.random() * this.name_array2.length)]; 
  },
  
  generateRandomEvent: () => {
    
  }
};