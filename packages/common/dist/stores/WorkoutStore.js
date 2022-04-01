"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutStoreContext = void 0;
var react_1 = require("react");
var WorkoutStore = /** @class */ (function () {
    function WorkoutStore() {
    }
    return WorkoutStore;
}());
exports.WorkoutStoreContext = (0, react_1.createContext)(new WorkoutStore());
