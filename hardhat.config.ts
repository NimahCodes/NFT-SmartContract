import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
import { HttpNetworkAccountsConfig } from "hardhat/types";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/Rsuq9yPDGzTzvvPKIv2PJ_IppaJ0Cot8",
      accounts: [process.env.PRIVATE_KEY] as HttpNetworkAccountsConfig | undefined,
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/Rsuq9yPDGzTzvvPKIv2PJ_IppaJ0Cot8",
      accounts: [process.env.PRIVATE_KEY] as HttpNetworkAccountsConfig | undefined,
    }
  }
};

export default config;
