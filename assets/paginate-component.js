document.addEventListener("DOMContentLoaded", function() {
    let endlessScroll = new Ajaxinate({
      container: '#AjaxinateContainer',
      pagination: '#AjaxinatePagination',
      method: 'click',
      loadingText: 'Loading...' 
    });
  });