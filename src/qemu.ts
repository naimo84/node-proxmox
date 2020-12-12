import { Snapshot } from "./snapshot";
import { Firewall } from "./firewall";
import { Helper } from "./helper";


export class Qemu {

    helper: any;
    snapshot: Snapshot;
    firewall: Firewall;
    
    constructor(config) {
        this.helper = new Helper(config);    
        this.snapshot=new Snapshot(config);
        this.firewall=new Firewall(config);
    }
    

    async getStatus(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/status/';
        return await this.helper.httpGet(url, data);
    }
    async get(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu;
        return await this.helper.httpGet(url, data);
    }
    async del(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu;
        return await this.helper.httpDel(url, data);
    }
    async getStatusCurrent(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/status/current'
            return await this.helper.httpGet(url, data);
    }
    async start(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/status/start';
        return await this.helper.httpPost(url, data);
    }
    async stop(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/status/stop';
        return await this.helper.httpPost(url, data);
    }
    async reset(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/status/reset';
        return await this.helper.httpPost(url, data);
    }
    async shutdown(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/status/shutdown';
        return await this.helper.httpPost(url, data);
    }
    async suspend(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/status/suspend';
        return await this.helper.httpPost(url, data);
    }
    async resume(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/status/resume';
        return await this.helper.httpPost(url, data);
    }
   
    async rrd(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/rrd';
        return await this.helper.httpGet(url, data);
    }
    async rrdData(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/rrddata';
        return await this.helper.httpGet(url, data);
    }
    async getConfig(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/config';
        return await this.helper.httpGet(url, data);
    }
    async updateConfig(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/config';
        return await this.helper.httpPut(url, data);
    }
    async setConfig(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/config';
        return await this.helper.httpPost(url, data);
    }
    async pending(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/pending';
        return await this.helper.httpGet(url, data);
    }
    async unlink(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/unlink';
        return await this.helper.httpPut(url, data);
    }
    async vncproxy(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/vncproxy';
        return await this.helper.httpPost(url, data);
    }
    async vncwebsocket(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/vncwebsocket';
        return await this.helper.httpGet(url, data);
    }
    async spiceproxy(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/spiceproxy';
        return await this.helper.httpPost(url, data);
    }
    async sendkey(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/sendkey';
        return await this.helper.httpPut(url, data);
    }
    async feature(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/feature';
        return await this.helper.httpGet(url, data);
    }
    async clone(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/clone';
        return await this.helper.httpPost(url, data);
    }
    async moveDisk(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/move_disk';
        return await this.helper.httpPost(url, data);
    }
    async migrate(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/migrate';
        return await this.helper.httpPost(url, data);
    }
    async monitor(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/monitor';
        return await this.helper.httpPost(url, data);
    }
    async resize(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/resize';
        return await this.helper.httpPut(url, data);
    }
    async template(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/template';
        return await this.helper.httpPost(url, data);
    }
    
}