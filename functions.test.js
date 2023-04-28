const {
    calculate_mean,
    calculate_median,
    find_mode
  } = require("./functions");
  
  describe("find median", function(){
    test("finds the median of a set with even number of elements", function(){ 
      expect(calculate_median([-1, 0, 2, 5])).toEqual(1)
    })
    test("finds the median of a set with odd number of elements", function () { 
      expect(calculate_median([1, 2, 7])).toEqual(2)
    })
  })
  
  describe("find mean", function () {
    test("finds the mean of an empty array", function () { 
      expect(calculate_mean([])).toEqual(0)
    })
    test("finds the mean of an array of numbers", function () { 
      expect(calculate_mean([-2,-1,0,1,2])).toEqual(0)
    })
  })
  
  describe("find Mode", function () {
    it("finds the mode", function () { 
      expect(find_mode([1,2,2,2,3,3,3])).toContain('2','3')
    })
  })