
// // http://mockjs.com/examples.html


// // String
// // 1. 'name|min-max': string ==> string * (min - max)
// // 2. 'name|num': string ==> string * num

// var dataStr = Mock.mock({
// 	'dataStr1|1-10': 'str', //str * (1 - 10)
// 	'dataStr3|3': 'str' //str * 3
// });
// console.log(JSON.stringify(dataStr, null, 4));


// // Number 
// // 1. 'name|+1': number 
// // 2. 'name|min-max': number
// // 3. 'name|min-max.dmin-dmax': number
// // 		'name|min-max.num': number
// // 		'name|num.dmin-dmax': number
// // 		'name|num.num': number

// var dataNum = Mock.mock({
// 	'dataNum1|+1': 202, //==> 返回一个定值的number
// 	'dataNum2|1-100': 202, //==> 返回一个区间内的number
// 	'dataNum3|1-100.1-10': 202 //返回带指定位数带小数的number
// });
// console.log(JSON.stringify(dataNum, null, '\t'));


// // Boolean ==> 结果都是返回随机boolean值
// // 1. 'name|1': boolean
// // 1. 'name|1-2': boolean
// var dataBoolean = Mock.mock({
// 	'dataBoolean1|1': true, // true or false
// 	'dataBoolean2|1-2': true // true or false
// });
// console.log(JSON.stringify(dataBoolean, null, '\t'));


// // Object ==> 返回给对象min-max个随机值
// // 1. 'name|count': object
// var dataObj = Mock.mock({
// 	'dataObj1|2-4': {
// 		"110000": "北京市",
// 	    "120000": "天津市",
// 	    "130000": "河北省",
// 	    "140000": "山西省"
// 	},
// 	'dataObj2|2': {
// 		"110000": "北京市",
// 	    "120000": "天津市",
// 	    "130000": "河北省",
// 	    "140000": "山西省"
// 	}
// })
// console.log(JSON.stringify(dataObj, null, '\t'));


// // Array
// // 1. 'name|+1': array  ==> 按顺序返回array的值
// // 2. 'name|min - max ': ==> array的内容 * (min - max) ==> 和string一样
// // 3. 'name|num': array
// // 		==> num为1时返回的是字符串，值为array的第随机个值
// // 		==> num > 1时返回的是num个长度的array
// var dataArr = Mock.mock({
// 	'dataArr1|+1': [
// 		'AMD',
// 		'CMD',
// 		'UMD'
// 	],
// 	'dataArr2|1': [
// 		'AMD',
// 		'CMD',
// 		'UMD'
// 	],
// 	'dataArr3|1-1': [
// 		'AMD',
// 		'CMD',
// 		'UMD'
// 	],
// 	'dataArr4|2': [
// 		'AMD',
// 		'CMD',
// 		'UMD'
// 	],
// 	'dataArr5|1-4': [
// 		'AMD',
// 		'CMD',
// 		'UMD'
// 	]
// });
// console.log(JSON.stringify(dataArr, null, '\t'));

// // 那么如何返回随机长度的数组呢，像Object一样？？？

// // 4. 数组内存放对象的数组
// var dataArrObj = Mock.mock({
// 	'dataArrObj1|1-10': [// 1-10表示的是数组的长度，即对象的个数
// 		{
// 			'name|+1': [
// 				'hello',
// 				'Mock.js',
// 				'!'
// 			]
// 		}
// 	],
// 	'dataArrObj2|4': [// 4表示的是数组的长度，即对象的个数(按顺序)
// 		{
// 			'name|+1': [
// 				'hello',
// 				'Mock.js',
// 				'!'
// 			]
// 		}
// 	],
// 	'dataArrObj3|4': [// 4表示的是数组的长度，即对象的个数
// 		{
// 			'name|1': [//1表示随机的一个
// 				'hello',
// 				'Mock.js',
// 				'!'
// 			]
// 		}
// 	],
// 	'dataArrObj4|4': [// 4表示的是数组的长度，即对象的个数
// 		{
// 			'name|2': [//2表示2组数组，4个这样的两组数组
// 				'hello',
// 				'Mock.js',
// 				'!'
// 			]
// 		}
// 	]
// });
// console.log(JSON.stringify(dataArrObj, null, '\t'));

//// Function
//// 'name': function
// var dataFn = Mock.mock({
// 	'foo': 'Syntax Demo',
// 	'name': function() {
// 		return this .foo;
// 	}
// })
// console.log(JSON.stringify(dataFn, null, '\t'));



// // RegExp
// // 'name': Regexp
// var dataRegexp = Mock.mock({
// 	'regexp1': /[a-z][A-Z][0-9]/,
// 	'regexp2': /\w\W\s\S\d\D/,
// 	'regexp3': /\d{5,10}/,
// 	'regexp4|3': /\d{5,10}\-/,
// 	'regexp5|1-5': /\d{5,10}\-/,

// })
// console.log(JSON.stringify(dataRegexp, null, '\t'));

// // Path
// // Absolute Path
// var dataPathAbsolute = Mock.mock({
// 	'foo': 'Hello',
// 	'nested': {
// 		'a': {
// 			'b': {
// 				'c': 'Mock.js'
// 			}
// 		}
// 	},
// 	'absolutePath': '@/foo @nested/a/b/c'
// })
// console.log(JSON.stringify(dataPathAbsolute, null, '\t'));


// // Relative Path
// var dataPathRelative = Mock.mock({
// 	'foo': 'Hello',
// 	'nested': {
// 		'a': {
// 			'b': {
// 				'c': 'Mock.js'
// 			},
// 			'd': {
// 				'e': 'gulp.js'
// 			}
// 		}
// 	},
// 	'relativePath': {
// 		'a': {
// 			'b': {
// 				'c': '@../../../foo @../../../nested/a/d/e'
// 			}
// 		}
// 	}
// })
// console.log(JSON.stringify(dataPathRelative, null, '\t'));












