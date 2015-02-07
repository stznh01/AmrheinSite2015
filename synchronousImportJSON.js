// Load JSON text from server hosted file and return JSON parsed object
function loadJSON(filePath) {
  // Load json file;
  var json = loadTextFileAjaxSync(filePath, "application/json");


  // CODE ADDED ------------------------------------------------------------ // 
  /** Adaptation by Hansen: remove "//"
   *
   *  (!) BAD abstraction:
   * This adaptation COULD break your json file! The replace function is added
   * just to undo the comment fetched from finance.google.com
   */
  json = json.replace("// ", "");

  // END OF ADDITION ------------------------------------------------------- //

  // Parse json
  return JSON.parse(json);
}

// Load text with Ajax synchronously: takes path to file and optional MIME type
function loadTextFileAjaxSync(filePath, mimeType)
{
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.open("GET",filePath,false);
  if (mimeType != null) {
    if (xmlhttp.overrideMimeType) {
      xmlhttp.overrideMimeType(mimeType);
    }
  }
  xmlhttp.send();
  if (xmlhttp.status==200)
  {
    return xmlhttp.responseText;
  }
  else {
    // TODO Throw exception
    return null;
  }
}
