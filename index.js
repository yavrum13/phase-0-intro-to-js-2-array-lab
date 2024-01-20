const cats = ["Milo","Otis","Garfield"];
/*const copyCats = ["Milo","Otis","Garfield"];*/

function destructivelyAppendCat(Ralph) {
  Ralph = cats.push('Ralph');
  return Ralph;
}
function destructivelyPrependCat(Bob) {
  Bob = cats.unshift('Bob');
  return Bob;
}

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}

function appendCat(Broom) {
  Broom = [...cats, 'Broom'];
  return Broom;
}

function prependCat(Arnold) {
  Arnold = ['Arnold', ...cats];
  return Arnold;
}

function removeLastCat() {
  const lastCat = cats.slice(0, -1);
  return lastCat;
}

function removeFirstCat() {
  const firstCat = cats.slice(1);
  return firstCat;
}
