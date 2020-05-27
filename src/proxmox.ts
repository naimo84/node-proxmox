
import { Openvz } from './openvz';
import { Pools } from './pools';
import { Storage } from './storage';
import { Network } from './network';
import { Access } from './access';
import { Qemu } from './qemu';
import { Helper } from './helper';
export class Proxmox {
  apiURL: string;

  token: { CSRF?: any; PVEAuth?: any; timeStamp?: any; };
  openvz: Openvz;
  username: string;
  password: string;
  pools: Pools;
  network: Network;
  access: Access;
  qemu: Qemu;
  helper: any;
  constructor(username: string, password: string, hostname: string) {  
    const config = {username, password, apiURL:'https://' + hostname + ':8006/api2/json'};
    this.helper = new Helper(config);
    this.openvz = new Openvz(config)
    this.pools = new Pools(config);
    this.pools = new Storage(config);
    this.network=new Network(config);
    this.access=new Access(config);
    this.qemu=new Qemu(config);
  }

  async getClusterStatus(callback: any) {
    const data = {};
    return await this.helper.httpGet('/cluster/status', data);
  }
  httpGet(arg0: string, data: {}) {
    throw new Error("Method not implemented.");
  }
  async getClusterBackupSchedule(callback: any) {
    const data = {};
    return await this.helper.httpGet('/cluster/backup', data);
  }
  async getNodeNetworks(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/network';
    return await this.helper.httpGet(url, data);
  }
  async getNodeInterface(node: string, nodeinterface: string) {
    const data = {};
    const url = '/nodes/' + node + '/network/' + nodeinterface;
    return await this.helper.httpGet(url, data);
  }
  async getNodeContainerIndex(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/openvz/';
    return await this.helper.httpGet(url, data);
  }
  async getNodeVirtualIndex(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/qemu';
    return await this.helper.httpGet(url, data);
  }
  async getNodeServiceState(node: string, service: string) {
    const data = {};
    const url = '/nodes/' + node + '/services/' + service + '/state';
    return await this.helper.httpGet(url, data);
  }
  async getNodeStorage(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/storage';
    return await this.helper.httpGet(url, data);
  }
  async getNodeFinishedTasks(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/tasks';
    return await this.helper.httpGet(url, data);
  }
  async getNodeDNS(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/dns';
    return await this.helper.httpGet(url, data);
  }
  async getNodeSyslog(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/syslog';
    return await this.helper.httpGet(url, data);
  }
  async getNodeRRD(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/rrd';
    return await this.helper.httpGet(url, data);
  }
  async getNodeRRDData(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/rrddata';
    return await this.helper.httpGet(url, data);
  }
  async getNodeBeans(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/ubfailcnt';
    return await this.helper.httpGet(url, data);
  }
  async getNodeTaskByUPID(node: string, upid: string) {
    const data = {};
    const url = '/nodes/' + node + '/tasks/' + upid;
    return await this.helper.httpGet(url, data);
  }
  async getNodeTaskLogByUPID(node: string, upid: string) {
    const data = {};
    const url = '/nodes/' + node + '/tasks/' + upid + '/log';
    return await this.helper.httpGet(url, data);
  }
  async getNodeTaskStatusByUPID(node: string, upid: string) {
    const data = {};
    const url = '/nodes/' + node + '/tasks/' + upid + '/status';
    return await this.helper.httpGet(url, data);
  }
  async getNodeScanMethods(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/scan';
    return await this.helper.httpGet(url, data);
  }
  async getRemoteiSCSI(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/scan/iscsi';
    return await this.helper.httpGet(url, data);
  }
  async getNodeLVMGroups(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/scan/lvm';
    return await this.helper.httpGet(url, data);
  }
  async getRemoteNFS(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/scan/nfs';
    return await this.helper.httpGet(url, data);
  }
  async getNodeUSB(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/scan/usb';
  }
  async getStorageVolumeData(node: string, storage: string, volume: string) {
    const data = {};
    const url = '/nodes/' + node + '/storage/' + storage + '/content/' + volume;
    return await this.helper.httpGet(url, data);
  }
  async getStorageConfig(storage: string) {
    const data = {};
    const url = '/storage/' + storage;
    return await this.helper.httpGet(url, data);
  }
  async getNodeStorageContent(node: string, storage: string) {
    const data = {};
    const url = '/nodes/' + node + '/storage/' + storage + '/content';
    return await this.helper.httpGet(url, data);
  }
  async getNodeStorageRRD(node: string, storage: string) {
    const data = {};
    const url = '/nodes/' + node + '/storage/' + storage + '/rrd';
    return await this.helper.httpGet(url, data);
  }
  async getNodeStorageRRDData(node: string, storage: string) {
    const data = {};
    const url = '/nodes/' + node + '/storage/' + storage + '/rrddata';
    return await this.helper.httpGet(url, data);
  }
  //openvz functions
  async deleteNodeNetworkConfig(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/network';
    return await this.helper.httpDel(url, data);
  }
  httpDel(url: string, data: {}) {
    throw new Error("Method not implemented.");
  }
  async deleteNodeInterface(node: string, nodeinterface: string) {
    const data = {};
    const url = '/nodes/' + node + '/network/' + nodeinterface;
    return await this.helper.httpDel(url, data);
  }
  async deletePool(poolid: string) {
    const data = {};
    const url = '/pools/' + poolid;
    return await this.helper.httpDel(url, data);
  }
  async setNodeDNSDomain(node: string, domain: any) {
    const data = { 'search': domain };
    const url = '/nodes/' + node + '/dns';
    return await this.helper.httpPut(url, data);
  }
  httpPut(url: string, data: { search: any; }) {
    throw new Error("Method not implemented.");
  }
  async setNodeSubscriptionKey(node: string, key: any) {
    const data = { 'key': key };
    const url = '/nodes/' + node + '/subscription';
    return await this.helper.httpPut(url, data);
  }
  async setNodeTimeZone(node: string, timezone: any) {
    const data = { 'timezone': timezone };
    const url = '/nodes/' + node + '/time';
    return await this.helper.httpPut(url, data);
  }
  async setPoolData(poolid: string, data: any) {
    const url = '/pools/' + poolid;
    return await this.helper.httpPut(url, data);
  }
  async updateStorageConfiguration(storageid: string, data: any) {
    const url = '/storage/' + storageid;
    return await this.helper.httpPut(url, data);
  }  
  async getNodes(callback: any) {
    const data = {};
    const url = '/nodes';
    return await this.helper.httpGet(url, data);
  }
  async getStorage(callback: any) {
    const data = {};
    const url = '/storage/';
    return await this.helper.httpGet(url, data);
  }
  async getQemu(node: string) {
    const data = {};
    const url = '/nodes/' + node + '/qemu';
    return await this.helper.httpGet(url, data);
  }
  async createQemu(node: string, data: any) {
    const url = '/nodes/' + node + '/qemu';
    return await this.helper.httpPost(url, data);
  }
  httpPost(url: string, data: any) {
    throw new Error("Method not implemented.");
  }


}

