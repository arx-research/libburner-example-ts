import Burner from "@arx-research/libburner";
import {HaloCommandObject, HaloResponseObject} from "@arx-research/libhalo/types";
import {execHaloCmdWeb} from '@arx-research/libhalo/api/web';

const haloExecCb = async (cmd: HaloCommandObject): Promise<HaloResponseObject> => {
    return await execHaloCmdWeb(cmd)
}

export const burner = new Burner({
    haloExecCb,
    chainRpcUrls: {
        http: ["https://mainnet.base.org/"]
    }
})
