// Write a JavaScript program to pass a 'JavaScript function' as parameter.

function Student() {
    console.log('Hello');
}

function add(a,b, callback)
{
    console.log  (a+b)
    callback();  
}
add(1,2, Student);


