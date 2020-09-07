// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

describe("addThemUp", () => {
  test("Takes two numbers are arguments and returns the sum", () => {
    expect(addThemUp(4,6)).toEqual(10)
    expect(addThemUp(15,30)).toEqual(45)
    expect(addThemUp("dog")).toEqual("Error. Invalid input type.")
  })
})


// --------------------1b) See the test fail. THEN write the code to make the test pass.

const addThemUp = (num1, num2) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2
  } else {
    return "Error. Invalid input type."
  }
}


// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

describe("triangleArea", () => {
  test("Takes two numbers that are the base and height and returns the area of a triangle", () => {
    expect(triangleArea(2,6)).toEqual(6)
    expect(triangleArea(4,7)).toEqual(14)
    expect(triangleArea(2,"cat")).toEqual("Error. Invalid input type.")
  })
})



// --------------------2b) See the test fail. THEN write the code to make the test pass.

const triangleArea = (base, height) => {
  if (typeof base === "number" && typeof height === "number") {
    return base * height / 2
  } else {
    return "Error. Invalid input type."
  }
}
