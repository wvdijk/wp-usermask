chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      (function(){
        // actual code comes here
        const url = window.location.toString();
        if (url.indexOf('user-edit.php') > -1) {
          console.log('Applying mask');
          // uncheck all blogs
          let checkboxes = document.querySelectorAll("input[type='checkbox']");
          let blogs = ['1','8', '114', '127']; // nieuwshonk, inbeeld, widgets, bvhw
          checkboxes.forEach(function(i) {
            blogs.indexOf(i.value) > -1 ? i.checked = true : i.checked = false;
          });
          document.getElementById('role').value = 'editor';
        } else {
          return;
        }
        //do not touch anything below this point
      })();
 }
});
