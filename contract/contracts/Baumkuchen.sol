// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract Baumkuchen {
    struct User {
        address eoaAddress; // ウォレットアドレス
        uint256 score; // 信頼スコア
    }
    // indexをユーザIDとする
    User[] users;
    mapping(address => uint256) private userMapping;

    // indexを質問ID、要素をユーザIDとする
    uint256[] questions;
    // indexを回答ID、要素をユーザIDとする
    uint256[] answers;

    constructor() {
        console.log("Here is my first smart contract!");
    }

    function createQuestion() public {
        // msg.senderがusersに含まれていれば
        for (uint256 i; i < users.length; i++) {
            if (users[i].eoaAddress == msg.sender) {
                questions.push(i);
                return;
            }
        }

        // 含まれていなければ
        questions.push(users.length);
        users.push(User(msg.sender, 0));
    }

    function getQuestions() view public returns (uint256[] memory) {
        return questions;
    }
}
