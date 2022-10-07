    function setup(htmlComponent) {

    document.getElementById("userPassword").addEventListener("input", function(evt) {
    htmlComponent.Data = event.target.value;
    });
    }