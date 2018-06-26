(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./a"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const a_1 = require("./a");
    function makeAFromInt(i) {
        return new a_1.default(i);
    }
    exports.makeAFromInt = makeAFromInt;
    function makeAFromString(s) {
        return makeAFromInt(parseInt(s));
    }
    exports.makeAFromString = makeAFromString;
    function getI(a) {
        return a.i;
    }
    exports.getI = getI;
});
