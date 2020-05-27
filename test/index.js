const proxmox = require('../dist/proxmox.js').Proxmox;

let pr = new proxmox("root","pass","10.0.0.2");

console.log(pr.openvz)