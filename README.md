# Ethereum 永恆計數器

> 極簡的 Web3 DApp 示範專案，展示如何與以太坊區塊鏈互動。

## 📋 專案簡介

這是一個極簡的 Web3 示範專案。每次點擊按鈕會送出交易，鏈上計數器會永久 +1。

**為什麼叫「永恆計數器」？**  
一旦資料寫入區塊鏈，就永久存在，無法篡改或刪除。計數記錄會與以太坊網路共存，直到永遠。

## 🔄 運作流程

1. **用戶點擊按鈕** → 前端發送 POST 請求到 `/api/increment`
2. **後端簽名交易** → Vercel Function 使用私鑰簽署交易，透過 Alchemy RPC 送到 Sepolia 網路
3. **等待區塊確認** → 交易進入 mempool，等待礦工打包進區塊（約 12-15 秒）
4. **智能合約執行** → EVM 執行 `increment()` 函數，`counter` 變數 +1
5. **前端輪詢更新** → React Query 每 2 秒自動查詢合約的 `get()` 函數，取得最新數字並更新畫面

## 🛠 技術棧

### 前端

- **React** + **TypeScript** - UI 框架
- **Vite** - 快速建構工具
- **Tailwind CSS** - 樣式框架
- **React Query** - 資料同步與狀態管理
- **shadcn/ui** - UI 元件庫（Alert Dialog, Button）
- **Three.js** - 3D 背景動畫
- **react-toastify** - Toast 通知

### 後端

- **Node.js** + **Vercel Functions** - Serverless API
- **Web3.js** - 與區塊鏈互動

### 智能合約

- **Solidity** - 合約語言
- **Hardhat** - 開發/測試/部署框架
- **Sepolia Testnet** - 測試網路
- 合約地址： `0x438EC6699A8556aefB0d80c52e1a8db580EE21C4`
- 查看合約： [Sepolia Etherscan](https://sepolia.etherscan.io/address/0x438EC6699A8556aefB0d80c52e1a8db580EE21C4)
