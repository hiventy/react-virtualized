'use strict';

var _idCellSizeCache = require('./idCellSizeCache');

var _idCellSizeCache2 = _interopRequireDefault(_idCellSizeCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('idCellSizeCache', function () {
  it('should track width and height using id instead of index', function () {
    var _indexToIdMap = {
      0: 'foo',
      1: 'bar',
      2: 'baz'
    };
    var indexToIdMapCalls = [];
    var cache = (0, _idCellSizeCache2.default)({
      indexToIdMap: function indexToIdMap(index) {
        indexToIdMapCalls.push(index);
        return _indexToIdMap[index];
      }
    });

    // Set values with initial indices
    cache.setColumnWidth(0, 100);
    cache.setRowHeight(0, 25);
    cache.setColumnWidth(1, 200);
    cache.setRowHeight(1, 50);
    cache.setColumnWidth(2, 300);
    cache.setRowHeight(2, 75);

    // Mimic a sort operation
    _indexToIdMap[0] = 'baz';
    _indexToIdMap[1] = 'bar';
    _indexToIdMap[2] = 'foo';

    // Previous widths and heights should still be available
    expect(cache.getColumnWidth(0)).toBe(300);
    expect(cache.getRowHeight(0)).toBe(75);
    expect(cache.getColumnWidth(1)).toBe(200);
    expect(cache.getRowHeight(1)).toBe(50);
    expect(cache.getColumnWidth(2)).toBe(100);
    expect(cache.getRowHeight(2)).toBe(25);

    // Clear a specific item
    cache.clearColumnWidth(0);
    cache.clearRowHeight(0);

    // Mimic a sort operation
    _indexToIdMap[0] = 'bar';
    _indexToIdMap[1] = 'foo';
    _indexToIdMap[2] = 'baz';

    // Previous widths and heights should still be available
    expect(cache.getColumnWidth(0)).toBe(200);
    expect(cache.getRowHeight(0)).toBe(50);
    expect(cache.getColumnWidth(1)).toBe(100);
    expect(cache.getRowHeight(1)).toBe(25);
    expect(cache.getColumnWidth(2)).toBeUndefined();
    expect(cache.getRowHeight(2)).toBeUndefined();

    // Clear all items
    cache.clearAllColumnWidths();
    cache.clearAllRowHeights();

    // No sizes should be available
    expect(cache.getColumnWidth(0)).toBeUndefined();
    expect(cache.getRowHeight(0)).toBeUndefined();
    expect(cache.getColumnWidth(1)).toBeUndefined();
    expect(cache.getRowHeight(1)).toBeUndefined();
    expect(cache.getColumnWidth(2)).toBeUndefined();
    expect(cache.getRowHeight(2)).toBeUndefined();
  });
});