import A from "./a"
export default class B extends A {
  constructor(i: Number, public j: Number) {
    super(i);
  }
}