"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var normasDeUso_1 = require("./normas/normasDeUso");
var Quadra_1 = require("./Quadra");
var QuadraFutebol = /** @class */ (function (_super) {
    __extends(QuadraFutebol, _super);
    function QuadraFutebol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.futebolData = normasDeUso_1.default.futebol;
        return _this;
    }
    QuadraFutebol.prototype.reservar = function (horaReserva) {
        var protocolo = (Math.random() + 1).toString(30).substring(3);
        return {
            protocolo: protocolo,
            data: horaReserva,
            regras: this.futebolData,
        };
    };
    return QuadraFutebol;
}(Quadra_1.default));
exports.default = QuadraFutebol;
