// ECMAScript2022
// It kinda works, sometimes ;)
const resp = await fetch('https://dummy.restapiexample.com/api/v1/employee/1')
export const data = await resp.json()
