import { ethers } from "hardhat";
const main = async () => {
  const ContractFactory = await ethers.getContractFactory("Baumkuchen");
  const Contract = await ContractFactory.deploy({
    value: ethers.utils.parseEther("0.1"),
  });

  console.log("Contract deployed to: ", Contract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();