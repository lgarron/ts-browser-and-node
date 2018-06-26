import A from "./a"
export function makeAFromInt(i: Number) {
  return new A(i);
}
export function makeAFromString(s: string) {
  return makeAFromInt(parseInt(s));
}
export function getI(a: A) {
  return a.i;
}
