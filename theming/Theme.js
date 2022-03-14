// Object.defineProperty(exports, "__esModule", { value: true })
// exports = void 0
class Theme {
    constructor(options) {
        // let temp = options
        if (options.name == "base") {
            options.selectors = [':root']
        } else {
            options.selectors = [':root.'+options.name]
        }

        this.theme = options
    }
    // get() {
    //     return this.theme
    // }
}
// function Theme(options) {
//     this.theme = options
// }
// Theme.prototype.get = function get() {
//     return this.theme
// }
module.exports = Theme
