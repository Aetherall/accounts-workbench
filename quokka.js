

const compose2 = (f, g) => (...args) => f(g(...args))
const compose = (...fns) => fns.reduce(compose2);
const pipe = (...fns) => fns.reduceRight(compose2);


let state = {
  a: 0
}

function add0(state){
  return function add1(value){
    return function add2(value2){
      return ({a: state.a + value + value2 })
    }
  }
}


/*
const enhance = (action) => {

  return action(state)
}
*/
const enhance = (action) => (parameter) => {
  console.log(action)
  console.log(parameter)
  if(typeof action === 'function') return enhance(action(parameter))
  return '2'
}



const e = (f) => (...args) => typeof f === 'function' ? e(f(...args)) : f//?

const enhancedAdd = e(add0)(state)

/*
const enhancedadda = (a) => (b) => {
  const res = enhance(enhance(enhance(add,a),b),state)//?
  //const res = enhance(add(a)(b))//?
  state = res
}//?*/


enhancedAdd(2)(4)//?