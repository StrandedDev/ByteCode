
$(document).ready(function() {
    // Function to toggle the navbar
    function toggleNavbar() {
        $('#navbar').toggle(100);
    }

    // Show the navbar when the open button is clicked
    $('#open_btn').click(function() {
        toggleNavbar(100);
    });

    // Hide the navbar when clicking outside of it
    $(document).click(function(event) {
        if (!$(event.target).closest('#navbar, #open_btn').length) {
            $('#navbar').hide(100);
        }
    });
});

