// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract Baumkuchen {
    struct Score {
        string community;
        uint256 score;
    }

    struct User {
        address eoaAddress; // ウォレットアドレス
        Score[] scores; // 信頼スコア
    }
    // indexをユーザIDとする
    User[] users;
    mapping(address => uint256) private userMapping;

    struct Question {
        uint256 userId;
        uint256 good;
    }
    // indexを質問ID、要素をユーザIDとする
    Question[] questions;

    struct Answer {
        uint256 questionId;
        uint256 userId;
        uint256 good;
    }
    // indexを回答ID、要素をユーザIDとする
    Answer[] answers;

    constructor() payable {
        console.log("Here is my first smart contract!");
    }

    // 質問を投稿する
    function createQuestion() public {
        // msg.senderがusersに含まれていれば
        for (uint256 i; i < users.length; i++) {
            if (users[i].eoaAddress == msg.sender) {
                questions.push(Question(i, 0));
                return;
            }
        }

        // 含まれていなければ
        questions.push(Question(users.length, 0));
        User storage user = users.push();
        user.eoaAddress = msg.sender;
    }

    // 質問にいいねする
    function goodQuestion(uint256 questionId) public {}

    // 回答を投稿する
    function createAnswer(uint256 questionId) public {}

    // 回答にいいねする
    function goodAnswer(uint256 answerId) public {}

    // 全ユーザのスコアを計算する（nodeから定期実行）
    function calculateScore() public {}

    function getQuestions() public view returns (Question[] memory) {
        return questions;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function send(address to, uint256 amount) public {
        require(address(this).balance >= amount, "low contract balance");

        (bool success, ) = (to).call{value: amount}("");
        require(success, "Failed to withdraw money from contract.");
    }
}
