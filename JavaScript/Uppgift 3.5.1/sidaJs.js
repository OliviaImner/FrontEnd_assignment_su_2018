var showData = function($){

    window.addEventListener("storage", refresh, false);

    var $localText = $("#localStorageM");
    var $sessionText = $("#StorageM");
    var $jsonText = $("#jsonStorageM");
    var $deleteButton = $("#deleteButton");

    $deleteButton.click(deleteData);

    refresh();

    function deleteData(){
        localStorage.removeItem("localStorageM");
        sessionStorage.removeItem("StorageM");
        localStorage.removeItem("jsonStorageM");
        refresh();
    }

    function refresh(){
        console.log("Refreshing...");
        $localText.html(localStorage.getItem("localStorageM"));
        $sessionText.html(sessionStorage.getItem("StorageM"));
        $jsonText.html(JSON.parse(localStorage.getItem("jsonStorageM")));
    }

};

sida(jQuery);