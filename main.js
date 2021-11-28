var displaystudentarray=[]
var studentcomma=[]
function submit(){
for (var i = 1; i < 5; i++) {
    var name=document.getElementById("name_of_the_student_"+i).value
    displaystudentarray.push(name)
}
for (var i = 0; i < displaystudentarray.length; i++) {
    studentcomma.push("Name-"+displaystudentarray[i])
    
}
document.getElementById("display_name_with_commas").innerHTML=studentcomma
var removecomms=studentcomma.join(" ")
document.getElementById("display_name_without_commas").innerHTML=removecomms
document.getElementById("submit_button").style.display="none"
document.getElementById("sort_button").style.display="inline-block"

}
function sorting(){
displaystudentarray.sort()
var withcommas=[]
var withoutcommas=[]
for (var i = 0; i <displaystudentarray.length ; i++) {
    withcommas.push("Name-"+displaystudentarray[i])

    
}
document.getElementById("display_name_with_commas").innerHTML=withcommas
withoutcommas=withcommas.join(" ")
document.getElementById("display_name_without_commas").innerHTML=withoutcommas
}