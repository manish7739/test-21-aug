1. ## Write a JavaScript program to pass a 'JavaScript function' as parameter.
     function Student()
      {
         console.log('Hello');
      }

    function add(a,b, callback)
      {
         console.log  (a+b)
          callback();  
       }
add(1,2, Student);
## Output:- 
3
Hello
2. ## What’s the difference between window.onload vs document.onload?

### window.onload():-
 - Method is used to perform the operation immediately after the web page is  loaded.
 - when HTML After the document is loaded , Execute a method immediately .

- it Usually used for <body> element 
- After the page is fully loaded Execute script code .

# Example
    window.onload=function(){
    Func1();
    Func2();
    Func3();
    .....
}

### Document.onload():-

- The document.onload will fire when the DOM is read.
- Excluding images and external content.

 # Example

document.onload = function() {
  alert('Loaded!');
};

3. ## What’s the fastest way to query DOM?

- getElementById is the fastest. But also,
- if you plan to reuse found object multiple times - cache
- it in a variable so you don't  have to look it up again. 
- There's more to speed than lookup methods.
- also fastest query is getElementsByClassName,
- getElementByTagName etc.