


function showResult(str) 
{ 
  document.getElementById("txtHint").innerHTML = str;
}


function validResult(list)
{
  if(list != null)
  {
    var m = spellChecker(list);
    showResult(m);
  }
  else
  {
    showResult("")
  }
}



function dataSplit(str)
{
  pattern = /[^\s,;?!:.|।-]+/g;
  list = str.match(pattern);
  return list;
}



function showHint(str) 
{
  list = dataSplit(str);
  validResult(list);
}



function showText(file)
{ 
  
  let reader = new FileReader();
  reader.readAsText(file.files[0]);
  reader.onload = function() {

    para = reader.result;
    list = dataSplit(para);
    var m1 = list.join(" ");
    document.getElementById("inputText").innerHTML = para;
    validResult(list);

  }
}



function spellChecker(list)
{ 

  for(var i=0;i<list.length;i++)
  {
    if(banglaSpell[0][list[i].toLowerCase()] == undefined)
    {
      list[i] += " - সঠিক";
    }
    else
    {
      list[i] += " - "+banglaSpell[0][list[i].toLowerCase()];
    }
  }
  return list.join("<br/>");
}



