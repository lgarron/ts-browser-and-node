import A from "a";
import B from "b";
import {C, getI} from "c";

var b = new B(3, 4);
console.log(getI(b) == 3);
console.log(b instanceof A);
var c = new C(5);
c.increment();
console.log(getI(c) == 6);