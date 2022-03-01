const themeSwapper = require('tailwindcss-theme-swapper')
    , glob = require('glob')
    , path = require('path')

// Object.defineProperty(exports, "__esModule", { value: true })
// exports.Theme = void 0
// class Theme {
//     constructor(options) {
//         this.theme = options
//     }
//     get() {
//         return this.theme
//     }
// }
// exports.Theme = Theme

exports.plugin = void 0
const swapt = () => {

    const themes = []

    // glob.sync('./theming/themes/*.js').forEach((file) => {
    //     console.log(path.resolve(file))
    //     themes.push(require(path.resolve(file)).theme)
    // });

    
    
    require('./themes/index').forEach(file => {
        console.log(file);
        themes.push(file.theme)
    })
    console.log(JSON.stringify(themes));

    const thing = themeSwapper({
        themes: themes
    })
    // console.log(
    //     '🚀 ~ file: theme.config.js ~ line 54 ~ swapt ~ thing',
    //     JSON.stringify(thing, null, 2)
    // )

    return thing
}

exports.plugin = swapt()

