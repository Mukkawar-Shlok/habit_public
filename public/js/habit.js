console.log('conncted js');

//for changing the status of all days
$('#dateList').on('click', '.item-btn', function () {
    var date = $(this).val();
    var habbitId = $(this).attr('habitid');
    //date needs to be sent with key value name for creation
    data = {
        date: date,
        id: habbitId
    };
    if (data != "") {
        // Convert data to URL-encoded format
        const encodeData = new URLSearchParams(data).toString();

        var url = "https://habit-cntest.onrender.com/status";
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

//for changing the status of todays habit
$('#topEle').on('click', '.item-btn', function () {
    var date = $(this).val();
    var habbitId = $(this).attr('habitid');
    //date needs to be sent with key value name for creation
    data = {
        date: date,
        id: habbitId
    };
    if (data != "") {
        // Convert data to URL-encoded format
        const encodeData = new URLSearchParams(data).toString();

        var url = "https://habit-cntest.onrender.com/status";
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

