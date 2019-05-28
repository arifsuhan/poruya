
function show_file(file)
{
	//var file = URL.createObjectURL(event.target.files[0]);
	window.open(file,"_parent",);
}

function readFile(input) {

  let file = input.files[0];
  let reader = new FileReader();

  reader.readAsText(file,"base64");
  //reader.readAsArrayBuffer(file);
  //reader.readAsDataURL(file);

  reader.onload = function() {
  	//var d = JSON.stringify({ "dataURL": reader.result });
    //console.log(reader.result);
    let count = wordCount(reader.result);

    //word per minute
    let wpm = 200;
    let speed_test = Math.round(count / 200); 
    console.log(speed_test);
  };

  reader.onerror = function() {
    console.log(reader.error);
  };
}

function wordCount(para)
{	
	//pattern = /\b\s+(?!$)/;
	pattern = /[^\s\W]+/g;

	list = para.match(pattern);
	console.log(list);

	return list.length;
}


var word = 0;
var pdf = document.getElementById('fileToUpload');

pdf.addEventListener('change',function(event){
	readFile(pdf);
});





