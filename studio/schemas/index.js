export const schemaTypes = [
    {
        name: 'electricityServiceForm',
        title: 'Electricity Service Form',
        type: 'document',
        fields: [
            {
                name: 'meterNumber',
                title: 'Meter Number',
                type: 'string'
            },
            {
                name: 'meterOwnerName',
                title: 'Meter Owner Name',
                type: 'string'
            },
            {
                name: 'date',
                title: 'Date',
                type: 'date'
            },
            {
                name: 'time',
                title: 'Time',
                type: 'string'
            },
            {
                name: 'meterReading',
                title: 'Meter Reading',
                type: 'number'
            },
            {
                name: 'houseNumber',
                title: 'House Number',
                type: 'string'
            },
            {
                name: 'phoneNumber',
                title: 'Phone Number',
                type: 'string'
            },
            {
                name: 'adharNumber',
                title: 'Aadhaar Number',
                type: 'string'
            }
        ]
    }
]
