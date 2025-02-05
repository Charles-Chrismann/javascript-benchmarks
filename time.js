export default function(fn, ...args) {
    const start = performance.now()
    fn(...args)
    return performance.now() - start
}