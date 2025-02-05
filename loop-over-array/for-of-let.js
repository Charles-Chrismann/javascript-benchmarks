export default function(arr, fn = () => undefined) {
    for(let i of arr) fn()
}