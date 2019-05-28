
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
    console.log(reader.result);
  };

  reader.onerror = function() {
    console.log(reader.error);
  };
}

var pdf = document.getElementById('fileToUpload');

pdf.addEventListener('change',function(event){
	readFile(pdf);
});





