export function setupActions(instance) {
    instance.setActionDefinitions({
        // IDX 1
        setAutoSwitchOnOff: {
            name: "Set Auto Switch On/Off",
            description: "Turn on/off the auto switch function",
            options: [
                {
                    type: 'dropdown',
                    label: 'Value',
                    id: 'selectedSwitchValue',
                    default: "on",
                    choices: [
                        { id: "on", label: "On" },
                        { id: "off", label: "Off" },
                    ],
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SET AUTOSW_ONOFF " + action.options.selectedSwitchValue);
            },
        },
        // IDX 3
        switchInputToAllOutputs: {
            name: "Switch selected input to all outputs",
            description: "Switch selected input to all outputs",
            options: [
                {
                    type: 'dropdown',
                    label: 'Input',
                    id: 'selectedInput',
                    default: "dp",
                    choices: [
                        { id: "dp", label: "DisplayPort" },
                        { id: "vga", label: "VGA" },
                        { id: "hdmi", label: "HDMI" },
                        { id: "hdbt", label: "HDBT" },
                    ],
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SET SW " + action.options.selectedInput + " all");
            },
        },
        // IDX 7
        setShowMe: {
            name: "Set ShowMe Sign",
            description: "Set Show Me signal",
            options: [
                {
                    type: 'dropdown',
                    label: 'Show',
                    id: 'selectedSwitchValue',
                    default: "true",
                    choices: [
                        { id: "true", label: "True" },
                        { id: "false", label: "False" },
                    ],
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SET SHOWME " + action.options.selectedSwitchValue);
            },
        },
        // IDX 10
        setSubgroup: {
            name: "Set Subgroup",
            description: "Set subgroup for current or all devices",
            options: [
                {
                    type: 'dropdown',
                    label: 'Device Selection',
                    id: 'selectedDevice',
                    default: "self",
                    choices: [
                        { id: "self", label: "Self" },
                        { id: "all", label: "All" },
                    ],
                },
                {
                    type: 'dropdown',
                    label: 'Subgroup',
                    id: 'selectedSubgroup',
                    default: "on",
                    choices: [
                        { id: "on", label: "On" },
                        { id: "off", label: "Off" },
                    ],
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SET SUBGROUP " + action.options.selectedDevice + " " + action.options.selectedSubgroup);
            },
        },
        // IDX 12
        setSortUngrouping: {
            name: "Set Sort Ungrouping",
            description: "Turn on/off the sort ungrouping",
            options: [
                {
                    type: 'dropdown',
                    label: 'Value',
                    id: 'selectedSwitchValue',
                    default: "on",
                    choices: [
                        { id: "on", label: "On" },
                        { id: "off", label: "Off" },
                    ],
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SET SORTUNGROUP " + action.options.selectedSwitchValue);
            },
        },
        // IDX 14
        setLocateMeLED: {
            name: "Set LocateMe LED",
            description: "Indicates the devices current location",
            options: [
                {
                    type: 'dropdown',
                    label: 'Value',
                    id: 'selectedSwitchValue',
                    default: "on",
                    choices: [
                        { id: "on", label: "On" },
                        { id: "off", label: "Off" },
                    ],
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SET LEDFLICKER " + action.options.selectedSwitchValue);
            },
        },
        // IDX 17
        setCecAutoPower: {
            name: "Set CEC Auto Power On/Off",
            description: "Set CEC Auto power on with HDMI out",
            options: [
                {
                    type: 'dropdown',
                    label: 'CEC Auto Power',
                    id: 'selectedSwitchValue',
                    default: "on",
                    choices: [
                        { id: "on", label: "On" },
                        { id: "off", label: "Off" },
                    ],
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SET CECAUTO_ONOFF hdmi " + action.options.selectedSwitchValue);
            },
        },
        // IDX 19
        setCecPowerDelayTime: {
            name: "Set CEC Power Delay Time",
            description: "Set the CEC auto Power Delay Timing",
            options: [
                {
                    type: 'number',
                    label: 'Time (minutes)',
                    id: 'selectedTime',
                    min: 0,
                    max: 30,
                    default: 2,
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SET CECAUTO_DELAY hdmi " + action.options.selectedTime);
            },
        },
        // IDX 21
        setUartBaudRate: {
            name: "Set UART Baud Rate",
            description: "Set UART Baud Rate",
            options: [
                {
                    type: 'dropdown',
                    label: 'Baud Rate',
                    id: 'selectedBaudRate',
                    default: 9600,
                    choices: [
                        { id: 9600, label: "9600" },
                        { id: 19200, label: "19200" },
                        { id: 38400, label: "38400" },
                        { id: 57600, label: "57600" },
                        { id: 115200, label: "115200" },
                    ],
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SET UARTBAUDRATE " + action.options.selectedBaudRate);
            },
        },
        // IDX 22
        setUartEndChar: {
            name: "Set UART End Character",
            description: "Set UART End Character",
            options: [
                {
                    type: 'dropdown',
                    label: 'UART End Character',
                    id: 'selectedEndChar',
                    default: "null",
                    choices: [
                        { id: "null", label: "Empty" },
                        { id: "cr", label: "CR: Carriage return" },
                        { id: "lf", label: "LF: Line feed" },
                        { id: "crlf", label: "CR & LF" },
                    ],
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SET UARTENDCHAR " + action.options.selectedEndChar);
            },
        },
        // IDX 23
        setUartStopBits: {
            name: "Set UART STOPBIT",
            description: "Set UART STOPBIT",
            options: [
                {
                    type: 'dropdown',
                    label: 'UART Stopbits',
                    id: 'selectedStopbit',
                    default: "1",
                    choices: [
                        { id: "1", label: "1" },
                        { id: "1_5", label: "1,5" },
                        { id: "2", label: "2" },
                    ],
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SET UARTSTOPBIT " + action.options.selectedStopbit);
            },
        },
        // IDX 24
        setUartParityBit: {
            name: "Set UART Parity bit",
            description: "Set UART Parity bit",
            options: [
                {
                    type: 'dropdown',
                    label: 'UART Parity Bit',
                    id: 'selectedParityBit',
                    default: "N",
                    choices: [
                        { id: "N", label: "No parity" },
                        { id: "O", label: "Odd parity" },
                        { id: "E", label: "Even parity" },
                    ],
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SET UARTPARITY " + action.options.selectedParityBit);
            },
        },
        // IDX 25
        charUartCmdEdit: {
            name: "Character UART Command Edit",
            description: "Set specific Power On/Off commands",
            options: [
                {
                    type: 'dropdown',
                    label: 'Operation',
                    id: 'selectedOperation',
                    default: "poweron",
                    choices: [
                        { id: "poweron", label: "Power On" },
                        { id: "poweroff", label: "Power Off" },
                    ],
                },
                {
                    type: 'textinput',
                    label: 'Command',
                    id: 'selectedCommand',
                    default: "power on",
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SET UARTCMD_STREDIT " + action.options.selectedOperation + " " + action.options.selectedCommand);
            },
        },
        // IDX 26
        hexUartCmdEdit: {
            name: "Hex UART Command Edit",
            description: "Set specific HEX Power On/Off commands",
            options: [
                {
                    type: 'dropdown',
                    label: 'Operation',
                    id: 'selectedOperation',
                    default: "poweron",
                    choices: [
                        { id: "poweron", label: "Power On" },
                        { id: "poweroff", label: "Power Off" },
                    ],
                },
                {
                    type: 'textinput',
                    label: 'Command',
                    id: 'selectedCommand',
                    default: "70 77 72 20 6F 6E 0D 0A",
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SETEX UARTCMD_HEXEDIT " + action.options.selectedOperation + " " + action.options.selectedCommand);
            },
        },
        // IDX 28
        setUartPower: {
            name: "Set UART Power On/Off",
            description: "Turn on/off the projector connected to the HDMI port",
            options: [
                {
                    type: 'dropdown',
                    label: 'Power',
                    id: 'selectedSwitchValue',
                    default: "on",
                    choices: [
                        { id: "on", label: "Power On" },
                        { id: "off", label: "Power Off" },
                    ],
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SET UARTPWR_ONOFF hdmi " + action.options.selectedSwitchValue);
            },
        },
        // IDX 29
        setUartAutoPower: {
            name: "Set UART Auto Power On/Off",
            description: "Turn on/off the auto power of the projector connected to the HDMI port",
            options: [
                {
                    type: 'dropdown',
                    label: 'Autopower',
                    id: 'selectedSwitchValue',
                    default: "on",
                    choices: [
                        { id: "on", label: "Auto Power On" },
                        { id: "off", label: "Auto Power Off" },
                    ],
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SET UARTAUTO_ONOFF hdmi " + action.options.selectedSwitchValue);
            },
        },
        // IDX 31
        setCecPowerDelayTime: {
            name: "Set UART Power Delay Time",
            description: "Set UART Power Delay Time",
            options: [
                {
                    type: 'number',
                    label: 'Time (minutes)',
                    id: 'selectedTime',
                    min: 0,
                    max: 30,
                    default: 2,
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SET UARTPWR_DELAY hdmi " + action.options.selectedTime);
            },
        },
        // IDX 34
        setInputHDCPSupport: {
            name: "Set Inputs support HDCP or not",
            description: "Set Inputs support HDCP or not",
            options: [
                {
                    type: 'dropdown',
                    label: 'Autopower',
                    id: 'selectedSwitchValue',
                    default: "on",
                    choices: [
                        { id: "on", label: "HDCP Support On" },
                        { id: "off", label: "HDCP Support Off" },
                    ],
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SET HDCPSUPPORT_ONOFF hdmi " + action.options.selectedSwitchValue);
            },
        },
        // IDX 38
        factoryReset: {
            name: "Factory Reset",
            description: "Factory reset the device",
            options: [],
            callback: async (action, context) => {
                instance.sendMessage("RESET");
            },
        },
        // IDX 39
        systemReboot: {
            name: "System Reboot",
            description: "Reboot the device",
            options: [],
            callback: async (action, context) => {
                instance.sendMessage("REBOOT");
            },
        },
        // IDX 36
        setAllInputEDID: {
            name: "Set All Input EDID",
            description: "Set All Input EDID",
            options: [
                {
                    type: 'dropdown',
                    label: 'EDID',
                    id: 'selectedEDID',
                    default: 0,
                    choices: [
                        {id: 0, label: "//HDMI/DP/HDBT: 3840x2160@30Hz, 2CH VGA:1920x1200@60Hz"},
                        {id: 1, label: "//HDMI/DP/HDBT: 1920x1200@60Hz, 2CH VGA:1920x1200@60Hz"},
                        {id: 2, label: "//HDMI/DP/HDBT: 1920x1080@60Hz, 2CH VGA:1920x1080@60Hz"},
                        {id: 3, label: "//HDMI/DP/HDBT: 1680x1050@60Hz, 2CH VGA:1680x1050@60Hz"},
                        {id: 4, label: "//HDMI/DP/HDBT: 1600x900@60Hz, 2CH VGA:1600x900@60Hz"},
                        {id: 5, label: "//HDMI/DP/HDBT: 1440x900@60Hz, 2CH VGA:1440x900@60Hz"},
                        {id: 6, label: "//HDMI/DP/HDBT: 1366x768@60Hz, 2CH VGA:1366x768@60Hz"},
                        {id: 7, label: "//HDMI/DP/HDBT: 1280x800@60Hz, 2CH VGA:1280x800@60Hz"},
                        {id: 8, label: "//HDMI/DP/HDBT: 1024x768@60Hz, 2CH VGA:1024x768@60Hz"},
                        {id: 9, label: "//HDMI/DP/HDBT: Manual By Web_2CH VGA: Manual By Web"},
                        {id: 10, label: "//HDMI/DP/HDBT: 3840x2160@60Hz, 2CH VGA:1920x1200@60Hz"},
                        {id: 11, label: "//HDMI/DP/HDBT: 1920x1200@60Hz, 2CH VGA:1920x1200@60Hz"},
                        {id: 12, label: "//HDMI/DP/HDBT: 1920x1080@60Hz, 2CH VGA:1920x1080@60Hz"},
                        {id: 13, label: "//HDMI/DP/HDBT: 1680x1050@60Hz, 2CH VGA:1680x1050@60Hz"},
                        {id: 14, label: "//HDMI/DP/HDBT: 1600x900@60Hz, 2CH VGA:1600x900@60Hz"},
                        {id: 15, label: "//HDMI/DP/HDBT: 1440x900@60Hz, 2CH VGA:1440x900@60Hz"},
                        {id: 16, label: "//HDMI/DP/HDBT: 1366x768@60Hz, 2CH VGA:1366x768@60Hz"},
                        {id: 17, label: "//HDMI/DP/HDBT: 1280x800@60Hz, 2CH VGA:1280x800@60Hz"},
                        {id: 18, label: "//HDMI/DP/HDBT: 1024x768@60Hz, 2CH VGA:1024x768@60Hz"}
                    ],
                },
            ],
            callback: async (action, context) => {
                instance.sendMessage("SET EDID ALL " + action.options.selectedEDID);
            },
        },
    })
}