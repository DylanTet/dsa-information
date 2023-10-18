    //fill array with 60000 elements
    const list = new Array(60000).join('1.1').split('.');
     
    function removeItemsFromList() {
        var item = list.pop();
     
        if (item) {
            setTimeout(() => {
                removeItemsFromList();
            }, 0);
            // removeItemsFromList();
        }
    };
     
    removeItemsFromList();