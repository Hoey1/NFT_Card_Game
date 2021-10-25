const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Juan Soto", "Bryce Harper", "Cool Papa Bell"], // Names
    [
      "https://i.imgur.com/JZTVdZw.jpeg", // Images
      "https://i.imgur.com/oNbU8Lv.jpeg",
      "https://i.imgur.com/kNfA7ug.jpeg",
    ],
    [100, 200, 300], // HP values
    [100, 50, 25] // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
