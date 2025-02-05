export default function(arr, fn = () => undefined) {
    arr.forEach(element => fn);
}