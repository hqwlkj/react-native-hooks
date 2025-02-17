module.exports = {
    useTabs: false,                //是否使用tab进行缩进，默认为false，表示用空格进行缩减
    singleQuote: true,             // //字符串是否使用单引号，默认为false，使用双引号
    printWidth: 120,               // 换行字符串阈值
    semi: true,                    // 句末加分号,默认为true
    trailingComma: 'none',         //是否使用尾逗号，有三个可选值"<none|es5|all>"
    bracketSpacing: true,          //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
    jsxBracketSameLine: false,     // jsx > 是否另起一行
    arrowParens: 'avoid',          // (x) => {} 是否要有小括号
    requirePragma: false,          // 是否要注释来决定是否格式化代码
    proseWrap: 'preserve',          // 是否要换行
    parser: "babylon"              //代码的解析引擎，默认为babylon，与babel相同。
};
