// initialize
var task = new SelfTimer(new Date());

var greeting = function(str) {
    return toastr.success(str, 'executing at().HoursBetween()', {timeOut: 4500});
}

var typing = function(str) {
    return $("#typed").typed({strings: [str], typeSpeed: 1});
}

var morning = function() {
    return task.at().HoursBetween(5, 11, function() {
        greeting("Good morning!");
        typing("EXECUTED: SelfTimer().at().HoursBetween(5, 11");
    }); // ! .at().HoursBetween()
};

var lunch = function() {
    return task.at().Hour(12, function() {

        toastr.success("It's lunch time! ", 'executing at().Hour()', {timeOut: 4500});
        typing("EXECUTED: SelfTimer().at().Hour(12)");

    }); // ! .at().Hour
}

var afternoon = function() {
    task.at().HoursBetween(13, 17, function() {
        greeting("Good afternoon!");
        typing("EXECUTED: SelfTimer().at().HoursBetween(13, 17)");
    }); // ! .at().HoursBetween()

};

var evening = function() {
    task.at().HoursBetween(18, 23, function() {
        greeting("Good evening!");
        typing("EXECUTED: SelfTimer().at().HoursBetween(18, 23)");

    }); // ! .at().HoursBetween()

};

var late = function() {
    task.at().HoursBetween(0, 4, function() {
        greeting("Good evening?");
        typing("EXECUTED: SelfTimer().at().HoursBetween(0, 4)");

    }); // ! .at().HoursBetween()
};

// implements
setTimeout(function() {

    morning();
    lunch();
    afternoon();
    evening();
    late();

}, 3000);
