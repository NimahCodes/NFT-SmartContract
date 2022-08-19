require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";

async function main() {
  const CONTRACTADDRESS = "0xEAC9Edb4d5E510C2f9f8152C2b6E92cdAC970D16";
  const Fola = await ethers.getContractAt("IFola", CONTRACTADDRESS);
// @ts-ignore
await Fola.safeMint("0x3669162D8794542b2D362FDb3a8CF3a61Cc69c14", "https://gateway.pinata.cloud/ipfs/Qmd7g84pvvf3f2yzEnUMAETCGGv1L7gvfzf3dmN22VMQF1");


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Transaction Hash on Rinkeby: 0x1b36dead0c1c27e749887c1a67840582ca7194741cc54c904fa5fd2cacb1d68d