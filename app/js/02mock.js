
// Date
// Mock.Random.date( format? )

// Mock.Random.date()

console.log(Mock.Random.date());
console.log(Mock.mock('@date'));
console.log(Mock.mock('@date()'));

// Mock.Random.date( format )
console.log(Mock.Random.date('yyyy-MM-dd'));
console.log(Mock.Random.date('yy-MM-dd'));
console.log(Mock.Random.date('y-MM-dd'));
console.log(Mock.Random.date('y-M-d'));

console.log(Mock.mock('@date("yyyy-MM-dd")'));
console.log(Mock.mock('@date("yy-MM-dd")'));
console.log(Mock.mock('@date("y-MM-dd")'));
console.log(Mock.mock('@date("y-M-d")'));

console.log(Mock.mock('@date("yyyy yy y MM M dd d")'));


// Mock.Random.time( format? )
// Mock.Random.time()
console.log(Mock.Random.time());
console.log(Mock.mock('@time'));
console.log(Mock.mock('@time()'));

// Mock.Random.time( format )
console.log(Mock.Random.time('A HH:mm:ss'));
console.log(Mock.Random.time('a HH:mm:ss'));
console.log(Mock.Random.time('HH:mm:ss'));
console.log(Mock.Random.time('H:m:s'));

console.log(Mock.mock('@time("A HH:mm:ss")'));
console.log(Mock.mock('@time("a HH:mm:ss")'));
console.log(Mock.mock('@time("HH:mm:ss")'));
console.log(Mock.mock('@time("H:m:s")'));

console.log(Mock.mock('@datetime("HH H hh h mm m ss s SS S A a T")'));



// Random.datetime( format? )
// Mock.Random.datetime()
console.log(Mock.Random.datetime());
console.log(Mock.mock('@datetime'));
console.log(Mock.mock('@datetime()'));

// Mock.Random.datetime( format )
console.log(Mock.Random.datetime('yyyy-MM-dd A HH:mm:ss'));
console.log(Mock.Random.datetime('yy-MM-dd a HH:mm:ss'));
console.log(Mock.Random.datetime('y-MM-dd HH:mm:ss'));
console.log(Mock.Random.datetime('y-M-d H:m:s'));

console.log(Mock.mock('@datetime("yyyy-MM-dd A HH:mm:ss")'));
console.log(Mock.mock('@datetime("yy-MM-dd a HH:mm:ss")'));
console.log(Mock.mock('@datetime("y-MM-dd HH:mm:ss")'));
console.log(Mock.mock('@datetime("y-M-d H:m:s")'));

console.log(Mock.mock('@datetime("yyyy yy y MM M dd d HH H hh h mm m ss s SS S A a T")'));


// Mock.Random.now( unit?, format? )
// Mock.Random.now()
console.log(Mock.Random.now());
console.log(Mock.mock('@now'));
console.log(Mock.mock('@now()'));

// Ranndom.now( unit )
console.log(Mock.Random.now('year'));
console.log(Mock.Random.now('month'));
console.log(Mock.Random.now('week'));
console.log(Mock.Random.now('day'));
console.log(Mock.Random.now('hour'));
console.log(Mock.Random.now('minute'));
console.log(Mock.Random.now('second'));

// Ranndom.now( format )
console.log(Mock.Random.now('yyyy-MM-dd HH:mm:ss SS'));

// Ranndom.now( unit, format )
console.log(Mock.Random.now('day', 'yyyy-MM-dd HH:mm:ss SS'));


























