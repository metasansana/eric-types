'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _Task2 = require('./Task');

var _Task3 = _interopRequireDefault(_Task2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Generator 
 */
var Generator = function (_Task) {
    _inherits(Generator, _Task);

    function Generator(fs, runner, context) {
        _classCallCheck(this, Generator);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Generator).call(this, fs, runner, context));

        _this._pending = [];
        _this.templatePath = 'eric/templates';
        _this.files = {};
        _this.filters = {};
        _this.engine = new _nunjucks2.default.Environment(new _nunjucks2.default.FileSystemLoader(_this.templatePath));
        Object.keys(_this.filters).forEach(function (k) {
            return _this.engine.addFilter(k, _this.filters[k]);
        });

        return _this;
    }

    /**
     * file queues up a file to generate
     * @param {string} file 
     * @param {string} template 
     * @param {object} context 
     */


    _createClass(Generator, [{
        key: 'file',
        value: function file(_file, template, context) {
            var _this2 = this;

            this._pending.push(this.fs.readFile(_path2.default.join(this.templatePath, template)).then(function (tmpl) {
                return _this2.engine.renderString(tmpl.contents, context, function (err, res) {

                    if (err) {

                        console.error('Generator:');
                        console.error(err.stack);
                        process.exit(-1);
                    }

                    _this2.files[_file] = res;
                });
            }));
        }
    }, {
        key: 'execute',
        value: function execute() {
            var _this3 = this;

            this.run();

            return Promise.all(this._pending).then(function () {
                return Promise.all(Object.keys(_this3.files).map(function (k) {
                    return _this3.fs.writeFile(k, _this3.files[k]);
                }));
            });
        }
    }]);

    return Generator;
}(_Task3.default);

exports.default = Generator;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9HZW5lcmF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTSxTOzs7QUFFRix1QkFBWSxFQUFaLEVBQWdCLE1BQWhCLEVBQXdCLE9BQXhCLEVBQWlDO0FBQUE7O0FBQUEsaUdBRXZCLEVBRnVCLEVBRW5CLE1BRm1CLEVBRVgsT0FGVzs7QUFHN0IsY0FBSyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsY0FBSyxZQUFMLEdBQW9CLGdCQUFwQjtBQUNBLGNBQUssS0FBTCxHQUFhLEVBQWI7QUFDQSxjQUFLLE9BQUwsR0FBZSxFQUFmO0FBQ0EsY0FBSyxNQUFMLEdBQWMsSUFBSSxtQkFBUyxXQUFiLENBQXlCLElBQUksbUJBQVMsZ0JBQWIsQ0FBOEIsTUFBSyxZQUFuQyxDQUF6QixDQUFkO0FBQ0EsZUFBTyxJQUFQLENBQVksTUFBSyxPQUFqQixFQUEwQixPQUExQixDQUFrQztBQUFBLG1CQUFLLE1BQUssTUFBTCxDQUFZLFNBQVosQ0FBc0IsQ0FBdEIsRUFBeUIsTUFBSyxPQUFMLENBQWEsQ0FBYixDQUF6QixDQUFMO0FBQUEsU0FBbEM7O0FBUjZCO0FBVWhDOztBQUVEOzs7Ozs7Ozs7OzZCQU1LLEssRUFBTSxRLEVBQVUsTyxFQUFTO0FBQUE7O0FBRTFCLGlCQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLEtBQUssRUFBTCxDQUFRLFFBQVIsQ0FBaUIsZUFBSyxJQUFMLENBQVUsS0FBSyxZQUFmLEVBQTZCLFFBQTdCLENBQWpCLEVBQXlELElBQXpELENBQThEO0FBQUEsdUJBQzdFLE9BQUssTUFBTCxDQUFZLFlBQVosQ0FBeUIsS0FBSyxRQUE5QixFQUF3QyxPQUF4QyxFQUFpRCxVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQWM7O0FBRTNELHdCQUFJLEdBQUosRUFBUzs7QUFFTCxnQ0FBUSxLQUFSLENBQWMsWUFBZDtBQUNBLGdDQUFRLEtBQVIsQ0FBYyxJQUFJLEtBQWxCO0FBQ0EsZ0NBQVEsSUFBUixDQUFhLENBQUMsQ0FBZDtBQUVIOztBQUVELDJCQUFLLEtBQUwsQ0FBVyxLQUFYLElBQW1CLEdBQW5CO0FBRUgsaUJBWkQsQ0FENkU7QUFBQSxhQUE5RCxDQUFuQjtBQWVIOzs7a0NBRVM7QUFBQTs7QUFFTixpQkFBSyxHQUFMOztBQUVBLG1CQUFPLFFBQVEsR0FBUixDQUFZLEtBQUssUUFBakIsRUFDUCxJQURPLENBQ0Y7QUFBQSx1QkFBTSxRQUFRLEdBQVIsQ0FBWSxPQUFPLElBQVAsQ0FBWSxPQUFLLEtBQWpCLEVBQXdCLEdBQXhCLENBQTRCO0FBQUEsMkJBQy9DLE9BQUssRUFBTCxDQUFRLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUIsT0FBSyxLQUFMLENBQVcsQ0FBWCxDQUFyQixDQUQrQztBQUFBLGlCQUE1QixDQUFaLENBQU47QUFBQSxhQURFLENBQVA7QUFLSDs7Ozs7O2tCQUlVLFMiLCJmaWxlIjoiR2VuZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgbnVuanVja3MgZnJvbSAnbnVuanVja3MnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJztcblxuLyoqXG4gKiBHZW5lcmF0b3IgXG4gKi9cbmNsYXNzIEdlbmVyYXRvciBleHRlbmRzIFRhc2sge1xuXG4gICAgY29uc3RydWN0b3IoZnMsIHJ1bm5lciwgY29udGV4dCkge1xuXG4gICAgICAgIHN1cGVyKGZzLCBydW5uZXIsIGNvbnRleHQpO1xuICAgICAgICB0aGlzLl9wZW5kaW5nID0gW107XG4gICAgICAgIHRoaXMudGVtcGxhdGVQYXRoID0gJ2VyaWMvdGVtcGxhdGVzJztcbiAgICAgICAgdGhpcy5maWxlcyA9IHt9O1xuICAgICAgICB0aGlzLmZpbHRlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBuZXcgbnVuanVja3MuRW52aXJvbm1lbnQobmV3IG51bmp1Y2tzLkZpbGVTeXN0ZW1Mb2FkZXIodGhpcy50ZW1wbGF0ZVBhdGgpKTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5maWx0ZXJzKS5mb3JFYWNoKGsgPT4gdGhpcy5lbmdpbmUuYWRkRmlsdGVyKGssIHRoaXMuZmlsdGVyc1trXSkpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZmlsZSBxdWV1ZXMgdXAgYSBmaWxlIHRvIGdlbmVyYXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IFxuICAgICAqL1xuICAgIGZpbGUoZmlsZSwgdGVtcGxhdGUsIGNvbnRleHQpIHtcblxuICAgICAgICB0aGlzLl9wZW5kaW5nLnB1c2godGhpcy5mcy5yZWFkRmlsZShwYXRoLmpvaW4odGhpcy50ZW1wbGF0ZVBhdGgsIHRlbXBsYXRlKSkudGhlbih0bXBsID0+XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZW5kZXJTdHJpbmcodG1wbC5jb250ZW50cywgY29udGV4dCwgKGVyciwgcmVzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignR2VuZXJhdG9yOicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjayk7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgtMSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVzW2ZpbGVdID0gcmVzXG5cbiAgICAgICAgICAgIH0pKSk7XG5cbiAgICB9XG5cbiAgICBleGVjdXRlKCkge1xuXG4gICAgICAgIHRoaXMucnVuKCk7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuX3BlbmRpbmcpLlxuICAgICAgICB0aGVuKCgpID0+IFByb21pc2UuYWxsKE9iamVjdC5rZXlzKHRoaXMuZmlsZXMpLm1hcChrID0+XG4gICAgICAgICAgICB0aGlzLmZzLndyaXRlRmlsZShrLCB0aGlzLmZpbGVzW2tdKSkpKTtcblxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdlbmVyYXRvclxuIl19