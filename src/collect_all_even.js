
function collect_same_elements(collection_a, object_b) {
	var collection_a=new Array();
	var collection_b=new Array();
	for(var i=0;i<collection_a.length;i++){

 var arr_a=collection_a[i].key;
for(var j=0;j<collection_b.value.length;j++){
   var arr_b=collection_b.value[j];
       if(collection_a[i].key==collection_b.value[j]){
           alert(collection_a[i].key)
}
}
}
module.exports = collect_same_elements;
