Function.prototype.myBind = function(arg)  {
    return () => this.apply(arg);
}



class Lamp {
  constructor(name) {
    this.name = name;
  }
}

const turnOn = function() {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp("lamp1");
// debugger
const lamp2 = new Lamp("lamp2");
debugger
turnOn(); // should not work the way we want it to
debugger
const boundTurnOn = turnOn.bind(lamp);
debugger
const myBoundTurnOn = turnOn.myBind(lamp2);
debugger

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"