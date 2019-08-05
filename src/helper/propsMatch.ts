/** @format */
import getType from './getType';

export default function propsMatch<T>(target: T, input: T): boolean {
  const OPTIONAL_MARK = '$';

  const notMatch = Object.keys(target).find((key: string): boolean => {
    const targetVal = target[key];
    const pureKey = key.replace(OPTIONAL_MARK, '');

    if (key.includes(OPTIONAL_MARK) && !input[pureKey]) {
      return false;
    }

    const inputVal = input[pureKey];

    if (getType(targetVal) === 'Object') {
      return !propsMatch(targetVal, inputVal);
    }

    return targetVal !== getType(inputVal);
  });

  return !notMatch;
}
