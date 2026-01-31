/**
 * 應用配置常數
 */

// API 端點
export const API_ENDPOINTS = {
  COUNTER: "/api/counter",
  INCREMENT: "/api/increment"
} as const

// 區塊鏈配置
export const BLOCKCHAIN_CONFIG = {
  NETWORK: "Sepolia",
  ETHERSCAN_BASE: "https://sepolia.etherscan.io"
} as const

// UI 配置
export const UI_CONFIG = {
  POLLING_INTERVAL_MS: 2000,
  TOAST_AUTO_CLOSE_MS: 5000,
  TOAST_TRANSACTION_AUTO_CLOSE_MS: 10000,
  SPINNER_SIZE: 12 // w-12 h-12
} as const

// 錯誤訊息
export const ERROR_MESSAGES = {
  FETCH_COUNTER: "無法讀取鏈上數字",
  SEND_TRANSACTION: "交易送出失敗",
  LOAD_FAILED: "載入失敗，請重新整理頁面"
} as const

// 成功訊息
export const SUCCESS_MESSAGES = {
  TRANSACTION_SENT: "交易已送出，等待鏈上確認",
  CLICK_ETHERSCAN: "點擊前往 Etherscan 查看紀錄"
} as const

// Button 文字
export const BUTTON_LABELS = {
  INCREMENT: "點擊 +1 上鏈",
  LOADING: "載入中...",
  PENDING: "正在調用合約..."
} as const
