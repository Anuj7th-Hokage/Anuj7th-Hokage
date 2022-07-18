console.log("hello js")
//##var is globally scope 
//##var can be update nd re-decleared with in scope 
 var a= 9
 var a=10
  a=11
console.log(a)
//(##mostly dont use var in js)
/////////////////////////////////////////////
//##it is blocked scoped
//##constant neither updated not be re-redecleard
//##constant variable are not intialized
const owner ="anuj"
//writer ="sampda"----->ERROR
console.log(writer)
/////////////////////////////////////
//##LET IS blocked scoped
//##let can be updated but not re-decleard
let b=88
//let b=8---> error
{
    let b=99
    console.log(b)
}
console.log(b)
