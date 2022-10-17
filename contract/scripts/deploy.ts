import { ethers } from "hardhat";

const initialBalance = "0.0";
const main = async () => {
  const ContractFactory = await ethers.getContractFactory("Baumkuchen");
  const Contract = await ContractFactory.deploy({
    value: ethers.utils.parseEther(initialBalance),
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
