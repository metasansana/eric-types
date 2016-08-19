'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Task is the parent class for all eric tasks, every task
 * must either inherit from it directly or via some sub class.
 * @param {FileSystem} fs 
 * @param {CommandRunner} runner 
 * @param {Context} context 
 */
var Task = function () {
    function Task(fs, runner, context) {
        _classCallCheck(this, Task);

        this.fs = fs;
        this.runner = runner;
        this.context = context;
        this.$args = null;
    }

    /**
     * setArgs changes the arguments provided to the command
     * @param {object} args 
     * @returns {Command}
     */


    _createClass(Task, [{
        key: 'setArgs',
        value: function setArgs(args) {

            this.$args = args;
            return this;
        }

        /**
         * @returns {Promise|null}
         */

    }, {
        key: 'run',
        value: function run() {}
    }, {
        key: 'execute',
        value: function execute() {
            var _this = this;

            return _bluebird2.default.resolve().then(function () {
                return _this.run();
            });
        }
    }]);

    return Task;
}();

exports.default = Task;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UYXNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUE7Ozs7Ozs7SUFPTSxJO0FBRUYsa0JBQVksRUFBWixFQUFnQixNQUFoQixFQUF3QixPQUF4QixFQUFpQztBQUFBOztBQUU3QixhQUFLLEVBQUwsR0FBVSxFQUFWO0FBQ0EsYUFBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLGFBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxhQUFLLEtBQUwsR0FBYSxJQUFiO0FBRUg7O0FBRUQ7Ozs7Ozs7OztnQ0FLUSxJLEVBQU07O0FBRVYsaUJBQUssS0FBTCxHQUFhLElBQWI7QUFDQSxtQkFBTyxJQUFQO0FBRUg7O0FBRUQ7Ozs7Ozs4QkFHTSxDQUVMOzs7a0NBRVM7QUFBQTs7QUFFTixtQkFBTyxtQkFBUSxPQUFSLEdBQ1AsSUFETyxDQUNGO0FBQUEsdUJBQU0sTUFBSyxHQUFMLEVBQU47QUFBQSxhQURFLENBQVA7QUFHSDs7Ozs7O2tCQUlVLEkiLCJmaWxlIjoiVGFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9taXNlIGZyb20gJ2JsdWViaXJkJztcblxuLyoqXG4gKiBUYXNrIGlzIHRoZSBwYXJlbnQgY2xhc3MgZm9yIGFsbCBlcmljIHRhc2tzLCBldmVyeSB0YXNrXG4gKiBtdXN0IGVpdGhlciBpbmhlcml0IGZyb20gaXQgZGlyZWN0bHkgb3IgdmlhIHNvbWUgc3ViIGNsYXNzLlxuICogQHBhcmFtIHtGaWxlU3lzdGVtfSBmcyBcbiAqIEBwYXJhbSB7Q29tbWFuZFJ1bm5lcn0gcnVubmVyIFxuICogQHBhcmFtIHtDb250ZXh0fSBjb250ZXh0IFxuICovXG5jbGFzcyBUYXNrIHtcblxuICAgIGNvbnN0cnVjdG9yKGZzLCBydW5uZXIsIGNvbnRleHQpIHtcblxuICAgICAgICB0aGlzLmZzID0gZnM7XG4gICAgICAgIHRoaXMucnVubmVyID0gcnVubmVyO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLiRhcmdzID0gbnVsbDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNldEFyZ3MgY2hhbmdlcyB0aGUgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBjb21tYW5kXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFyZ3MgXG4gICAgICogQHJldHVybnMge0NvbW1hbmR9XG4gICAgICovXG4gICAgc2V0QXJncyhhcmdzKSB7XG5cbiAgICAgICAgdGhpcy4kYXJncyA9IGFyZ3M7XG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge1Byb21pc2V8bnVsbH1cbiAgICAgKi9cbiAgICBydW4oKSB7XG5cbiAgICB9XG5cbiAgICBleGVjdXRlKCkge1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS5cbiAgICAgICAgdGhlbigoKSA9PiB0aGlzLnJ1bigpKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrXG4iXX0=