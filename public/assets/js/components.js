// Load head content first
$.get("components/head.html", function(data) {
    $('head').prepend(data);
    // Load footer component
   
});
