"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clube = /** @class */ (function () {
    function Clube() {
        this.quadras = [];
    }
    Clube.prototype.adicionarQuadra = function (quadra) {
        this.quadras.push(quadra);
    };
    Clube.prototype.buscarQuadra = function (index) {
        return this.quadras[index];
    };
    return Clube;
}());
exports.default = Clube;
