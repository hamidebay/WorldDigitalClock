function getTimeNewYork() {
    let newYorkDate = new Date();
    let newYork=newYorkDate.toLocaleTimeString("en-US", {
      timeZone:'America/New_York' });
      return newYork;
  }
  
  function getTimeTokyo() {
    let tokyoDate = new Date();
    let tokyo=tokyoDate.toLocaleTimeString("de-DE", {
      timeZone:'Asia/Tokyo' 
  })
    return tokyo;
  }

  function getTimeZurich() {
    let zurichDate = new Date();
    let zurich = zurichDate.toLocaleTimeString("en-GB", {
      timeZone: "Europe/Zurich",
    });
  
    return zurich;
  }