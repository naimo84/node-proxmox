
import { Firewall } from "./firewall";
import { Snapshot } from "./snapshot";
export class Qemu {
    firewall: Firewall;
    snapshot: Snapshot;
    getStatus(node, qemu)
    get(node, qemu)
    del(node, qemu)
    getStatusCurrent(node, qemu)
    start(node, qemu)
    stop(node, qemu)
    reset(node, qemu)
    shutdown(node, qemu)
    suspend(node, qemu)
    resume(node, qemu)
    rrd(node, qemu, data)
    rrdData(node, qemu, data)
    getConfig(node, qemu)
    updateConfig(node, qemu, data)
    setConfig(node, qemu, data)
    pending(node, qemu)
    unlink(node, qemu, data)
    vncproxy(node, qemu)
    vncwebsocket(node, qemu, data)
    spiceproxy(node, qemu, data)
    sendkey(node, qemu, data)
    feature(node, qemu, data)
    clone(node, qemu, data)
    moveDisk(node, qemu, data)
    migrate(node, qemu, data)
    monitor(node, qemu, data)
    resize(node, qemu, data)
    template(node, qemu)
}
