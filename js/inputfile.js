function handleFileSelect(evt) {
    var files = document.getElementById('files').files;
    if (!files.length) {
      alert('Please select a file!');
      return;
    }

    var file = files[0];
    var reader = new FileReader();
    reader.onloadend = function(evt) {
        if (evt.target.readyState == FileReader.DONE) { // DONE == 2
            document.getElementById('output').textContent = evt.target.result;
        }  
    };
    reader.readAsText(file, "UTF-8");
}
document.getElementById('files').addEventListener('change', handleFileSelect, false);