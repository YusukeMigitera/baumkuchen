import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Baumkuchen", function () {
  async function deployBaumkuchenFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    const ContractFactory = await ethers.getContractFactory("Baumkuchen");
    const Contract = await ContractFactory.deploy({
      value: ethers.utils.parseEther("0.1"),
    });

    return { Contract, owner, otherAccount };
  }

  describe("createQuestion", function () {
    it("Should set the right users & questions", async function () {
      const { Contract } = await loadFixture(deployBaumkuchenFixture);

      await Contract.createQuestion();
      const questions = await Contract.getQuestions();
      expect(questions[0].userId).to.equal(ethers.BigNumber.from("0"));
    });
  });
  describe("sending", function () {
    it("Should be right amount", async function () {
      const { Contract, owner, otherAccount } = await loadFixture(
        deployBaumkuchenFixture
      );

      await Contract.connect(owner).send(
        otherAccount.address,
        ethers.utils.parseEther("0.01")
      );
      const balance = await Contract.getBalance();
      expect(balance).to.equal(ethers.utils.parseEther("0.09"));

      const otherAccountBalance = await ethers.provider.getBalance(
        otherAccount.address
      );
      expect(otherAccountBalance).to.equal(ethers.utils.parseEther("10000.01"));
    });
  });
  describe("deposit", function () {
    it("Should be right amount", async function () {
      const { Contract } = await loadFixture(
        deployBaumkuchenFixture
      );

      await expect(
        Contract.deposit({ value: ethers.utils.parseEther("0.05") })
      ).to.changeEtherBalances([Contract], [ethers.utils.parseEther("0.05")]);
    });
  });
});
