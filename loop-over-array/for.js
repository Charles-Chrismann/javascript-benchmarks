export default function(arr, fn = () => undefined) {
    for(let i = 0; i < arr.length; i++) fn()
}