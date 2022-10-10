import { DeployFunction } from "hardhat-deploy/types"
import { verify } from "../helper-functions"
import { developmentChains, VERIFICATION_BLOCK_CONFIRMATIONS } from "../helper-hardhat-config"

const func: DeployFunction = async ({ deployments, getNamedAccounts, network }) => {
    const { deployer, log } = await getNamedAccounts()
    const { deploy } = deployments

    const args = ["10"]

    const waitConfirmation = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS

    const whiteList = await deploy("WhiteList", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: waitConfirmation,
    })

    if (!developmentChains.includes(network.name)) {
        verify(whiteList.address, args)
    }
}

func.tags = ["all", "whitelist"]
export default func
