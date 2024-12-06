const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "W"},
    { year: "2012", result: "W"},
    { year: "2011", result: "N/A"},
    { year: "2010", result: "L"},
    { year: "2009", result: "W"},


  ]
  function superbowlWin(record) {
    const win = record.find(game => game.result === "W");    
        return win ? win.year : undefined;
  }
  
  console.log(superbowlWin(record));