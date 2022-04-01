"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var expo_status_bar_1 = require("expo-status-bar");
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var CounterStore_1 = require("./stores/CounterStore");
exports.App = (0, mobx_react_lite_1.observer)(function () {
    var counterStore = (0, react_1.useContext)(CounterStore_1.CounterStoreContext);
    console.log(counterStore.count);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, null, "Open up App.tsx to start working on your app test!"),
        react_1.default.createElement(react_native_1.Button, { title: "increment", onPress: function () { return counterStore.count++; } }),
        react_1.default.createElement(react_native_1.Text, null, counterStore.count),
        react_1.default.createElement(expo_status_bar_1.StatusBar, { style: "auto" })));
});
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
