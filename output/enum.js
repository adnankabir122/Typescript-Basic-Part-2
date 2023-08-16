"use strict";
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
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
// numeric enum 
var RequestType;
(function (RequestType) {
    RequestType[RequestType["ReadData"] = 1] = "ReadData";
    RequestType[RequestType["GetData"] = 2] = "GetData";
    RequestType[RequestType["DeleteData"] = 3] = "DeleteData";
})(RequestType || (RequestType = {}));
// string enum 
var RequestType2;
(function (RequestType2) {
    RequestType2["ReadData"] = "Read_DATA";
    RequestType2["DeleteData"] = "delete_Data";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType);
console.log(RequestType2.DeleteData);
// hetergenous enum 
var RequestType3;
(function (RequestType3) {
    RequestType3["ReadData"] = "Read_DATA";
    RequestType3[RequestType3["DeleteData"] = 0] = "DeleteData";
})(RequestType3 || (RequestType3 = {}));
