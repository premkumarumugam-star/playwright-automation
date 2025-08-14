//Array concepts


const out=[];
console.log(out.length);  

let devices = [ 'Chrome','Firefox', 'Edge'];
console.log(devices);
console.log(devices[4]);
console.log(devices[10]);

devices[3]='apple';
devices[6]='orange';

console.log(devices);

let dev = 'premkumar';
console.log(dev.charAt(1));
console.log(dev.indexOf('k'));

let mixing = ['apple','ball','cat',15,16,20,true,false,['chrome','plate']];
console.log(mixing);
console.log(mixing[8]);

const getup = 'style,normal,middle';
const answ = getup.split(',');
console.log(answ);

console.log(answ.join(' '));


let adding= ['bmw','audi','vw'];
adding.push('virtus');
adding.push('skoda');
console.log(adding);
adding.pop();
console.log('After Pop '+adding);

adding.unshift('Maruti');
console.log(adding);
adding.shift();
console.log(adding);

let series = [1,3,5,2,4,6,8,7,9];
console.log(series.sort());

let copy1=['prem','kumar','standard'];
let copy2=[...copy1,'agila','saranya'];
console.log(copy1);
console.log(copy2);










