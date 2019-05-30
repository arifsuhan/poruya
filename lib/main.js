
function showResult(str) 
{
    document.getElementById("txtHint").innerHTML = str;
}

function showHint(str) 
{
  let speed_test_result  = wordCount(str);
  showResult(speed_test_result);
}

function showText(file)
{ 
  let reader = new FileReader();
  reader.readAsText(file.files[0]);

  reader.onload = function() {
    let speed_test  = wordCount(reader.result);
    document.getElementById("inputText").innerHTML = reader.result;
    showResult(speed_test);
  } 
}

function wordCount(para)
{ 
  //pattern = /\b\s+(?!$)/;
  //pattern = /[^\s\W]+/g;
  //pattern = /[^\s!&?$*.,;|]+/g;
  pattern = /[^\s,;?!:.|।-]+/g;
  list = para.match(pattern);

  let res ="";

  if(list!=null)
  {
    let wpm = 200;
    let speed_test = Math.round(list.length / wpm);
    res = "You will need "+speed_test+" minutes!";
  }

  return res;
}

