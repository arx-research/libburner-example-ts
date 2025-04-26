import Burner from "@arx-research/libburner";
import {HaloCommandObject, HaloResponseObject} from "@arx-research/libhalo/types";
import {HaloBridge} from "@arx-research/libhalo/api/web";
import websocket from "websocket";

// Initialize HaloBridge connection
const bridge = new HaloBridge({
    createWebSocket: (url) => new websocket.w3cwebsocket(url) as unknown as WebSocket
})
await bridge.connect()

// Create Burner class
const haloExecCb = async (cmd: HaloCommandObject): Promise<HaloResponseObject> => {
    return await bridge.execHaloCmd(cmd)
}

const burner = new Burner({
    haloExecCb,
    chainRpcUrls: {
        http: ["https://mainnet.base.org/"]
    }
})

// Get information about Burner tag
const data = await burner.getData()
console.log('data', data)

// Get amount of USD II held by this Burner
console.log(await burner.getUSD2Balance())

// Send 0.000001 USD2 off this Burner to the `destinationAddress` (self-transfer in this example)
burner.setPassword("111111")
console.log(await burner.sendUSD2({
    destinationAddress: data.address,
    amount: BigInt(1)
}))

// Close HaLo Bridge
await bridge.close()
