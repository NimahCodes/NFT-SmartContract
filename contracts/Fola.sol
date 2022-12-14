// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Fola is ERC721URIStorage{
    using Counters for Counters.Counter;

    Counters.Counter private _myCounter;
    uint256 MAX_SUPPLY = 5;

    constructor() ERC721("Fola", "FLK") {}

    function safeMint(address to, string memory uri) public{

        uint256 tokenId = _myCounter.current();
        require(tokenId <= MAX_SUPPLY, "Sorry, all NFTs have been minted!");
        _myCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }


}