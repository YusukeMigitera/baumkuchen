import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Baumkuchen", function () {
  async function deployBaumkuchenFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    const ContractFactory = await ethers.getContractFactory("Baumkuchen");
    const Contract = await ContractFactory.deploy();

    return { Contract, owner, otherAccount };
  }

  describe("createQuestion", function () {
    it("Should set the right users & questions", async function () {
      const { Contract } = await loadFixture(deployBaumkuchenFixture);

      await Contract.createQuestion();
      const questions = await Contract.getQuestions();
      expect(questions[0]).to.equal(ethers.BigNumber.from("0"));
    });
  });
});
