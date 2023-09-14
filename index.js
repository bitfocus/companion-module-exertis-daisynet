import { InstanceBase, runEntrypoint, InstanceStatus, Regex } from '@companion-module/base'
import { upgradeScripts } from './upgrade.js'
import { setupActions } from './actions.js'
import { setupFeedbacks } from './feedbacks.js'
import { configFields } from './config.js'

import { Telnet } from 'telnet-client';

class WebsocketInstance extends InstanceBase {


	async init(config) {
		this.config = config
		this.client = null;
		this.checkConfig();
		this.setupFeedbackVariables();
		this.initActions()
		this.initFeedbacks()
	}

	checkConfig() {
		if(this.config.targetIp !== "") {
			this.client = new Telnet();
			if(this.config.targetPort == "" || this.config.targetPort == null) {
				this.config.targetPort = 23;
			}
			const telnetParams = {
				host: this.config.targetIp,
				port: this.config.targetPort, 
				shellPrompt: '', 
				timeout: 1500
			};

			(async () => {
				try {
				  await this.client.connect(telnetParams);
				  console.log('Connected');
				  this.updateStatus(InstanceStatus.Ok);
				  this.parseMessage("CECAUTO_ONOFF hdmi on\r\n");
				} catch (err) {
				  console.log("Connection not successful", err);
				  this.updateStatus(InstanceStatus.ConnectionFailure);
				}
			  })();
			this.client.on('data', (data) => {
				const message = data.toString().trim(); // Konvertieren Sie die Daten in einen lesbaren Text
			
				// Trennen Sie den Befehl und die Argumente (angenommen, sie sind durch Leerzeichen getrennt)
				this.parseMessage(message);

			});

			this.client.on('end', () => {
				this.checkConfig();
			});

			
		}
		else {
			this.updateStatus(InstanceStatus.BadConfig, "IP address missing");
		}
	}

	async destroy() {
		this.isInitialized = false
		if(this.client != null) {
			this.client.end();
		}
	}

	async configUpdated(config) {
		this.config = config
		this.checkConfig();
	}

	sendMessage(message) {
		if(this.client != null) {
			const finalMessage = message + "\r\n";
			console.log(finalMessage);
			this.client.send(finalMessage);
		}
	}

	parseMessage(message) {
		const [cmd, ...args] = message.replace(/\r\n$/, '').toLowerCase().split(' ');

		// IDX 2
		if(cmd == "autosw_onoff") {
			if(args[0] != null) {
				this.autoSwitchStatus = false;
				if(args[0] == "on") this.autoSwitchStatus = true;
			}
		}
		// IDX 4
		// Attention: when receiving multiple entries, only the last one will be stored! This needs to be changed
		else if(cmd == "mp") {
			if(args[0] != null && args[1] != null) {
				this.mappingStatusInOut = {in: args[0], out: args[1]}
			}
		}
		// IDX 6
		else if(cmd == "order") {
			if(args[0] != null) {
				this.orderSequenceNumber = args[0];
			}
		}
		// IDX 8
		else if(cmd == "showme") {
			if(args[0] != null) {
				this.showMeActive = false;
				if(args[0] == "true") this.showMeActive = true;
			}
		}
		// IDX 9
		else if(cmd == "ring_marker") {
			if(args[0] != null) {
				this.ringMarker = false;
				if(args[0] == "true") this.ringMarker = true;
			}
		}
		// IDX 11
		else if(cmd == "subgroup") {
			if(args[0] != null) {
				this.subgroup = false;
				if(args[0] == "on") this.subgroup = true;
			}
		}
		// IDX 13
		else if(cmd == "sortungroup") {
			if(args[0] != null) {
				this.sortUngrouping = false;
				if(args[0] == "on") this.sortUngrouping = true;
			}
		}
		// IDX 15
		else if(cmd == "ledflicker") {
			if(args[0] != null) {
				this.locateMeActive = false;
				if(args[0] == "on") this.locateMeActive = true;
			}
		}
		// IDX 18
		else if(cmd == "cecauto_onoff") {
			if(args[1] != null) {
				this.cecAutoPowerStatus = false;
				if(args[1] == "on") this.cecAutoPowerStatus = true;
			}
		}
		// IDX 20
		else if(cmd == "cecauto_delay") {
			if(args[1] != null) {
				this.cecPowerDelayTime = args[1];
			}
		}
		// IDX 30
		else if(cmd == "uartauto_onoff") {
			if(args[1] != null) {
				this.uartAutoPower = false;
				if(args[1] == "on") this.uartAutoPower = true;
			}
		}
		// IDX 32
		else if(cmd == "uartpwr_delay") {
			if(args[1] != null) {
				this.displayPowerDelayTime = args[1];
			}
		}
		// IDX 35
		else if(cmd == "hdcpsupport_onoff") {
			if(args[1] != null) {
				this.inputHDCPSupport = false;
				if(args[1] == "on") this.inputHDCPSupport = true;
			}
		}
		// IDX 37
		else if(cmd == "edid") {
			if(args[1] != null) {
				this.allInputEDIDStatus = args[1];
			}
		}
		// IDX 40
		else if(cmd == "ver") {
			if(args[1] != null) {
				this.firmwareVersion = args[1];
			}
		}
		// IDX 43
		else if(cmd == "ipaddress") {
			if(args[0] != null) {
				if(args[0] == "dhcp") {
					this.ipAddress = {mode: "dhcp", ipaddr: "", ipaddr: "", netmask: "", gateway: ""};
				}
				else if(args[0] == "static") {
					this.ipAddress = {mode: "static", ipaddr: args[1], netmask: args[2], gateway: args[3]};
				}
			}
		}
		else {
			console.info("Received unknown command: " + cmd);
		}

		this.checkFeedbacks();
	}

	setupFeedbackVariables() {
		// IDX 2
		this.autoSwitchStatus = false;
		// IDX
		this.mappingStatusInOut = {};
		// IDX 6
		this.orderSequenceNumber = 0;
		// IDX 8
		this.showMeActive = false;
		// IDX 9
		this.ringMarker = false;
		// IDX 11
		this.subgroup = false;
		// IDX 13
		this.sortUngrouping = false;
		// IDX 15
		this.locateMeActive = false;
		// IDX 18
		this.cecAutoPowerStatus = false;
		// IDX 20
		this.cecPowerDelayTime = 0;
		// IDX 30
		this.uartAutoPower = false;
		// IDX 32
		this.displayPowerDelayTime = 0;
		// IDX
		this.inputHDCPStatus = {};
		// IDX 35
		this.inputHDCPSupport = false;
		// IDX 37
		this.allInputEDIDStatus = 0;
		// IDX 40
		this.firmwareVersion = "";
		// IDX 43
		this.ipAddress = {mode: "", ipaddr: "", ipaddr: "", netmask: "", gateway: ""};	
	}

	getConfigFields() {
		return configFields;
	}

	initFeedbacks() {
		setupFeedbacks(this);
	}

	initActions() {
		setupActions(this);
	}
}

runEntrypoint(WebsocketInstance, upgradeScripts)
