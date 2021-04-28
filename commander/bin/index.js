#!/usr/bin/env node
const { program } = require('commander');
program.version('0.0.2');  // ./bin/index.js -V

// .option(短选项名称[,长选项名称[,选项简介]]) 方法来定义选项，同时可以附加选项的简介 
program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza')


program.parse(process.argv); // 处理参数 没有被使用的选项会存放在program.args数组中 -p 11 -s 111   -> 被使用的参数 [ '111' ]
// 多个短选项可以合并简写，其中!!最后一个选项!!可以附加参数 -dsp 11 ->{ debug: true, small: true, pizzaType: '11' }
// 选项可以通过在Command对象上调用.opts()方法来获取 node ./bin/index.js -dsp 11  ->> { debug: true, small: true, pizzaType: '11' }
const options = program.opts();
// console.log(program)
if (options.debug) console.log(options);
console.log('pizza details:');
if (options.small) console.log('- small pizza size');
if (options.pizzaType) console.log(`- ${options.pizzaType}`);
console.log('未被使用的参数',program.args)