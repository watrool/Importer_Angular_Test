var importer=angular.module("importer",["selectionComponent","menuComponent","tableComponent","angularFileUpload"]);importer.controller("importerCtrl",["$scope","FileUploader",function(e,l){e.filesMetaData=[{filename:"VCDaveImport.csv",name:"test",fileURL:"10.3.86.65:8888/Importer/serverSideNodejs/upload/troy/VCDaveImport Thu Oct 23 2014 14:32:30 GMT-0400 (EDT).csv"}],e.filesData={},e.uploader=new l({url:"http:///10.3.86.65:3000/upload",removeAfterUpload:!1}),e.filesData["VCDaveImport.csv"]=["field1","field2","field3","field4","field5","field6","field7","field8","field9","field10","field11","field12"],e.fieldDetails=[{detailName:"Number Type",options:["Int","Float1","Float2"]},{detailName:"Unit",options:["meter","centimeter","litre"]},{detailName:"Anything",options:["random1","random2","random3"]}],e.menuFieldDetail={fieldType:{value:""},fieldName:{value:""},fieldUploader:{value:e.uploader}},e.selectedFields={value:""},e.realData=[{Date:"01/01/2014",Field1:"0.1",Field2:"0.2"},{Date:"01/02/2014",Field1:"0.2",Field2:"0.3"},{Date:"01/03/2014",Field1:"0.4",Field2:"0.5"},{Date:"01/04/2014",Field1:"0.6",Field2:"0.7"},{Date:"01/05/2014",Field1:"0.8",Field2:"0.9"}],e.submitUpload=function(){}}]);