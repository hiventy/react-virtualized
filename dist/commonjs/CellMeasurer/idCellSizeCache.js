'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = idCellSizeCache;

var _defaultCellSizeCache = require('./defaultCellSizeCache');

var _defaultCellSizeCache2 = _interopRequireDefault(_defaultCellSizeCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Alternate CellMeasurer `cellSizeCache` implementation.
 * Similar to `defaultCellSizeCache` except that sizes are tied to data id rather than index.
 * Requires an index-to-id map function (passed in externally) to operate.
 */
function idCellSizeCache(_ref) {
  var indexToIdMap = _ref.indexToIdMap,
      _ref$uniformColumnWid = _ref.uniformColumnWidth,
      uniformColumnWidth = _ref$uniformColumnWid === undefined ? false : _ref$uniformColumnWid,
      _ref$uniformRowHeight = _ref.uniformRowHeight,
      uniformRowHeight = _ref$uniformRowHeight === undefined ? false : _ref$uniformRowHeight;

  var cellSizeCache = new _defaultCellSizeCache2.default({
    uniformColumnWidth: uniformColumnWidth,
    uniformRowHeight: uniformRowHeight
  });

  return {
    clearAllColumnWidths: function clearAllColumnWidths() {
      cellSizeCache.clearAllColumnWidths();
    },
    clearAllRowHeights: function clearAllRowHeights() {
      cellSizeCache.clearAllRowHeights();
    },
    clearColumnWidth: function clearColumnWidth(index) {
      cellSizeCache.clearColumnWidth(indexToIdMap(index));
    },
    clearRowHeight: function clearRowHeight(index) {
      cellSizeCache.clearRowHeight(indexToIdMap(index));
    },
    getColumnWidth: function getColumnWidth(index) {
      return cellSizeCache.getColumnWidth(indexToIdMap(index));
    },
    getRowHeight: function getRowHeight(index) {
      return cellSizeCache.getRowHeight(indexToIdMap(index));
    },
    setColumnWidth: function setColumnWidth(index, width) {
      cellSizeCache.setColumnWidth(indexToIdMap(index), width);
    },
    setRowHeight: function setRowHeight(index, height) {
      cellSizeCache.setRowHeight(indexToIdMap(index), height);
    }
  };
}