var querystring = require("querystring");
import axios from 'axios';
import { openvz } from './subclasses';
export class Proxmox {
  apiURL: string;
  authString: string;
  token: { CSRF?: any; PVEAuth?: any; timeStamp?: any; };
  openvz: openvz;
  constructor(name: string, pwd: string, hostname: string) {
    this.apiURL = 'https://' + hostname + ':8006/api2/json';
    this.authString = 'username=' + name + '&password=' + pwd;

    this.token = {};
    this.token.CSRF = '';
    this.token.PVEAuth = '';
    this.token.timeStamp = 0;
    this.openvz = new openvz(this.get,this.post,this.del,this.put)
  }

  async authorize(path: any) {
    const response = JSON.parse(await axios.get(path));
    this.token.CSRF = response.data.CSRFPreventionToken;
    this.token.PVEAuth = response.data.ticket;
    this.token.timeStamp = new Date().getTime();
  }

  async makeRequest(method: string, path: any, data: any) {
    if ((this.token.timeStamp + 7200) < new Date().getTime()) {
      await this.authorize(path)
    }
    //this.curl("command");
  }

  async get(path: string, data: {}) {   
    await this.makeRequest('GET', path, data);
  }

  async post(path: string, data: any) {  
    data = querystring.stringify(data);
    this.makeRequest('POST', path, data);
  }

  async del(path: string, data: {}) {    
    this.makeRequest('DEL', path, data);
  }

  async put(path: string, data: { search?: any; key?: any; timezone?: any; }) {  
    data = querystring.stringify(data);
    this.makeRequest('PUT', path, data);
  }


  getClusterStatus(callback: any) {
    const data = {};
    this.get('/cluster/status', data);
  }
  getClusterBackupSchedule(callback: any) {
    const data = {};
    this.get('/cluster/backup', data);
  }
  getNodeNetworks(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/network';
    this.get(url, data);
  }
  getNodeInterface(node: string, nodeinterface: string) {
    const data = {};
    const url = '/nodes/' + node + '/network/' + nodeinterface;
    this.get(url, data);
  }
  getNodeContainerIndex(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/openvz/';
    this.get(url, data);
  }
  getNodeVirtualIndex(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/qemu';
    this.get(url, data);
  }
  getNodeServiceState(node: string, service: string) {
    const data = {};
    const url = '/nodes/' + node + '/services/' + service + '/state';
    this.get(url, data);
  }
  getNodeStorage(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/storage';
    this.get(url, data);
  }
  getNodeFinishedTasks(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/tasks';
    this.get(url, data);
  }
  getNodeDNS(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/dns';
    this.get(url, data);
  }
  getNodeSyslog(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/syslog';
    this.get(url, data);
  }
  getNodeRRD(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/rrd';
    this.get(url, data);
  }
  getNodeRRDData(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/rrddata';
    this.get(url, data);
  }
  getNodeBeans(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/ubfailcnt';
    this.get(url, data);
  }
  getNodeTaskByUPID(node: string, upid: string) {
    const data = {};
    const url = '/nodes/' + node + '/tasks/' + upid;
    this.get(url, data);
  }
  getNodeTaskLogByUPID(node: string, upid: string) {
    const data = {};
    const url = '/nodes/' + node + '/tasks/' + upid + '/log';
    this.get(url, data);
  }
  getNodeTaskStatusByUPID(node: string, upid: string) {
    const data = {};
    const url = '/nodes/' + node + '/tasks/' + upid + '/status';
    this.get(url, data);
  }
  getNodeScanMethods(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/scan';
    this.get(url, data);
  }
  getRemoteiSCSI(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/scan/iscsi';
    this.get(url, data);
  }
  getNodeLVMGroups(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/scan/lvm';
    this.get(url, data);
  }
  getRemoteNFS(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/scan/nfs';
    this.get(url, data);
  }
  getNodeUSB(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/scan/usb';
  }
  getStorageVolumeData(node: string, storage: string, volume: string) {
    const data = {};
    const url = '/nodes/' + node + '/storage/' + storage + '/content/' + volume;
    this.get(url, data);
  }
  getStorageConfig(storage: string) {
    const data = {};
    const url = '/storage/' + storage;
    this.get(url, data);
  }
  getNodeStorageContent(node: string, storage: string) {
    const data = {};
    const url = '/nodes/' + node + '/storage/' + storage + '/content';
    this.get(url, data);
  }
  getNodeStorageRRD(node: string, storage: string) {
    const data = {};
    const url = '/nodes/' + node + '/storage/' + storage + '/rrd';
    this.get(url, data);
  }
  getNodeStorageRRDData(node: string, storage: string) {
    const data = {};
    const url = '/nodes/' + node + '/storage/' + storage + '/rrddata';
    this.get(url, data);
  }
  //openvz functions
  deleteNodeNetworkConfig(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/network';
    this.del(url, data);
  }
  deleteNodeInterface(node: string, nodeinterface: string) {
    const data = {};
    const url = '/nodes/' + node + '/network/' + nodeinterface;
    this.del(url, data);
  }
  deletePool(poolid: string) {
    const data = {};
    const url = '/pools/' + poolid;
    this.del(url, data);
  }
  setNodeDNSDomain(node: string, domain: any) {
    const data = { 'search': domain };
    const url = '/nodes/' + node + '/dns';
    this.put(url, data);
  }
  setNodeSubscriptionKey(node: string, key: any) {
    const data = { 'key': key };
    const url = '/nodes/' + node + '/subscription';
    this.put(url, data);
  }
  setNodeTimeZone(node: string, timezone: any) {
    const data = { 'timezone': timezone };
    const url = '/nodes/' + node + '/time';
    this.put(url, data);
  }
  setPoolData(poolid: string, data: any) {
    const url = '/pools/' + poolid;
    this.put(url, data);
  }
  updateStorageConfiguration(storageid: string, data: any) {
    const url = '/storage/' + storageid;
    this.put(url, data);
  }
  //self added functions
  getNodes(callback: any) {
    const data = {};
    const url = '/nodes/';
    this.get(url, data);
  }
  getStorage(callback: any) {
    const data = {};
    const url = '/storage/';
    this.get(url, data);
  }
  getQemu(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/qemu';
    this.get(url, data);
  }
  createQemu(node: string, data: any) {
    const url = '/nodes/' + node + '/qemu';
    this.post(url, data);
  }


}

