let nestedObject = {
    id: 28802695164,
    date: 'Dec 31, 2016',
    data: {
      totalUsers: 99,
      online: 80,
      onlineStatus: {
        active: 67,
        away: 13,
        busy: 8
      }
    }
  };
  
  nestedObject.data.onlineStatus.busy = 10; //this was used to change the value of busy
  

  console.log(nestedObject);
