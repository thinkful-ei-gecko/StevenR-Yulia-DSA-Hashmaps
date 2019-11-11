const HashMap = require('./HashMap');

function main() {
  const lotr = new HashMap;

  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandolf');
  lotr.set('Human', 'Aragon');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');
  //return lotr.get('Maiar');
  //return lotr.get('Hobbit');
  return lotr;
}

//when we insert key-value with existing key, we reasign value. That is why only 
//have 9 out of 11 key/value pairs
//Since Frodo was inserted after Bilbo key 'Hobbit' corresponds 'Frodo'
//Same for key 'Maiar', value The Necromancer became 'Sauron'

// console.log(main());

// 2. This code produces 2 values (20, 10) while only having 1 key value.

const WhatDoesThisDo = function(){
  let str1 = 'Hello World.'; // assign string value 1 to Hello World
  let str2 = 'Hello World.'; // assign string value 2 to Hello World
  let map1 = new HashMap(); // creating new instance of HashMap
  map1.set(str1,10); // create key value where Hello World is the key and 10 is the value
  map1.set(str2,20); // rewrite value to 20
  let map2 = new HashMap(); // create new instance for HashMap
  let str3 = str1; // string 3 has Hello World as value
  let str4 = str2; // string 4 has Hello World as value
  map2.set(str3,20); // key is Hello World and value is 20
  map2.set(str4,10); // reassign key Hello World to value 10

  console.log(map1.get(str1));
  console.log(map2.get(str3));
}
console.log(WhatDoesThisDo())

// 3. Our hashmap would look like 22, 10 88, empty, 4, 15, 28, 17, 59, 31 empty