

var saveData = function($){

    var $localTextField = $("#localStorageM");
    var $sessionTextField = $("#StorageM");
    var $jsonTextField = $("#jsonStorageM");

    window.addEventListener("storage", refresh);

    refresh();

    $localTextField.keyup(addToLocalStorage);
    $sessionTextField.keyup(addToSessionStorage);
    $jsonTextField.keyup(addJsonToLocalStorage);

    function addToLocalStorage(){
        localStorage.setItem("localStorageM", $(this).val());
        refresh();
    }

    function addToSessionStorage(){
        sessionStorage.setItem("StorageM", $(this).val());
        refresh();
    }

    function addJsonToLocalStorage(){
        localStorage.setItem("jsonStorageM", JSON.stringify($(this).val()));
        refresh();
    }

    function refresh(){
        $localTextField.val(localStorage.getItem("localStorageM"));
        $sessionTextField.val(sessionStorage.getItem("StorageM"));
        $jsonTextField.val(JSON.parse(localStorage.getItem("jsonStorageM")));
    }

};

saveData(jQuery);