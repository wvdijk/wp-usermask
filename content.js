chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      (function(){
        // actual code comes here
        const URL = window.location.toString();
        if (URL.indexOf('user-edit.php') > -1) {
          console.log('Applying mask');
          // uncheck all blogs
          let checkboxes = document.getElementById('profile-div').querySelectorAll("input[type='checkbox']");
          let blogs = ['1','8', '114', '127'];
          checkboxes.forEach(function(i) {
            blogs.indexOf(i.value) > -1 ? i.checked = true : i.checked = false;
          });
          document.getElementById('role').value = 'editor';
          document.getElementById('rich_editing').checked = true;
        } else {
          return;
        }
        //do not touch anything below this point
      })();
 }
});
