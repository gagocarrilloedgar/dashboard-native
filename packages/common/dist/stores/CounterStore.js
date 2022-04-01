"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterStoreContext = void 0;
var mobx_1 = require("mobx");
var react_1 = require("react");
var CounterStore = /** @class */ (function () {
    function CounterStore() {
        this.count = 0;
        (0, mobx_1.makeObservable)(this);
    }
    __decorate([
        mobx_1.observable
    ], CounterStore.prototype, "count", void 0);
    return CounterStore;
}());
exports.CounterStoreContext = (0, react_1.createContext)(new CounterStore());
