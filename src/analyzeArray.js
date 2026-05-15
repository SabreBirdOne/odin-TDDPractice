export default function analyzeArray(arr) {
    return {
        average: arr.reduce((sum, element) => sum + element, 0) / arr.length || 0,
        min: arr.reduce((lowest, element) => Math.min(lowest, element), arr[0]) || 0,
        max: arr.reduce((highest, element) => Math.max(highest, element), arr[0]) || 0,
        length: arr.length
    }

}