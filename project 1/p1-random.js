/*
    CIT 281 Project 1
    Name: Winjin Chen
*/

//Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alp = 'abcdefghijklmnopqrstuvwxyz'


const Letters = (length) => {
    const al = Array.from({length}, () => alp[Math.floor(Math.random() * alp.length)]).join('');
    console.log(al);
};

Letters(getRandomInteger(5, 25));