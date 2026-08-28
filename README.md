# 半導體 P0 模擬交易 dashboard

靜態 GitHub Pages（`docs/`）。圖表走 Plotly CDN，成交台帳是 richman 同款 `trades.jsonl`。

- 規則：`semiconductor.p0.no-upgrade`（**不升版**）
- 三本書：分數加權 / 十檔等權週再平衡 / Top3
- 預設顯示驗證窗 2025-01-01 起，可切全樣本
- 官方淨值是因子曲線（起始 NAV = 1）。股數用 100 萬名義本金換算，方便對帳。
- 驗證窗頂端會列出「承前持倉」：訓練期買進、抱過 2025-01-01 的庫存。本窗賣出不是沒買就賣。

## 怎麼稽核一筆成交（對 TWSE 開盤）

1. 打開 `docs/index.html`（本機直接開檔即可；GitHub Pages 同樣）。
2. 選書（分數加權／十檔等權／Top3），在「進出明細」讀該筆的完整原因。
3. `date` = **執行日**（週五訊號的下週一，若週一休市則次一交易日）。
4. `price` 必須等於該日該股 **開盤價**。對照：
   - TWSE OpenAPI `STOCK_DAY` 該月日報的「開盤價」
   - 或 FinMind `TaiwanStockPrice.open`
5. 目標股數 = `round(1_000_000 × NAV成交前 × w_new / 開盤價)`；成交股數 = 目標 − 持倉。沒有庫存不會賣出，也不會超賣。
6. `reason` 寫新建倉／加碼／減碼／出清、訊號日、分數、排名、權重 舊→新、執行日。完全出場的賣出另有 `pnl` / `entry_price`。
7. 下載 `data/{book}_trades.jsonl` 看完整 `rationale`（規則版號、滑價、NAV、kind）。

訊號日（週五收盤）**不會**成交；不要拿訊號日收盤價去對 `price`。

## 檔案

| 路徑 | 內容 |
|---|---|
| `index.html` | 儀表板 |
| `data/meta.js` `prices.js` `{book}.js` | 本機 `file://` 可載入 |
| `data/{book}_trades.jsonl` | 完整成交（richman schema） |
| `data/{book}_equity.csv` | `date,equity,cash,n_positions`（equity = round(NAV×1,000,000)） |
| `../datalake/_模擬交易/bt_semiconductor_p0_*` | 與 richman 相同的帳戶資料夾 |

equity.csv 的日期必須對得上 `backtests-out/equity_curves.csv` 該書的日期。
