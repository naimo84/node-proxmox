"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proxmox = void 0;
var querystring = require("querystring");
var axios_1 = require("axios");
var subclasses_1 = require("./subclasses");
var Proxmox = /** @class */ (function () {
    function Proxmox(name, pwd, hostname) {
        this.apiURL = 'https://' + hostname + ':8006/api2/json';
        this.authString = 'username=' + name + '&password=' + pwd;
        this.token = {};
        this.token.CSRF = '';
        this.token.PVEAuth = '';
        this.token.timeStamp = 0;
        this.openvz = new subclasses_1.openvz(this.get, this.post, this.del, this.put);
    }
    Proxmox.prototype.authorize = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, axios_1.default.get(path)];
                    case 1:
                        response = _b.apply(_a, [_c.sent()]);
                        this.token.CSRF = response.data.CSRFPreventionToken;
                        this.token.PVEAuth = response.data.ticket;
                        this.token.timeStamp = new Date().getTime();
                        return [2 /*return*/];
                }
            });
        });
    };
    Proxmox.prototype.makeRequest = function (method, path, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!((this.token.timeStamp + 7200) < new Date().getTime())) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.authorize(path)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Proxmox.prototype.get = function (path, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.makeRequest('GET', path, data)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Proxmox.prototype.post = function (path, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                data = querystring.stringify(data);
                this.makeRequest('POST', path, data);
                return [2 /*return*/];
            });
        });
    };
    Proxmox.prototype.del = function (path, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.makeRequest('DEL', path, data);
                return [2 /*return*/];
            });
        });
    };
    Proxmox.prototype.put = function (path, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                data = querystring.stringify(data);
                this.makeRequest('PUT', path, data);
                return [2 /*return*/];
            });
        });
    };
    Proxmox.prototype.getClusterStatus = function (callback) {
        var data = {};
        this.get('/cluster/status', data);
    };
    Proxmox.prototype.getClusterBackupSchedule = function (callback) {
        var data = {};
        this.get('/cluster/backup', data);
    };
    Proxmox.prototype.getNodeNetworks = function (node) {
        var data = {};
        var url = '/nodes/' + node + '/network';
        this.get(url, data);
    };
    Proxmox.prototype.getNodeInterface = function (node, nodeinterface) {
        var data = {};
        var url = '/nodes/' + node + '/network/' + nodeinterface;
        this.get(url, data);
    };
    Proxmox.prototype.getNodeContainerIndex = function (node) {
        var data = {};
        var url = '/nodes/' + node + '/openvz/';
        this.get(url, data);
    };
    Proxmox.prototype.getNodeVirtualIndex = function (node) {
        var data = {};
        var url = '/nodes/' + node + '/qemu';
        this.get(url, data);
    };
    Proxmox.prototype.getNodeServiceState = function (node, service) {
        var data = {};
        var url = '/nodes/' + node + '/services/' + service + '/state';
        this.get(url, data);
    };
    Proxmox.prototype.getNodeStorage = function (node) {
        var data = {};
        var url = '/nodes/' + node + '/storage';
        this.get(url, data);
    };
    Proxmox.prototype.getNodeFinishedTasks = function (node) {
        var data = {};
        var url = '/nodes/' + node + '/tasks';
        this.get(url, data);
    };
    Proxmox.prototype.getNodeDNS = function (node) {
        var data = {};
        var url = '/nodes/' + node + '/dns';
        this.get(url, data);
    };
    Proxmox.prototype.getNodeSyslog = function (node) {
        var data = {};
        var url = '/nodes/' + node + '/syslog';
        this.get(url, data);
    };
    Proxmox.prototype.getNodeRRD = function (node) {
        var data = {};
        var url = '/nodes/' + node + '/rrd';
        this.get(url, data);
    };
    Proxmox.prototype.getNodeRRDData = function (node) {
        var data = {};
        var url = '/nodes/' + node + '/rrddata';
        this.get(url, data);
    };
    Proxmox.prototype.getNodeBeans = function (node) {
        var data = {};
        var url = '/nodes/' + node + '/ubfailcnt';
        this.get(url, data);
    };
    Proxmox.prototype.getNodeTaskByUPID = function (node, upid) {
        var data = {};
        var url = '/nodes/' + node + '/tasks/' + upid;
        this.get(url, data);
    };
    Proxmox.prototype.getNodeTaskLogByUPID = function (node, upid) {
        var data = {};
        var url = '/nodes/' + node + '/tasks/' + upid + '/log';
        this.get(url, data);
    };
    Proxmox.prototype.getNodeTaskStatusByUPID = function (node, upid) {
        var data = {};
        var url = '/nodes/' + node + '/tasks/' + upid + '/status';
        this.get(url, data);
    };
    Proxmox.prototype.getNodeScanMethods = function (node) {
        var data = {};
        var url = '/nodes/' + node + '/scan';
        this.get(url, data);
    };
    Proxmox.prototype.getRemoteiSCSI = function (node) {
        var data = {};
        var url = '/nodes/' + node + '/scan/iscsi';
        this.get(url, data);
    };
    Proxmox.prototype.getNodeLVMGroups = function (node) {
        var data = {};
        var url = '/nodes/' + node + '/scan/lvm';
        this.get(url, data);
    };
    Proxmox.prototype.getRemoteNFS = function (node) {
        var data = {};
        var url = '/nodes/' + node + '/scan/nfs';
        this.get(url, data);
    };
    Proxmox.prototype.getNodeUSB = function (node) {
        var data = {};
        var url = '/nodes/' + node + '/scan/usb';
    };
    Proxmox.prototype.getStorageVolumeData = function (node, storage, volume) {
        var data = {};
        var url = '/nodes/' + node + '/storage/' + storage + '/content/' + volume;
        this.get(url, data);
    };
    Proxmox.prototype.getStorageConfig = function (storage) {
        var data = {};
        var url = '/storage/' + storage;
        this.get(url, data);
    };
    Proxmox.prototype.getNodeStorageContent = function (node, storage) {
        var data = {};
        var url = '/nodes/' + node + '/storage/' + storage + '/content';
        this.get(url, data);
    };
    Proxmox.prototype.getNodeStorageRRD = function (node, storage) {
        var data = {};
        var url = '/nodes/' + node + '/storage/' + storage + '/rrd';
        this.get(url, data);
    };
    Proxmox.prototype.getNodeStorageRRDData = function (node, storage) {
        var data = {};
        var url = '/nodes/' + node + '/storage/' + storage + '/rrddata';
        this.get(url, data);
    };
    //openvz functions
    Proxmox.prototype.deleteNodeNetworkConfig = function (node) {
        var data = {};
        var url = '/nodes/' + node + '/network';
        this.del(url, data);
    };
    Proxmox.prototype.deleteNodeInterface = function (node, nodeinterface) {
        var data = {};
        var url = '/nodes/' + node + '/network/' + nodeinterface;
        this.del(url, data);
    };
    Proxmox.prototype.deletePool = function (poolid) {
        var data = {};
        var url = '/pools/' + poolid;
        this.del(url, data);
    };
    Proxmox.prototype.setNodeDNSDomain = function (node, domain) {
        var data = { 'search': domain };
        var url = '/nodes/' + node + '/dns';
        this.put(url, data);
    };
    Proxmox.prototype.setNodeSubscriptionKey = function (node, key) {
        var data = { 'key': key };
        var url = '/nodes/' + node + '/subscription';
        this.put(url, data);
    };
    Proxmox.prototype.setNodeTimeZone = function (node, timezone) {
        var data = { 'timezone': timezone };
        var url = '/nodes/' + node + '/time';
        this.put(url, data);
    };
    Proxmox.prototype.setPoolData = function (poolid, data) {
        var url = '/pools/' + poolid;
        this.put(url, data);
    };
    Proxmox.prototype.updateStorageConfiguration = function (storageid, data) {
        var url = '/storage/' + storageid;
        this.put(url, data);
    };
    //self added functions
    Proxmox.prototype.getNodes = function (callback) {
        var data = {};
        var url = '/nodes/';
        this.get(url, data);
    };
    Proxmox.prototype.getStorage = function (callback) {
        var data = {};
        var url = '/storage/';
        this.get(url, data);
    };
    Proxmox.prototype.getQemu = function (node) {
        var data = {};
        var url = '/nodes/' + node + '/qemu';
        this.get(url, data);
    };
    Proxmox.prototype.createQemu = function (node, data) {
        var url = '/nodes/' + node + '/qemu';
        this.post(url, data);
    };
    return Proxmox;
}());
exports.Proxmox = Proxmox;

//# sourceMappingURL=proxmox.js.map
