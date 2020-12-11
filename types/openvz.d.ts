
export class Openvz {



    

    createOpenvzContainer(node, data, callback)


  
     mountOpenvzPrivate(node, vmid, callback)



  
      shutdownOpenvzContainer(node, vmid, callback)



  
    stopOpenvzContainer(node, vmid, callback)



  
    unmountOpenvzContainer(node, vmid, callback)



  
    migrateOpenvzContainer(node, vmid, target, callback)



  
    getContainerIndex(node, vmid, callback)



  
    getContainerStatus(node, vmid, callback)



  
    getContainerBeans(node, vmid, callback)



  
    getContainerConfig(node, vmid, callback)



  
    getContainerInitLog(node, vmid, callback)



  
    getContainerRRD(node, vmid, callback)



  
    getContainerRRDData(node, vmid, callback)



  
    deleteOpenvzContainer(node, vmid, callback)



  
    setOpenvzContainerOptions(node, vmid, data, callback)


  
}