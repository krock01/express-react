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

            var times = this.props.timeType === 'hour' ? _constants.HOUR : _constants.MINITE;
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

},{"./TimeDetail.js":2,"react":undefined}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by krock on 1/13/17.
 */

var HOUR = exports.HOUR = [['00', '01', '02', '03'], ['04', '05', '06', '07'], ['08', '09', '10', '11'], ['12', '13', '14', '15'], ['16', '17', '18', '19'], ['20', '21', '22', '23']];
var MINITE = exports.MINITE = [['00', '05', '10', '15'], ['20', '25', '30', '35'], ['40', '45', '50', '55']];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvamF2YXNjcmlwdHMvc2l0ZS5qcyIsInNyYy9jb21wb25lbnRzL1RpbWVEZXRhaWwuanMiLCJzcmMvY29tcG9uZW50cy9UaW1lSW5wdXQuanMiLCJzcmMvY29tcG9uZW50cy9UaW1lU2VsZWN0LmpzIiwic3JjL2NvbXBvbmVudHMvY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLG1CQUFTLE1BQVQsQ0FBZ0Isd0RBQWhCLEVBQThCLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQUE5QixFLENBUkE7Ozs7Ozs7OztBQ0dBOzs7O0FBQ0E7Ozs7Ozs7OytlQUpBOzs7OztJQU1NLFU7OztBQUNGLHdCQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw0SEFDUixLQURROztBQUVkLGNBQUssSUFBTCxHQUFZLE1BQU0sSUFBbEI7QUFDQSxjQUFLLE1BQUwsR0FBYyxNQUFLLE1BQUwsQ0FBWSxJQUFaLE9BQWQ7QUFIYztBQUlqQjs7OzsrQkFFTSxDLEVBQUU7QUFDTCxpQkFBSyxJQUFMLENBQVUsS0FBSyxLQUFMLENBQVcsUUFBckIsSUFBK0IsRUFBRSxNQUFGLENBQVMsV0FBVCxDQUFxQixJQUFyQixFQUEvQjtBQUNBLGlCQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLEtBQUssSUFBM0I7QUFDQSxpQkFBSyxLQUFMLENBQVcsV0FBWCxDQUF1QixNQUF2QjtBQUNIOzs7aUNBQ087O0FBRUosZ0JBQUksUUFBUSxLQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXNCLE1BQXRCLHNDQUFaO0FBQ0EsZ0JBQUksT0FBSyxFQUFUO0FBQ0EsaUJBQUksSUFBSSxJQUFFLENBQVYsRUFBWSxJQUFFLE1BQU0sTUFBcEIsRUFBMkIsR0FBM0IsRUFBK0I7QUFDM0Isb0JBQUksTUFBSSxFQUFSO0FBQ0EscUJBQUksSUFBSSxJQUFF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O0FBRUkscUVBRko7QUFHSTtBQUFBO0FBQUEsa0NBQUksU0FBUyxLQUFLLGFBQWxCO0FBQWlDLDBFQUFRLFdBQVUsMEJBQWxCO0FBQWpDO0FBSEo7QUFYQTtBQURLO0FBQU4sYUFBUDtBQW1CSDs7O2lDQUNPO0FBQ0osbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsTUFBZjtBQUNLLHFCQUFLLFVBQUwsRUFETDtBQUVLLHFCQUFLLFVBQUwsRUFGTDtBQUdLLHFCQUFLLGFBQUw7QUFITCxhQURKO0FBT0g7Ozs7RUEzRm9CLGdCQUFNLFM7O0FBNkYvQixPQUFPLE9BQVAsR0FBaUIsVUFBakI7Ozs7Ozs7O0FDcEdBOzs7O0FBSU8sSUFBTSxzQkFBTSxDQUFDLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBVyxJQUFYLEVBQWdCLElBQWhCLENBQUQsRUFBdUIsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLElBQVgsRUFBZ0IsSUFBaEIsQ0FBdkIsRUFBNkMsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLElBQVgsRUFBZ0IsSUFBaEIsQ0FBN0MsRUFBbUUsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLElBQVgsRUFBZ0IsSUFBaEIsQ0FBbkUsRUFBeUYsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLElBQVgsRUFBZ0IsSUFBaEIsQ0FBekYsRUFBK0csQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLElBQVgsRUFBZ0IsSUFBaEIsQ0FBL0csQ0FBWjtBQUNBLElBQU0sMEJBQVMsQ0FBQyxDQUFDLElBQUQsRUFBTSxJQUFOLEVBQVcsSUFBWCxFQUFnQixJQUFoQixDQUFELEVBQXVCLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBVyxJQUFYLEVBQWdCLElBQWhCLENBQXZCLEVBQTZDLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBVyxJQUFYLEVBQWdCLElBQWhCLENBQTdDLENBQWYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGtyb2NrIG9uIDEvMTEvMTcuXG4gKi9cblxuaW1wb3J0IFRpbWVJbnB1dCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9UaW1lSW5wdXQuanMnXG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblJlYWN0RG9tLnJlbmRlcig8VGltZUlucHV0IC8+LGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkga3JvY2sgb24gMS8xMy8xNy5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7SE9VUixNSU5JVEV9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcblxuY2xhc3MgVGltZURldGFpbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy50aW1lID0gcHJvcHMudGltZTtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSB0aGlzLnNlbGVjdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNlbGVjdChlKXtcbiAgICAgICAgdGhpcy50aW1lW3RoaXMucHJvcHMudGltZVR5cGVdPWUudGFyZ2V0LnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgdGhpcy5wcm9wcy51c2VyU2VsZWN0KHRoaXMudGltZSk7XG4gICAgICAgIHRoaXMucHJvcHMudXNlclN1Yk1vZGUoJ1RpbWUnKTtcbiAgICB9XG4gICAgcmVuZGVyKCl7XG5cbiAgICAgICAgbGV0IHRpbWVzID0gdGhpcy5wcm9wcy50aW1lVHlwZT09PSdob3VyJz9IT1VSOk1JTklURTtcbiAgICAgICAgbGV0IHJvd3M9W107XG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGltZXMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsZXQgdGRzPVtdO1xuICAgICAgICAgICAgZm9yKGxldCBrPTA7azx0aW1lc1tpXS5sZW5ndGg7aysrKXtcbiAgICAgICAgICAgICAgICB0ZHMucHVzaCg8dGQga2V5PXsndGQnK2t9IG9uQ2xpY2s9e3RoaXMuc2VsZWN0fT57dGltZXNbaV1ba119PC90ZD4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93cy5wdXNoKDx0ciBrZXk9eyd0cicraX0+e3Rkc308L3RyPik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dGFibGUgIGNsYXNzTmFtZT1cImRldGFpbFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtyb3dzfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICk7XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gVGltZURldGFpbDsiLCIvKipcbiAqIENyZWF0ZWQgYnkga3JvY2sgb24gMS8xMy8xNy5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTZWxlY3QgZnJvbSAnLi9UaW1lU2VsZWN0LmpzJ1xuXG5jbGFzcyBUaW1lSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIGlzT3BlbjpmYWxzZSxcbiAgICAgICAgICAgIHNob3dTdWI6J1RpbWUnLFxuICAgICAgICAgICAgdGltZTp0aGlzLm5vd1RpbWUoKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNhbmNlbCA9IHRoaXMuaGFuZGxlQ2FuY2VsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXNlclN1Yk1vZGUgPSB0aGlzLnVzZXJTdWJNb2RlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXNlclNlbGVjdCA9IHRoaXMudXNlclNlbGVjdC5iaW5kKHRoaXMpO1xuICAgIH07XG4gICAgaGFuZGxlQ2xpY2soKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNPcGVuOnRydWV9KTtcbiAgICB9O1xuICAgIGhhbmRsZUNhbmNlbCgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc09wZW46ZmFsc2V9KTtcbiAgICB9XG4gICAgc2hvd1BvcCgpe1xuICAgICAgICBpZighdGhpcy5zdGF0ZS5pc09wZW4pIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gPFRpbWVTZWxlY3RcbiAgICAgICAgICAgICAgICBzaG93U3ViID0ge3RoaXMuc3RhdGUuc2hvd1N1Yn1cbiAgICAgICAgICAgICAgICB0aW1lPXt0aGlzLnN0YXRlLnRpbWV9XG4gICAgICAgICAgICAgICAgdXNlclN1Yk1vZGU9e3RoaXMudXNlclN1Yk1vZGV9XG4gICAgICAgICAgICAgICAgdXNlclNlbGVjdD17dGhpcy51c2VyU2VsZWN0fVxuICAgICAgICAgICAgLz5cbiAgICB9O1xuICAgIHJlbmRlckJsb2NrKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNPcGVuKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdibG9ja291dCcgb25DbGljaz17dGhpcy5oYW5kbGVDYW5jZWx9PjwvZGl2PlxuICAgIH1cbiAgICBub3dUaW1lKCl7XG4gICAgICAgIGxldCB0aW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IG1pbml0ZSA9IHRpbWUuZ2V0TWludXRlcygpO1xuICAgICAgICBtaW5pdGUgPSBtaW5pdGU8MTA/JzAnK21pbml0ZTptaW5pdGU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBob3VyOnRpbWUuZ2V0SG91cnMoKSxcbiAgICAgICAgICAgIG1pbml0ZTptaW5pdGVcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHVzZXJTdWJNb2RlKHNob3dTdWIpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dTdWI6c2hvd1N1YlxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHVzZXJTZWxlY3QodGltZSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGltZTp0aW1lXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVJbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnRpbWUuaG91cisnOicrdGhpcy5zdGF0ZS50aW1lLm1pbml0ZX0gcmVmPVwidGltZUlucHV0XCIgcmVhZE9ubHkgY2xhc3NOYW1lPVwiaW5wdXQtbWlkZGxlXCIvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb24tc2hpamlhblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9ID48L3NwYW4+XG4gICAgICAgICAgICAgICAge3RoaXMuc2hvd1BvcCgpfVxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJsb2NrKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVJbnB1dDsiLCIvKipcbiAqIENyZWF0ZWQgYnkga3JvY2sgb24gMS8xMS8xNy5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFRpbWVEZXRhaWwgZnJvbSAnLi9UaW1lRGV0YWlsLmpzJztcblxuY2xhc3MgVGltZVNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuY2hhbmdlTWludXRlcyA9IHRoaXMuY2hhbmdlTWludXRlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoYW5nZUhvdXIgPSB0aGlzLmNoYW5nZUhvdXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93SG91ciA9IHRoaXMuc2hvd0hvdXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93TWluaXRlcyA9IHRoaXMuc2hvd01pbml0ZXMuYmluZCh0aGlzKTtcbiAgICB9O1xuICAgIGNoYW5nZU1pbnV0ZXMoZSl7XG4gICAgICAgIGxldCBudW1NID0gcGFyc2VJbnQodGhpcy5wcm9wcy50aW1lLm1pbml0ZSk7XG4gICAgICAgIGxldCBudW1IID0gcGFyc2VJbnQodGhpcy5wcm9wcy50aW1lLmhvdXIpO1xuICAgICAgICBsZXQgdGltZSA9IHt9O1xuICAgICAgICBpZihBcnJheS5mcm9tKGUudGFyZ2V0LmNsYXNzTGlzdCkuaW5kZXhPZignaWNvbi1qaWFudG91c2hhbmcnKSA+PSAwKXtcbiAgICAgICAgICAgIGlmKG51bU0hPT01OSl7XG4gICAgICAgICAgICAgICAgbnVtTSA9IG51bU0rMTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIG51bU0gPSAwO1xuICAgICAgICAgICAgICAgIG51bUg9bnVtSD09PTIzPzA6bnVtSCsxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKG51bU0hPT0wKXtcbiAgICAgICAgICAgICAgICBudW1NPW51bU0tMTtcblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbnVtTSA9IDU5O1xuICAgICAgICAgICAgICAgIG51bUg9bnVtSD09PTA/MjM6bnVtSC0xO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgdGltZS5ob3VyID0gbnVtSDwxMD8nMCcrbnVtSDpudW1IO1xuICAgICAgICB0aW1lLm1pbml0ZSA9IG51bU08MTA/JzAnK251bU06bnVtTTtcblxuICAgICAgICB0aGlzLnByb3BzLnVzZXJTZWxlY3QodGltZSk7XG4gICAgfTtcbiAgICBjaGFuZ2VIb3VyKGUpe1xuICAgICAgICBsZXQgbnVtSCA9IHBhcnNlSW50KHRoaXMucHJvcHMudGltZS5ob3VyKTtcbiAgICAgICAgbGV0IHRpbWU9e1xuICAgICAgICAgICAgbWluaXRlOnRoaXMucHJvcHMudGltZS5taW5pdGVcbiAgICAgICAgfTtcbiAgICAgICAgaWYoQXJyYXkuZnJvbShlLnRhcmdldC5jbGFzc0xpc3QpLmluZGV4T2YoJ2ljb24tamlhbnRvdXNoYW5nJykgPj0gMCl7XG4gICAgICAgICAgICBudW1IID0gbnVtSD09PTIzP251bUg9MDpudW1IKzE7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbnVtSCA9IG51bUg9PT0wP251bUg9MjM6bnVtSC0xO1xuICAgICAgICB9XG4gICAgICAgIHRpbWUuaG91ciA9IG51bUg8MTA/JzAnK251bUg6bnVtSDtcbiAgICAgICAgdGhpcy5wcm9wcy51c2VyU2VsZWN0KHRpbWUpO1xuICAgIH07XG4gICAgc2hvd0hvdXIoKXtcbiAgICAgICAgdGhpcy5wcm9wcy51c2VyU3ViTW9kZSgnSG91cicpO1xuICAgIH07XG4gICAgc2hvd01pbml0ZXMoKXtcbiAgICAgICAgdGhpcy5wcm9wcy51c2VyU3ViTW9kZSgnTWluaXRlcycpO1xuICAgIH07XG4gICAgcmVuZGVySG91cigpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNob3dTdWIgIT09J0hvdXInKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIDxUaW1lRGV0YWlsIHRpbWVUeXBlPSdob3VyJyB0aW1lPXt0aGlzLnByb3BzLnRpbWV9IHVzZXJTdWJNb2RlPXt0aGlzLnByb3BzLnVzZXJTdWJNb2RlfSB1c2VyU2VsZWN0PXt0aGlzLnByb3BzLnVzZXJTZWxlY3R9Lz5cbiAgICB9O1xuICAgIHJlbmRlck1pbml0ZXMoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zaG93U3ViICE9PSdNaW5pdGVzJykgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiA8VGltZURldGFpbCB0aW1lVHlwZT0nbWluaXRlJyB0aW1lPXt0aGlzLnByb3BzLnRpbWV9IHVzZXJTdWJNb2RlPXt0aGlzLnByb3BzLnVzZXJTdWJNb2RlfSB1c2VyU2VsZWN0PXt0aGlzLnByb3BzLnVzZXJTZWxlY3R9Lz5cbiAgICB9O1xuICAgIHJlbmRlclRpbWUoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zaG93U3ViICE9PSAnVGltZScpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gPGRpdiA+PHRhYmxlIGNsYXNzTmFtZT1cInRpbWVcIiA+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIG9uQ2xpY2s9e3RoaXMuY2hhbmdlSG91cn0+PHN0cm9uZyBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLWppYW50b3VzaGFuZ1wiPjwvc3Ryb25nPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIG9uQ2xpY2s9e3RoaXMuY2hhbmdlTWludXRlc30+PHN0cm9uZyBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLWppYW50b3VzaGFuZ1wiPjwvc3Ryb25nPjwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBvbkNsaWNrPXt0aGlzLnNob3dIb3VyfT48c3Ryb25nPiB7dGhpcy5wcm9wcy50aW1lLmhvdXJ9IDwvc3Ryb25nPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4gOiA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgb25DbGljaz17dGhpcy5zaG93TWluaXRlc30+PHN0cm9uZz4ge3RoaXMucHJvcHMudGltZS5taW5pdGV9IDwvc3Ryb25nPjwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBvbkNsaWNrPXt0aGlzLmNoYW5nZUhvdXJ9PjxzdHJvbmcgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi1qaWFudG91eGlhXCI+PC9zdHJvbmc+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBvbkNsaWNrPXt0aGlzLmNoYW5nZU1pbnV0ZXN9PjxzdHJvbmcgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi1qaWFudG91eGlhXCI+PC9zdHJvbmc+PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+PC9kaXY+O1xuICAgIH07XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9wICc+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGltZSgpfVxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckhvdXIoKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNaW5pdGVzKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVTZWxlY3Q7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGtyb2NrIG9uIDEvMTMvMTcuXG4gKi9cblxuZXhwb3J0IGNvbnN0IEhPVVI9IFtbJzAwJywnMDEnLCcwMicsJzAzJ10sWycwNCcsJzA1JywnMDYnLCcwNyddLFsnMDgnLCcwOScsJzEwJywnMTEnXSxbJzEyJywnMTMnLCcxNCcsJzE1J10sWycxNicsJzE3JywnMTgnLCcxOSddLFsnMjAnLCcyMScsJzIyJywnMjMnXV07XG5leHBvcnQgY29uc3QgTUlOSVRFID0gW1snMDAnLCcwNScsJzEwJywnMTUnXSxbJzIwJywnMjUnLCczMCcsJzM1J10sWyc0MCcsJzQ1JywnNTAnLCc1NSddXTsiXX0=
