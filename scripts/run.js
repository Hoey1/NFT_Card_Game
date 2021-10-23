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
