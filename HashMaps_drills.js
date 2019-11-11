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

console.log(main());