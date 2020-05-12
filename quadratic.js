//This function uses the general formula to solve quadratic equations.

const rootsOf = (a, b, c) => {

    /*Math.sqrt() and Math.pow() evaluates 
    values of squareroot and power respectively.
    x1 and x2 takes in variable d and evaluates the 
    roots based on the parameters passed into the function*/

    let d = Math.sqrt(Math.pow(b, 2) - (4 * a * c));
    let x1 = (-1 * b + d) / (2 * a);
    let x2 = (-1 * b - d) / (2 * a);

    return `Roots of the equation = ${x1} or ${x2}`;
}

rootsOf(1, -3, -10)

