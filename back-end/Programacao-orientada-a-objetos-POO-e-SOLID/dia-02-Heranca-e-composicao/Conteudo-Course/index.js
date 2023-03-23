
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (param) {
        console.log(param);
    };
    return ConsoleLogger;
}());
var ConsoleLogger2 = /** @class */ (function () {
    function ConsoleLogger2() {
    }
    ConsoleLogger2.prototype.log = function (param) {
        console.log('Logger2: ' + param);
    };
    return ConsoleLogger2;
}());
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase(logger) {
        if (logger === void 0) { logger = new ConsoleLogger(); }
        this.logger = logger;
    }
    ExampleDatabase.prototype.save = function (key, value) {
        this.logger.log("Salvando o valor ".concat(value, " na chave ").concat(key));
    };
    return ExampleDatabase;
}());
var logger1 = new ConsoleLogger();
var logger2 = new ConsoleLogger2();
var database1 = new ExampleDatabase(logger1);
var database2 = new ExampleDatabase(logger2);
var database3 = new ExampleDatabase();
database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');
