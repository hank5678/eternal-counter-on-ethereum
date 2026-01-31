import hre from "hardhat";

async function main() {
  const Contract = await hre.ethers.getContractFactory("EternalCounter");
  const contract = await Contract.deploy();
  await contract.waitForDeployment();

  const address = await contract.getAddress();
  console.log("Deployed to:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
