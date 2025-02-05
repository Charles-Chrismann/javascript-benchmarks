export default function(arr, fn = () => undefined) {
    for(const i of arr) fn()
}