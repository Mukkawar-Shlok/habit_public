const Habit = require('../models/habit');

//for getting todays date
function getDate() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let today = day + "/" + month + "/" + year;
    return today
}

//for getting todays as well as previous dates
function PreDate() {
    let arr = [];
    for (let i = 6; i > -1; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        let mm = d.getMonth() + 1;
        // if (mm < 10) mm = '0' + mm;
        let dd = d.getDate();
        // if (dd < 10) dd = '0' + dd;
        const yyyy = d.getFullYear();
        var temp = (dd + '/' + mm + '/' + yyyy);
        arr.push(temp)
    }
    return arr;
}

//home 
module.exports.home = async (req, res) => {
    let habit = await Habit.find();
    if (habit) {
        // let weekday = await getWeek();
        let preWeekday = await PreDate()
        // res.status(200).send({ habit, preWeekday });
        res.render('home', {
            habit, preWeekday
        })
    } else {
        return res.status(500).send('failed to fetc habits');
    }
};

///for habit creation
module.exports.create = async (req, res) => {
    let habit = await Habit.findOne({ name: req.body.name });
    try {
        if (habit) {
            console.log('already exists');
            return res.status(200).send('Already exists');
        } else {
            let habitObject = await Habit.create({
                name: req.body.name,
                dates: { date: await getDate(), status: 'none' }
            })
            return res.status(200).send(`Name : ${habitObject} `);
        }
    } catch (err) {
        console.log(err);
        return res.status(500);
    }

};

//for changing the status of specific habbit at specific date
module.exports.status = async (req, res) => {
    let habbitId = req.body.id;
    let date = req.body.date;
    if (habbitId) {
        try {
            let habbitObject = await Habit.findById(habbitId);
            if (habbitObject) {
                //search date if found change status if not create
                let datesArray = habbitObject.dates;
                let found = false;
                datesArray.find((item, index) => {
                    if (item.date == date) {
                        found = true;
                        if (item.status == "none") {
                            item.status = "Done";
                        } else if (item.status == "Done") {
                            item.status = "NotDone";
                        } else {
                            item.status = "none";
                        }
                    }
                });
                if (!found) {
                    datesArray.push({ date: date, status: 'Done' });
                }
                habbitObject.dates = datesArray;
                await habbitObject.save().then((sucess) => {
                    return res.status(200).send(habbitObject);
                }).catch((err) => {
                    console.log(err);
                    return res.status(500).send('Internal Server error');
                })
            } else {
                return res.status(500).send('Invalid information')
            }

        } catch (err) {
            console.log(err);
            return res.status(500).send('Internal Server error');
        }

    } else {
        res.status(500).send('Incomplete information')
    }

};

//for deleting the habit
module.exports.delete = async (req, res) => {
    let habbitId = req.body.id;
    if (habbitId) {
        try {
            let habbitObject = await Habit.findById(habbitId);
            if (habbitObject) {
                let deleteResult = await Habit.deleteOne({ _id: habbitId });
                if (deleteResult) {
                    return res.status(200).send('Habit Deleted Sucessfully');
                } else {
                    return res.status(500).send('Failed to delete habit');
                }

            } else {
                return res.status(500).send('Invalid information');
            }
        } catch (err) {
            console.log(err);
            return res.status(500).send('Failed to delete habit');
        }

    } else {
        return res.status(500).send('Incomplete information');
    }
};

//home page for specific habit
module.exports.habit = async (req, res) => {
    var id = req.query.id;
    if (id) {
        try {

            let habitArray = await Habit.findById(id);
            // let weekday = await getWeek();
            let preWeekday = await PreDate()
            if (habitArray) {
                return res.render('habit', {
                    habitArray, preWeekday
                })
            } else {
                return res.status(500).send('AIGO WHAT ARE YOU DOING? HTML HACKER?');
            }

        } catch (err) {

        };

    } else {
        return res.status(500).send('AIGO WHAT ARE YOU DOING? SENDING EMPTY ID?');
    }
};