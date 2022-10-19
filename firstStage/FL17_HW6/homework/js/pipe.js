function isFunction(functionToCheck) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
  );
}

const pipe = (value, ...funcs) => {
  let res = value;
  for (let i = 0; i < funcs.length; i++) {
    try {
      if (isFunction(funcs[i])) {
        res = funcs[i](res);
      } else {
        throw (
          'Provided argument at position' + ' ' + i + ' ' + 'is not a function!'
        );
      }
    } catch (e) {
      console.error(e);
      return e;
    }
  }
  console.log(res);
  return res;
};

const replaceUnderscoreWithSpace = (value) => value.replace(/_/g, ' ');
const capitalize = (value) =>
  value
    .split(' ')
    .map((val) => val.charAt(0).toUpperCase() + val.slice(1))
    .join(' ');
const appendGreeting = (value) => `Hello, ${value}!`;

const error = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, '');

alert(error); 

const result = pipe(
  'john_doe',
  replaceUnderscoreWithSpace,
  capitalize,
  appendGreeting
);

alert(result); 
