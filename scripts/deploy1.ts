import { ethers } from "hardhat";

async function main() {


  const Fola = await ethers.getContractFactory("Fola");
  const fola = await Fola.deploy();

  await fola.deployed();

  console.log(`Fola is deployed to ${fola.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// CONTRACTADDRESS on Rinkeby = 0xEAC9Edb4d5E510C2f9f8152C2b6E92cdAC970D16
