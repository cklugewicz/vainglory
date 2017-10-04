'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _ = require('./');

var _2 = _interopRequireDefault(_);

var _skillTiers = require('./resources/skillTiers');

var _skillTiers2 = _interopRequireDefault(_skillTiers);

var _karma = require('./resources/karma');

var _karma2 = _interopRequireDefault(_karma);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Player = function (_BaseModel) {
  (0, _inherits3.default)(Player, _BaseModel);

  function Player(data) {
    (0, _classCallCheck3.default)(this, Player);
    return (0, _possibleConstructorReturn3.default)(this, (Player.__proto__ || (0, _getPrototypeOf2.default)(Player)).call(this, data));
  }

  (0, _createClass3.default)(Player, [{
    key: 'name',
    get: function get() {
      return this.data.attributes.name;
    }
  }, {
    key: 'shardId',
    get: function get() {
      return this.data.attributes.shardId;
    }
  }, {
    key: 'stats',
    get: function get() {
      var stats = this.raw.attributes.stats;

      var skillTier = _skillTiers2.default.find(function (tier) {
        return tier.serverName === stats.skillTier;
      });
      var karmaLevel = _karma2.default.find(function (k) {
        return k.serverName === stats.karmaLevel;
      });

      stats.skillTier = skillTier ? skillTier.name : stats.skillTier;
      stats.karmaLevel = karmaLevel ? karmaLevel.name : stats.karmaLevel;

      return stats;
    }
  }, {
    key: 'titleId',
    get: function get() {
      return this.data.attributes.titleId;
    }
  }]);
  return Player;
}(_2.default);

exports.default = Player;