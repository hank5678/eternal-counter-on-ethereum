import { contract } from "./_lib/contract.js";

const setCors = (res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
};

export default async function handler(req, res) {
  setCors(res);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const value = await contract.methods.get().call();
    res.status(200).json({ value: value.toString() });
  } catch (error) {
    res.status(500).json({ error: error?.message ?? "Unknown error" });
  }
}
