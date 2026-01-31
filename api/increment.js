import { account, contract } from "./_lib/contract.js";

const setCors = (res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
};

export default async function handler(req, res) {
  setCors(res);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const gas = await contract.methods
      .increment()
      .estimateGas({ from: account.address });
    const tx = await contract.methods.increment().send({
      from: account.address,
      gas,
    });

    res.status(200).json({ txHash: tx.transactionHash });
  } catch (error) {
    res.status(500).json({ error: error?.message ?? "Unknown error" });
  }
}
