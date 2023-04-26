class Clock {
    constructor() {
      // 1. Create a Date object.
      const currentDate = new Date();
      // 2. Store the hours, minutes, and seconds.
      this.hours = currentDate.getHours();
      this.minutes = currentDate.getMinutes();
      this.seconds = currentDate.getSeconds();
      // 3. Call printTime.
      let time = printTime.call(currentDate, this.hours, this.minutes, this.seconds)
      // 4. Schedule the tick at 1 second intervals.
    }
  
    printTime() {
      // Format the time in HH:MM:SS
      const formattedTime = `${this.hours},${this.minutes},${this.seconds}`;
      // Use console.log to print it.
      console.log(formattedTime);
    }
  
    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
    }
  }
  
  const clock = new Clock();