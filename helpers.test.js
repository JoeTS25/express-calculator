const { findMean, findMedian, findMode } = require("./helpers")

describe("#findMedian", function() {
    it("finds median of nums", function() {
        expect(findMedian([2, 4, 1, 5, 3])).toEqual(3)
    })
    it("also finds median of even set", function() {
        expect(findMedian([7, 12, 3, 8])).toEqual(7.5)
    })
})

describe("#findMean", function () {
    it("finds mean of array of nums", function() {
        expect(findMean([14, 7, 2, 5])).toEqual(7)
    })
})

describe("#findMode", function () {
    it("finds mode of array of nums", function() {
        expect(findMode([1, 2, 2, 3, 4, 5])).toEqual(2)
    })
})