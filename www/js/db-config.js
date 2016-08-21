angular.module('starter')
.constant('json1', {  
    "db" : "remgoDB",
    "collection" : "Reminder",
    "documents" : [{
        "id": "12345",
        "label": "",
        "location": null,
        "repeat": false,
        "maxRepeatPerDay": 1,
        "timeRange": null
    }]
});