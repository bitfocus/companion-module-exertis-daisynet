export function setupFeedbacks(instance) {
    instance.setFeedbackDefinitions({
        // IDX 2
        autoSwitchOn: {
            type: 'boolean',
            name: 'Auto switch active',
            description: 'True when the Auto Switch Mode is in active status',
            options: [],
            callback: (feedback, context) => {
                return instance.autoSwitchStatus;
            }
        },
        // IDX 6
        orderSequenceNumber: {
            type: 'advanced',
            name: 'Order Sequence Number',
            description: 'Returns the order sequence number',
            options: [],
            callback: (feedback, context) => {
                return {text: instance.orderSequenceNumber};
            }
        },
        // IDX 8
        showMeSign: {
            type: 'boolean',
            name: 'ShowMe Signal active',
            description: 'True when the ShowMe Signal is active',
            options: [],
            callback: (feedback, context) => {
                return instance.showMeActive;
            }
        },
        // IDX 9
        ringMarker: {
            type: 'boolean',
            name: 'Ring Marker',
            description: 'True when the Ring Marker is active',
            options: [],
            callback: (feedback, context) => {
                return instance.ringMarker;
            }
        },
        // IDX 11
        subgroup: {
            type: 'boolean',
            name: 'Subgroup',
            description: 'True when the current device is Subgroup',
            options: [],
            callback: (feedback, context) => {
                return instance.subgroup;
            }
        },
        // IDX 13
        sortUngrouping: {
            type: 'boolean',
            name: 'Sort Ungrouping',
            description: 'True when the Sort Ungrouping is active',
            options: [],
            callback: (feedback, context) => {
                return instance.sortUngrouping;
            }
        },
        // IDX 15
        locateMe: {
            type: 'boolean',
            name: 'LocateMe',
            description: 'True when the LocateMe function is active',
            options: [],
            callback: (feedback, context) => {
                return instance.locateMeActive;
            }
        },
        // IDX 18
        cecAutoPower: {
            type: 'boolean',
            name: 'CEC Auto Power',
            description: 'True when the CEC Auto Power is enabled',
            options: [],
            callback: (feedback, context) => {
                return instance.cecAutoPowerStatus;
            }
        },
        // IDX 20
        cecPowerDelayTime: {
            type: 'advanced',
            name: 'CEC Power Delay Time',
            description: 'Returns the current CEC Power delay time',
            options: [],
            callback: (feedback, context) => {
                return {text: instance.cecPowerDelayTime};
            }
        },
        // IDX 30
        uartAutoPower: {
            type: 'boolean',
            name: 'UART Auto Power',
            description: 'True when the UART Auto Power is enabled',
            options: [],
            callback: (feedback, context) => {
                return instance.uartAutoPower;
            }
        },
        // IDX 32
        displayPowerDelayTime: {
            type: 'advanced',
            name: 'Display Power Delay Time',
            description: 'Returns the current Display Power delay time',
            options: [],
            callback: (feedback, context) => {
                return {text: instance.displayPowerDelayTime};
            }
        },
        // IDX 35
        inputHDCPSupport: {
            type: 'boolean',
            name: 'Input HDCP Support',
            description: 'True when the HDMI inputs supports HDCP',
            options: [],
            callback: (feedback, context) => {
                return instance.inputHDCPSupport;
            }
        },
        // IDX 37
        allInputEDIDStatus: {
            type: 'advanced',
            name: 'All Input EDID Status',
            description: 'Returns the current EDID status',
            options: [],
            callback: (feedback, context) => {
                return {text: instance.allInputEDIDStatus};
            }
        },
        // IDX 40
        firmwareVersion: {
            type: 'advanced',
            name: 'Firmware Version',
            description: 'Returns the current Firmware version',
            options: [],
            callback: (feedback, context) => {
                return {text: instance.firmwareVersion};
            }
        },
    })
}