(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _TimeInput = require('../../src/components/TimeInput.js');

var _TimeInput2 = _interopRequireDefault(_TimeInput);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_TimeInput2.default, null), document.getElementById("container")); /**
                                                                                                                            * Created by krock on 1/11/17.
                                                                                                                            */

},{"../../src/components/TimeInput.js":3,"react":undefined,"react-dom":undefined}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('./constants.js');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by krock on 1/13/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TimeDetail = function (_React$Component) {
    _inherits(TimeDetail, _React$Component);

    function TimeDetail(props) {
        _classCallCheck(this, TimeDetail);

        var _this = _possibleConstructorReturn(this, (TimeDetail.__proto__ || Object.getPrototypeOf(TimeDetail)).call(this, props));

        _this.time = props.time;
        _this.select = _this.select.bind(_this);
        return _this;
    }

    _createClass(TimeDetail, [{
        key: 'select',
        value: function select(e) {
            this.time[this.props.timeType] = e.target.textContent.trim();
            this.props.userSelect(this.time);
            this.props.userSubMode('Time');
        }
    }, {
        key: 'render',
        value: function render() {

            var times = _constants2.default[this.props.timeType];
            var rows = [];
            for (var i = 0; i < times.length; i++) {
                var tds = [];
                for (var k = 0; k < times[i].length; k++) {
                    tds.push(_react2.default.createElement(
                        'td',
                        { key: 'td' + k, onClick: this.select },
                        times[i][k]
                    ));
                }
                rows.push(_react2.default.createElement(
                    'tr',
                    { key: 'tr' + i },
                    tds
                ));
            }
            return _react2.default.createElement(
                'table',
                { className: 'detail' },
                _react2.default.createElement(
                    'tbody',
                    null,
                    rows
                )
            );
        }
    }]);

    return TimeDetail;
}(_react2.default.Component);

;
module.exports = TimeDetail;

},{"./constants.js":5,"react":undefined}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TimeSelect = require('./TimeSelect.js');

var _TimeSelect2 = _interopRequireDefault(_TimeSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by krock on 1/13/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var TimeInput = function (_React$Component) {
    _inherits(TimeInput, _React$Component);

    function TimeInput(props) {
        _classCallCheck(this, TimeInput);

        var _this = _possibleConstructorReturn(this, (TimeInput.__proto__ || Object.getPrototypeOf(TimeInput)).call(this, props));

        _this.state = {
            isOpen: false,
            showSub: 'Time',
            time: _this.nowTime()
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleCancel = _this.handleCancel.bind(_this);
        _this.userSubMode = _this.userSubMode.bind(_this);
        _this.userSelect = _this.userSelect.bind(_this);
        return _this;
    }

    _createClass(TimeInput, [{
        key: 'handleClick',
        value: function handleClick() {
            this.setState({ isOpen: true });
        }
    }, {
        key: 'handleCancel',
        value: function handleCancel() {
            this.setState({ isOpen: false });
        }
    }, {
        key: 'showPop',
        value: function showPop() {
            if (!this.state.isOpen) return null;
            return _react2.default.createElement(_TimeSelect2.default, {
                showSub: this.state.showSub,
                time: this.state.time,
                userSubMode: this.userSubMode,
                userSelect: this.userSelect
            });
        }
    }, {
        key: 'renderBlock',
        value: function renderBlock() {
            if (!this.state.isOpen) return null;
            return _react2.default.createElement('div', { className: 'blockout', onClick: this.handleCancel });
        }
    }, {
        key: 'nowTime',
        value: function nowTime() {
            var time = new Date();
            var minite = time.getMinutes();
            minite = minite < 10 ? '0' + minite : minite;
            return {
                hour: time.getHours(),
                minite: minite
            };
        }
    }, {
        key: 'userSubMode',
        value: function userSubMode(showSub) {
            this.setState({
                showSub: showSub
            });
        }
    }, {
        key: 'userSelect',
        value: function userSelect(time) {
            this.setState({
                time: time
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'timeInput' },
                _react2.default.createElement('input', { type: 'text', value: this.state.time.hour + ':' + this.state.time.minite, ref: 'timeInput', readOnly: true, className: 'input-middle' }),
                _react2.default.createElement('span', { className: 'iconfont icon-shijian', onClick: this.handleClick }),
                this.showPop(),
                this.renderBlock()
            );
        }
    }]);

    return TimeInput;
}(_react2.default.Component);

module.exports = TimeInput;

},{"./TimeSelect.js":4,"react":undefined}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('./constants.js');

var _constants2 = _interopRequireDefault(_constants);

var _TimeDetail = require('./TimeDetail.js');

var _TimeDetail2 = _interopRequireDefault(_TimeDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by krock on 1/11/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TimeSelect = function (_React$Component) {
    _inherits(TimeSelect, _React$Component);

    function TimeSelect(props) {
        _classCallCheck(this, TimeSelect);

        var _this = _possibleConstructorReturn(this, (TimeSelect.__proto__ || Object.getPrototypeOf(TimeSelect)).call(this, props));

        _this.changeMinutes = _this.changeMinutes.bind(_this);
        _this.changeHour = _this.changeHour.bind(_this);
        _this.showHour = _this.showHour.bind(_this);
        _this.showMinites = _this.showMinites.bind(_this);
        return _this;
    }

    _createClass(TimeSelect, [{
        key: 'changeMinutes',
        value: function changeMinutes(e) {
            var numM = parseInt(this.props.time.minite);
            var numH = parseInt(this.props.time.hour);
            var time = {};
            if (Array.from(e.target.classList).indexOf('icon-jiantoushang') >= 0) {
                if (numM !== 59) {
                    numM = numM + 1;
                } else {
                    numM = 0;
                    numH = numH === 23 ? 0 : numH + 1;
                }
            } else {
                if (numM !== 0) {
                    numM = numM - 1;
                } else {
                    numM = 59;
                    numH = numH === 0 ? 23 : numH - 1;
                }
            }
            time.hour = numH < 10 ? '0' + numH : numH;
            time.minite = numM < 10 ? '0' + numM : numM;

            this.props.userSelect(time);
        }
    }, {
        key: 'changeHour',
        value: function changeHour(e) {
            var numH = parseInt(this.props.time.hour);
            var time = {
                minite: this.props.time.minite
            };
            if (Array.from(e.target.classList).indexOf('icon-jiantoushang') >= 0) {
                numH = numH === 23 ? numH = 0 : numH + 1;
            } else {
                numH = numH === 0 ? numH = 23 : numH - 1;
            }
            time.hour = numH < 10 ? '0' + numH : numH;
            this.props.userSelect(time);
        }
    }, {
        key: 'showHour',
        value: function showHour() {
            this.props.userSubMode('Hour');
        }
    }, {
        key: 'showMinites',
        value: function showMinites() {
            this.props.userSubMode('Minites');
        }
    }, {
        key: 'renderHour',
        value: function renderHour() {
            if (this.props.showSub !== 'Hour') return null;
            return _react2.default.createElement(_TimeDetail2.default, { timeType: 'hour', time: this.props.time, userSubMode: this.props.userSubMode, userSelect: this.props.userSelect });
        }
    }, {
        key: 'renderMinites',
        value: function renderMinites() {
            if (this.props.showSub !== 'Minites') return null;
            return _react2.default.createElement(_TimeDetail2.default, { timeType: 'minite', time: this.props.time, userSubMode: this.props.userSubMode, userSelect: this.props.userSelect });
        }
    }, {
        key: 'renderTime',
        value: function renderTime() {
            if (this.props.showSub !== 'Time') return null;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'table',
                    { className: 'time' },
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                { onClick: this.changeHour },
                                _react2.default.createElement('strong', { className: 'iconfont icon-jiantoushang' })
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                ' '
                            ),
                            _react2.default.createElement(
                                'td',
                                { onClick: this.changeMinutes },
                                _react2.default.createElement('strong', { className: 'iconfont icon-jiantoushang' })
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                { onClick: this.showHour },
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    ' ',
                                    this.props.time.hour,
                                    ' '
                                )
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                ' : '
                            ),
                            _react2.default.createElement(
                                'td',
                                { onClick: this.showMinites },
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    ' ',
                                    this.props.time.minite,
                                    ' '
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                { onClick: this.changeHour },
                                _react2.default.createElement('strong', { className: 'iconfont icon-jiantouxia' })
                            ),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement(
                                'td',
                                { onClick: this.changeMinutes },
                                _react2.default.createElement('strong', { className: 'iconfont icon-jiantouxia' })
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'pop ' },
                this.renderTime(),
                this.renderHour(),
                this.renderMinites()
            );
        }
    }]);

    return TimeSelect;
}(_react2.default.Component);

module.exports = TimeSelect;

},{"./TimeDetail.js":2,"./constants.js":5,"react":undefined}],5:[function(require,module,exports){
'use strict';

/**
 * Created by krock on 1/13/17.
 */

exports.hour = [['00', '01', '02', '03'], ['04', '05', '06', '07'], ['08', '09', '10', '11'], ['12', '13', '14', '15'], ['16', '17', '18', '19'], ['20', '21', '22', '23']];
exports.minite = [['00', '05', '10', '15'], ['20', '25', '30', '35'], ['40', '45', '50', '55']];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvamF2YXNjcmlwdHMvc2l0ZS5qcyIsInNyYy9jb21wb25lbnRzL1RpbWVEZXRhaWwuanMiLCJzcmMvY29tcG9uZW50cy9UaW1lSW5wdXQuanMiLCJzcmMvY29tcG9uZW50cy9UaW1lU2VsZWN0LmpzIiwic3JjL2NvbXBvbmVudHMvY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLG1CQUFTLE1BQVQsQ0FBZ0Isd0RBQWhCLEVBQThCLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQUE5QixFLENBUkE7Ozs7Ozs7OztBQ0dBOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBSkE7Ozs7O0lBTU0sVTs7O0FBQ0Ysd0JBQVksS0FBWixFQUFrQjtBQUFBOztBQUFBLDRIQUNSLEtBRFE7O0FBRWQsY0FBSyxJQUFMLEdBQVksTUFBTSxJQUFsQjtBQUNBLGNBQUssTUFBTCxHQUFjLE1BQUssTUFBTCxDQUFZLElBQVosT0FBZDtBQUhjO0FBSWpCOzs7OytCQUVNLEMsRUFBRTtBQUNMLGlCQUFLLElBQUwsQ0FBVSxLQUFLLEtBQUwsQ0FBVyxRQUFyQixJQUErQixFQUFFLE1BQUYsQ0FBUyxXQUFULENBQXFCLElBQXJCLEVBQS9CO0FBQ0EsaUJBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsS0FBSyxJQUEzQjtBQUNBLGlCQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXVCLE1BQXZCO0FBQ0g7OztpQ0FDTzs7QUFFSixnQkFBSSxRQUFRLG9CQUFVLEtBQUssS0FBTCxDQUFXLFFBQXJCLENBQVo7QUFDQSxnQkFBSSxPQUFLLEVBQVQ7QUFDQSxpQkFBSSxJQUFJLElBQUUsQ0FBVixFQUFZLElBQUUsTUFBTSxNQUFwQixFQUEyQixHQUEzQixFQUErQjtBQUMzQixvQkFBSSxNQUFJLEVBQVI7QUFDQSxxQkFBSSxJQUFJLElBQUUsQ0FB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QkFESjtBQUVJLHFFQUZKO0FBR0k7QUFBQTtBQUFBLGtDQUFJLFNBQVMsS0FBSyxhQUFsQjtBQUFpQywwRUFBUSxXQUFVLDBCQUFsQjtBQUFqQztBQUhKO0FBWEE7QUFESztBQUFOLGFBQVA7QUFtQkg7OztpQ0FDTztBQUNKLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLE1BQWY7QUFDSyxxQkFBSyxVQUFMLEVBREw7QUFFSyxxQkFBSyxVQUFMLEVBRkw7QUFHSyxxQkFBSyxhQUFMO0FBSEwsYUFESjtBQU9IOzs7O0VBM0ZvQixnQkFBTSxTOztBQTZGL0IsT0FBTyxPQUFQLEdBQWlCLFVBQWpCOzs7OztBQ3BHQTs7OztBQUlBLFFBQVEsSUFBUixHQUFjLENBQUMsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLElBQVgsRUFBZ0IsSUFBaEIsQ0FBRCxFQUF1QixDQUFDLElBQUQsRUFBTSxJQUFOLEVBQVcsSUFBWCxFQUFnQixJQUFoQixDQUF2QixFQUE2QyxDQUFDLElBQUQsRUFBTSxJQUFOLEVBQVcsSUFBWCxFQUFnQixJQUFoQixDQUE3QyxFQUFtRSxDQUFDLElBQUQsRUFBTSxJQUFOLEVBQVcsSUFBWCxFQUFnQixJQUFoQixDQUFuRSxFQUF5RixDQUFDLElBQUQsRUFBTSxJQUFOLEVBQVcsSUFBWCxFQUFnQixJQUFoQixDQUF6RixFQUErRyxDQUFDLElBQUQsRUFBTSxJQUFOLEVBQVcsSUFBWCxFQUFnQixJQUFoQixDQUEvRyxDQUFkO0FBQ0EsUUFBUSxNQUFSLEdBQWlCLENBQUMsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLElBQVgsRUFBZ0IsSUFBaEIsQ0FBRCxFQUF1QixDQUFDLElBQUQsRUFBTSxJQUFOLEVBQVcsSUFBWCxFQUFnQixJQUFoQixDQUF2QixFQUE2QyxDQUFDLElBQUQsRUFBTSxJQUFOLEVBQVcsSUFBWCxFQUFnQixJQUFoQixDQUE3QyxDQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIENyZWF0ZWQgYnkga3JvY2sgb24gMS8xMS8xNy5cbiAqL1xuXG5pbXBvcnQgVGltZUlucHV0IGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL1RpbWVJbnB1dC5qcydcbmltcG9ydCBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuUmVhY3REb20ucmVuZGVyKDxUaW1lSW5wdXQgLz4sZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIikpOyIsIi8qKlxuICogQ3JlYXRlZCBieSBrcm9jayBvbiAxLzEzLzE3LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5cbmNsYXNzIFRpbWVEZXRhaWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMudGltZSA9IHByb3BzLnRpbWU7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gdGhpcy5zZWxlY3QuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZWxlY3QoZSl7XG4gICAgICAgIHRoaXMudGltZVt0aGlzLnByb3BzLnRpbWVUeXBlXT1lLnRhcmdldC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgIHRoaXMucHJvcHMudXNlclNlbGVjdCh0aGlzLnRpbWUpO1xuICAgICAgICB0aGlzLnByb3BzLnVzZXJTdWJNb2RlKCdUaW1lJyk7XG4gICAgfVxuICAgIHJlbmRlcigpe1xuXG4gICAgICAgIGxldCB0aW1lcyA9IGNvbnN0YW50c1t0aGlzLnByb3BzLnRpbWVUeXBlXTtcbiAgICAgICAgbGV0IHJvd3M9W107XG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGltZXMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsZXQgdGRzPVtdO1xuICAgICAgICAgICAgZm9yKGxldCBrPTA7azx0aW1lc1tpXS5sZW5ndGg7aysrKXtcbiAgICAgICAgICAgICAgICB0ZHMucHVzaCg8dGQga2V5PXsndGQnK2t9IG9uQ2xpY2s9e3RoaXMuc2VsZWN0fT57dGltZXNbaV1ba119PC90ZD4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93cy5wdXNoKDx0ciBrZXk9eyd0cicraX0+e3Rkc308L3RyPik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dGFibGUgIGNsYXNzTmFtZT1cImRldGFpbFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtyb3dzfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICk7XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gVGltZURldGFpbDsiLCIvKipcbiAqIENyZWF0ZWQgYnkga3JvY2sgb24gMS8xMy8xNy5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTZWxlY3QgZnJvbSAnLi9UaW1lU2VsZWN0LmpzJ1xuXG5jbGFzcyBUaW1lSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIGlzT3BlbjpmYWxzZSxcbiAgICAgICAgICAgIHNob3dTdWI6J1RpbWUnLFxuICAgICAgICAgICAgdGltZTp0aGlzLm5vd1RpbWUoKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNhbmNlbCA9IHRoaXMuaGFuZGxlQ2FuY2VsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXNlclN1Yk1vZGUgPSB0aGlzLnVzZXJTdWJNb2RlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXNlclNlbGVjdCA9IHRoaXMudXNlclNlbGVjdC5iaW5kKHRoaXMpO1xuICAgIH07XG4gICAgaGFuZGxlQ2xpY2soKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNPcGVuOnRydWV9KTtcbiAgICB9O1xuICAgIGhhbmRsZUNhbmNlbCgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc09wZW46ZmFsc2V9KTtcbiAgICB9XG4gICAgc2hvd1BvcCgpe1xuICAgICAgICBpZighdGhpcy5zdGF0ZS5pc09wZW4pIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gPFRpbWVTZWxlY3RcbiAgICAgICAgICAgICAgICBzaG93U3ViID0ge3RoaXMuc3RhdGUuc2hvd1N1Yn1cbiAgICAgICAgICAgICAgICB0aW1lPXt0aGlzLnN0YXRlLnRpbWV9XG4gICAgICAgICAgICAgICAgdXNlclN1Yk1vZGU9e3RoaXMudXNlclN1Yk1vZGV9XG4gICAgICAgICAgICAgICAgdXNlclNlbGVjdD17dGhpcy51c2VyU2VsZWN0fVxuICAgICAgICAgICAgLz5cbiAgICB9O1xuICAgIHJlbmRlckJsb2NrKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNPcGVuKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdibG9ja291dCcgb25DbGljaz17dGhpcy5oYW5kbGVDYW5jZWx9PjwvZGl2PlxuICAgIH1cbiAgICBub3dUaW1lKCl7XG4gICAgICAgIGxldCB0aW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IG1pbml0ZSA9IHRpbWUuZ2V0TWludXRlcygpO1xuICAgICAgICBtaW5pdGUgPSBtaW5pdGU8MTA/JzAnK21pbml0ZTptaW5pdGU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBob3VyOnRpbWUuZ2V0SG91cnMoKSxcbiAgICAgICAgICAgIG1pbml0ZTptaW5pdGVcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHVzZXJTdWJNb2RlKHNob3dTdWIpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dTdWI6c2hvd1N1YlxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHVzZXJTZWxlY3QodGltZSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGltZTp0aW1lXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVJbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnRpbWUuaG91cisnOicrdGhpcy5zdGF0ZS50aW1lLm1pbml0ZX0gcmVmPVwidGltZUlucHV0XCIgcmVhZE9ubHkgY2xhc3NOYW1lPVwiaW5wdXQtbWlkZGxlXCIvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb24tc2hpamlhblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9ID48L3NwYW4+XG4gICAgICAgICAgICAgICAge3RoaXMuc2hvd1BvcCgpfVxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJsb2NrKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVJbnB1dDsiLCIvKipcbiAqIENyZWF0ZWQgYnkga3JvY2sgb24gMS8xMS8xNy5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMuanMnO1xuaW1wb3J0IFRpbWVEZXRhaWwgZnJvbSAnLi9UaW1lRGV0YWlsLmpzJztcblxuY2xhc3MgVGltZVNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuY2hhbmdlTWludXRlcyA9IHRoaXMuY2hhbmdlTWludXRlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoYW5nZUhvdXIgPSB0aGlzLmNoYW5nZUhvdXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93SG91ciA9IHRoaXMuc2hvd0hvdXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93TWluaXRlcyA9IHRoaXMuc2hvd01pbml0ZXMuYmluZCh0aGlzKTtcbiAgICB9O1xuICAgIGNoYW5nZU1pbnV0ZXMoZSl7XG4gICAgICAgIGxldCBudW1NID0gcGFyc2VJbnQodGhpcy5wcm9wcy50aW1lLm1pbml0ZSk7XG4gICAgICAgIGxldCBudW1IID0gcGFyc2VJbnQodGhpcy5wcm9wcy50aW1lLmhvdXIpO1xuICAgICAgICBsZXQgdGltZSA9IHt9O1xuICAgICAgICBpZihBcnJheS5mcm9tKGUudGFyZ2V0LmNsYXNzTGlzdCkuaW5kZXhPZignaWNvbi1qaWFudG91c2hhbmcnKSA+PSAwKXtcbiAgICAgICAgICAgIGlmKG51bU0hPT01OSl7XG4gICAgICAgICAgICAgICAgbnVtTSA9IG51bU0rMTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIG51bU0gPSAwO1xuICAgICAgICAgICAgICAgIG51bUg9bnVtSD09PTIzPzA6bnVtSCsxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKG51bU0hPT0wKXtcbiAgICAgICAgICAgICAgICBudW1NPW51bU0tMTtcblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbnVtTSA9IDU5O1xuICAgICAgICAgICAgICAgIG51bUg9bnVtSD09PTA/MjM6bnVtSC0xO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgdGltZS5ob3VyID0gbnVtSDwxMD8nMCcrbnVtSDpudW1IO1xuICAgICAgICB0aW1lLm1pbml0ZSA9IG51bU08MTA/JzAnK251bU06bnVtTTtcblxuICAgICAgICB0aGlzLnByb3BzLnVzZXJTZWxlY3QodGltZSk7XG4gICAgfTtcbiAgICBjaGFuZ2VIb3VyKGUpe1xuICAgICAgICBsZXQgbnVtSCA9IHBhcnNlSW50KHRoaXMucHJvcHMudGltZS5ob3VyKTtcbiAgICAgICAgbGV0IHRpbWU9e1xuICAgICAgICAgICAgbWluaXRlOnRoaXMucHJvcHMudGltZS5taW5pdGVcbiAgICAgICAgfTtcbiAgICAgICAgaWYoQXJyYXkuZnJvbShlLnRhcmdldC5jbGFzc0xpc3QpLmluZGV4T2YoJ2ljb24tamlhbnRvdXNoYW5nJykgPj0gMCl7XG4gICAgICAgICAgICBudW1IID0gbnVtSD09PTIzP251bUg9MDpudW1IKzE7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbnVtSCA9IG51bUg9PT0wP251bUg9MjM6bnVtSC0xO1xuICAgICAgICB9XG4gICAgICAgIHRpbWUuaG91ciA9IG51bUg8MTA/JzAnK251bUg6bnVtSDtcbiAgICAgICAgdGhpcy5wcm9wcy51c2VyU2VsZWN0KHRpbWUpO1xuICAgIH07XG4gICAgc2hvd0hvdXIoKXtcbiAgICAgICAgdGhpcy5wcm9wcy51c2VyU3ViTW9kZSgnSG91cicpO1xuICAgIH07XG4gICAgc2hvd01pbml0ZXMoKXtcbiAgICAgICAgdGhpcy5wcm9wcy51c2VyU3ViTW9kZSgnTWluaXRlcycpO1xuICAgIH07XG4gICAgcmVuZGVySG91cigpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNob3dTdWIgIT09J0hvdXInKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIDxUaW1lRGV0YWlsIHRpbWVUeXBlPSdob3VyJyB0aW1lPXt0aGlzLnByb3BzLnRpbWV9IHVzZXJTdWJNb2RlPXt0aGlzLnByb3BzLnVzZXJTdWJNb2RlfSB1c2VyU2VsZWN0PXt0aGlzLnByb3BzLnVzZXJTZWxlY3R9Lz5cbiAgICB9O1xuICAgIHJlbmRlck1pbml0ZXMoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zaG93U3ViICE9PSdNaW5pdGVzJykgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiA8VGltZURldGFpbCB0aW1lVHlwZT0nbWluaXRlJyB0aW1lPXt0aGlzLnByb3BzLnRpbWV9IHVzZXJTdWJNb2RlPXt0aGlzLnByb3BzLnVzZXJTdWJNb2RlfSB1c2VyU2VsZWN0PXt0aGlzLnByb3BzLnVzZXJTZWxlY3R9Lz5cbiAgICB9O1xuICAgIHJlbmRlclRpbWUoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zaG93U3ViICE9PSAnVGltZScpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gPGRpdiA+PHRhYmxlIGNsYXNzTmFtZT1cInRpbWVcIiA+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIG9uQ2xpY2s9e3RoaXMuY2hhbmdlSG91cn0+PHN0cm9uZyBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLWppYW50b3VzaGFuZ1wiPjwvc3Ryb25nPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIG9uQ2xpY2s9e3RoaXMuY2hhbmdlTWludXRlc30+PHN0cm9uZyBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLWppYW50b3VzaGFuZ1wiPjwvc3Ryb25nPjwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBvbkNsaWNrPXt0aGlzLnNob3dIb3VyfT48c3Ryb25nPiB7dGhpcy5wcm9wcy50aW1lLmhvdXJ9IDwvc3Ryb25nPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4gOiA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgb25DbGljaz17dGhpcy5zaG93TWluaXRlc30+PHN0cm9uZz4ge3RoaXMucHJvcHMudGltZS5taW5pdGV9IDwvc3Ryb25nPjwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBvbkNsaWNrPXt0aGlzLmNoYW5nZUhvdXJ9PjxzdHJvbmcgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi1qaWFudG91eGlhXCI+PC9zdHJvbmc+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBvbkNsaWNrPXt0aGlzLmNoYW5nZU1pbnV0ZXN9PjxzdHJvbmcgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi1qaWFudG91eGlhXCI+PC9zdHJvbmc+PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+PC9kaXY+O1xuICAgIH07XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9wICc+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGltZSgpfVxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckhvdXIoKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNaW5pdGVzKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVTZWxlY3Q7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGtyb2NrIG9uIDEvMTMvMTcuXG4gKi9cblxuZXhwb3J0cy5ob3VyPSBbWycwMCcsJzAxJywnMDInLCcwMyddLFsnMDQnLCcwNScsJzA2JywnMDcnXSxbJzA4JywnMDknLCcxMCcsJzExJ10sWycxMicsJzEzJywnMTQnLCcxNSddLFsnMTYnLCcxNycsJzE4JywnMTknXSxbJzIwJywnMjEnLCcyMicsJzIzJ11dO1xuZXhwb3J0cy5taW5pdGUgPSBbWycwMCcsJzA1JywnMTAnLCcxNSddLFsnMjAnLCcyNScsJzMwJywnMzUnXSxbJzQwJywnNDUnLCc1MCcsJzU1J11dOyJdfQ==
