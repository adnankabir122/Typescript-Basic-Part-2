/* 
1. constant store korar jonno
2. duplicate data rakha jabe na 
3. Method rakha jabe na
3. Enum types: numeric,string, hetergenous
*/
// Basic 
// const small = 1
// const medium = 2
// const large = 3
enum Size{
    small = 1,
    medium = 2,
    large = 3
}


// numeric enum 
enum RequestType{
    ReadData = 1,
    GetData,
    DeleteData
} 
// string enum 
enum RequestType2{
    ReadData = "Read_DATA",
    DeleteData = "delete_Data"
} 
console.log(RequestType)
console.log(RequestType2.DeleteData)

// hetergenous enum 
enum RequestType3{
    ReadData = "Read_DATA",
    DeleteData = 0
} 