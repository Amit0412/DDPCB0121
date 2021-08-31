function incrementit()
{
    var temp=document.getElementById("inc");
    var text=temp.innerHTML;
    ++text;
    document.getElementById("inc").innerHTML=text;
}