angular.module('starter')
.constant(
'json1', 
{  
    "db":"remgoDB",
    "collection": "Reminder" ,
       "documents" :
        [  
            {
                "name": "id",
                "label": "",
                "location": null,
                "repeat": false,
                "maxRepeatPerDay": 1,
                "timeRange": null

            }
        ]
}
)