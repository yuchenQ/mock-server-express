/** @format */

export default function getType(obj: object): string {
  return Reflect.apply(Object.prototype.toString, obj, []).replace(/^\[object\s(\w+)\]$/, '$1');
}
