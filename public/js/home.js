console.log('connected js');

//for creating the habbit
$('#submit').on('click', function () {
    var data = document.getElementById('habitInput').value;
    //date needs to be sent with key value name for creation
    data = {
        name: data
    };
    if (data != "") {
        // Convert data to URL-encoded format
        const encodeData = new URLSearchParams(data).toString();

        var url = "https://habit-cntest.onrender.com/create";

        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: encodeData
        }).then((response) => {
            if (response.status == 200) {
                location.reload();
            } else {
                console.log(response);
            }

        }).catch((err) => {
            console.log(err);
        })
    } else {
        console.log('empty field');
    }


});

//for deleting the habbit
$('#habitSection').on('click', '.item-delete', function () {
    var data = $(this).val();
    //date needs to be sent with key value name for creation
    data = {
        id: data
    };
    if (data != "") {
        // Convert data to URL-encoded format
        const encodeData = new URLSearchParams(data).toString();

        var url = "https://habit-cntest.onrender.com/delete";
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: encodeData
        }).then((response) => {
            if (response.status == 200) {
                location.reload();
            } else {
                console.log(response);
            }

        }).catch((err) => {
            console.log(err);
        })
    } else {
        console.log('Id not found');
    }
});

