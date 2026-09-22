window.SIM_WEEKLY = {
  "source": "AxelShen/tou-yan/trades/sim-practice/weekly",
  "note": "newest→oldest; add week files here and prepend to weeks[]",
  "weeks": [
    {
      "id": "2026-W39",
      "status": "gated",
      "gated_at": "2026-09-21",
      "data_asof": "2026-09-18",
      "source_path": "trades/sim-practice/weekly/2026-W39.md",
      "fwd_oos": [
        {
          "line": "hf-5d",
          "regime_id": "fwd-OOS-5d",
          "window": "09-10→09-18",
          "start": "1,000,000",
          "end_nav": "1,000,000",
          "fills": "0",
          "vs_T": "≈−0.5ppt（相對期間大盤）",
          "vs_EW": "未報",
          "note": "非 mid→現金（規則結果，非缺價）"
        },
        {
          "line": "mom-5d",
          "regime_id": "mom-fwd-OOS-5d",
          "window": "09-17→09-18",
          "start": "1,000,000",
          "end_nav": "1,000,000",
          "fills": "0",
          "vs_T": "≈−1.9ppt",
          "vs_EW": "≈−5.5ppt",
          "note": "同樣 非 mid→現金；短窗 vs 年化勿過度解讀"
        },
        {
          "line": "rot-5d",
          "regime_id": "rot-fwd-OOS-5d",
          "window": "目標 ≥09-22",
          "start": "1,000,000",
          "end_nav": "1,000,000",
          "fills": "0",
          "vs_T": "—",
          "vs_EW": "—",
          "note": "waiting：data_asof 09-18 ＜ 09-22，尚無 bar"
        }
      ],
      "dev_quote": "DEV／pseudo 不得當過關：三線開發窗普遍 輸 EW（hf-A2008 唯一勝 T 仍輸 EW；mom／rot 更明顯）。",
      "markdown": "---\nweek: 2026-W39\ndesk: 交易操作\nstatus: gated\ngated_by: 投顧幕僚長\ngated_at: 2026-09-21\ndate: 2026-09-21\ndata_asof: 2026-09-18\ntaiex_asof: 2026-09-18\nsources:\n  - trades/hf-5d/SUMMARY.md\n  - trades/mom-5d/SUMMARY.md\n  - trades/rot-5d/SUMMARY.md\nversion: 不升版\n---\n\n# 模擬練習週報 2026-W39\n\n## 狀態（本週）\n\n- **data_asof／taiex_asof = 2026-09-18**（三線 SUMMARY 一致；raw FinMind，**缺 adj**）。\n- 三線 paper 分帳、各 regime 期初 **100 萬**；不升版、不實盤、不下單用語。\n- W38 已過閘；本週重點＝**fwd 進度**＋開發窗結論複述（不當過關）。\n\n## 1. Forward OOS（本週主表）\n\n| 線 | regime_id | 窗（起→資料尾） | 期初 | 期末 NAV | fills | vs_T 累積 | vs_EW 累積 | 備註 |\n|---|---|---|---:|---:|---:|---:|---:|---|\n| hf-5d | `fwd-OOS-5d` | 09-10→**09-18** | 1,000,000 | **1,000,000** | 0 | ≈−0.5ppt（相對期間大盤） | 未報 | **非 mid→現金**（規則結果，非缺價） |\n| mom-5d | `mom-fwd-OOS-5d` | 09-17→**09-18** | 1,000,000 | **1,000,000** | 0 | ≈−1.9ppt | ≈−5.5ppt | 同樣 **非 mid→現金**；短窗 vs 年化勿過度解讀 |\n| rot-5d | `rot-fwd-OOS-5d` | 目標 ≥**09-22** | 1,000,000 | **1,000,000** | 0 | — | — | **waiting**：data_asof 09-18 ＜ 09-22，尚無 bar |\n\n路徑：`trades/hf-5d/fwd-OOS-5d/`、`trades/mom-5d/mom-fwd-OOS-5d/`、`trades/rot-5d/rot-fwd-OOS-5d/`。\n\n## 2. 各線 regime NAV 總表（期初皆 100 萬）\n\n### hf-5d\n\n| regime_id | 角色 | 期末 NAV | 報酬 | fills | vs_T 累積 | vs_EW 累積 |\n|---|---|---:|---:|---:|---:|---:|\n| `dev-A2008` | DEV | 3,530,695 | +253% | 46 | +156ppt | −39ppt |\n| `dev-A2016` | DEV | 1,332,380 | +33% | 478 | −19ppt | −158ppt |\n| `pseudo-CS-2023` | 附錄 | 1,677,286 | +68% | 191 | −164ppt | — |\n| `fwd-OOS-5d` | 真 OOS | 1,000,000 | 0% | 0 | 見上 | — |\n\n### mom-5d\n\n| regime_id | 角色 | 期末 NAV | 報酬 | fills | vs_T 累積 | vs_EW 累積 |\n|---|---|---:|---:|---:|---:|---:|\n| `mom-dev-2009-2016` | DEV | 1,101,341 | +10% | 1076 | −87ppt | −71ppt |\n| `mom-dev-2017-2022` | DEV | 1,557,457 | +56% | 566 | +5ppt | −170ppt |\n| `mom-pseudo-2023` | 附錄 | 1,940,391 | +94% | 212 | −138ppt | −378ppt |\n| `mom-fwd-OOS-5d` | 真 OOS | 1,000,000 | 0% | 0 | 見上 | 見上 |\n\n### rot-5d\n\n| regime_id | 角色 | 期末 NAV | 報酬 | fills | vs_T 累積 | vs_EW 累積 |\n|---|---|---:|---:|---:|---:|---:|\n| `rot-dev-2009-2016` | DEV（B 出場） | 779,946 | −22% | 235 | −119ppt | −103ppt |\n| `rot-dev-2017-2022` | DEV | 1,216,087 | +22% | 261 | −30ppt | −205ppt |\n| `rot-pseudo-2023` | 附錄 | 1,041,841 | +4% | 97 | −228ppt | −482ppt |\n| `rot-fwd-OOS-5d` | 真 OOS | 1,000,000 | 0% | 0 | — | **waiting ≥09-22** |\n\n`rot-dev-2009`：`corp_action_exits`＝2009-08-13 SELL 2408 @5.95 prev_close（B；無假 OPEN）。\n\n## 3. 本期 fills 摘要\n\n- **fwd 三線本期實質成交：0**（hf／mom 因非 mid 持現金；rot 尚未開窗）。\n- 開發窗 fills 為歷史紙上存量（上週已打分）：hf 低換手結構籃 vs mom／rot 高週轉；成本拖累已在 W38 結論。\n\n## 4. vs 大盤／同宇宙 EW（解讀紀律）\n\n- **DEV／pseudo 不得當過關**：三線開發窗普遍 **輸 EW**（hf-A2008 唯一勝 T 仍輸 EW；mom／rot 更明顯）。\n- **fwd**：hf／mom 現金讓相對大盤短期落後或持平屬「沒上船」；樣本仍極短，**不**解讀成策略失效或有效。\n- **rot fire**：幕僚長已打分——**尚未證明輪動增量**；本週不調參。\n\n## 5. 犯錯與下一步\n\n1. 曾把已見窗當 OOS → 已改；本週維持 fwd 才是真 OOS。  \n2. 缺 adj → NAV／動能排序有 raw 風險；續標、不發明 adj。  \n3. rot 2009 缺 OPEN → 已用 B 強制賣，不填假價。  \n4. **下一步**：@量化回測 補價至 **≥09-22** 後延續 **三條 fwd**；交易組 W40 併 NAV／是否仍非 mid。  \n5. 不調 fire／mom／hf 參數；不升版；sandbox／P0 仍待命。\n\n不下單用語。不升版。不實盤。\n"
    },
    {
      "id": "2026-W38",
      "status": "gated",
      "gated_at": "2026-09-17",
      "data_asof": "2026-09-16",
      "source_path": "trades/sim-practice/weekly/2026-W38.md",
      "fwd_oos": null,
      "dev_quote": "開發窗不能當過關：A2016 扣成本後輸大盤與 EW；A2008 勝大盤仍輸 EW → 頻率／成本敘事「可檢驗」，不可當 OOS 或升版依據。",
      "markdown": "---\nweek: 2026-W38\ndesk: 交易操作\nstatus: gated\ngated_by: 投顧幕僚長\ngated_at: 2026-09-17\ndate: 2026-09-17\ndata_asof: 2026-09-16\nsource: trades/hf-5d/SUMMARY.md\nversion: 不升版\n---\n\n# 模擬練習週報 2026-W38\n\n## 狀態\n\n- hf-5d rev1 paper **已開**：完整性 **30 PASS／0 FAIL**（`trades/hf-5d/INTEGRITY.md`），`data_asof=2026-09-16`。\n- 價為 **raw FinMind（缺 adj）**；開發窗數字當 raw 風險解讀，不升版。\n- 動能假設已過閘（`ea0cb21`）；`trades/mom-5d/` 骨架在，等量化排分帳。\n- sandbox／半導體 P0 仍待命。\n\n## 各 regime NAV（各 100 萬起）\n\n| regime_id | 角色 | 期初 | 期末 NAV | 累積報酬 | fills |\n|---|---|---:|---:|---:|---:|\n| `dev-A2008` | 開發／頻率成本 | 1,000,000 | **3,530,695** | +253.1% | 46 |\n| `dev-A2016` | 開發／頻率成本（非 OOS） | 1,000,000 | **1,332,380** | +33.2% | 478 |\n| `fwd-OOS-5d` | **真 OOS**（09-10→09-16） | 1,000,000 | **1,000,000** | 0% | **0** |\n\n`fwd` fills=0：非 mid（ret252≫+15%）→ 規則要求全現金，**不是缺價、不是假成交**。\n\n## vs 大盤／同宇宙 EW\n\n| regime | E_ann | Sharpe | vs_TAIEX 累積 | vs_EW 累積 | 年化週轉 | 成本 drag |\n|---|---:|---:|---:|---:|---:|---:|\n| `dev-A2008` | 19.6% | 1.01 | **+156ppt**（勝大盤） | **−39ppt**（輸 EW） | 5.63 | ~15.3ppt |\n| `dev-A2016` | 7.5% | 0.35 | **−19ppt** | **−158ppt** | 4.96 | ~10.7ppt |\n| `fwd-OOS-5d` | 0 | — | 期間大盤約 −2.3%，現金相對大盤 **+2.3ppt** | EW 未報 | 0 | 0 |\n\n## 本期 fills 摘要\n\n- `dev-A2008`：46 筆；再平衡 397 次量級下成交偏少（結構 pick 換手低）。\n- `dev-A2016`：478 筆；三腳等權＋5 日再平衡，週轉與成本明顯。\n- `fwd-OOS-5d`：0 筆（非 mid→現金）。\n\n路徑：`trades/hf-5d/{regime_id}/fills.jsonl`、`equity.csv`、`metrics.json`。\n\n## 犯錯與下一步\n\n1. **開發窗不能當過關**：A2016 扣成本後輸大盤與 EW；A2008 勝大盤仍輸 EW → 頻率／成本敘事「可檢驗」，**不可**當 OOS 或升版依據。\n2. **缺 adj**：NAV／vs 可能偏誤；下週解讀續標 raw。\n3. **真 OOS 才剛起**：僅 5 個交易日現金；下週收盤後續寫 fwd。\n4. 下一步：@量化回測 排 **mom-5d** 分帳（同樣完整性閘）；交易組下週 W39 併 hf fwd＋mom（若有）。\n\n## 附錄：pseudo-CS-2023（不得升版）\n\n| 期末 NAV | fills | E_ann | Sharpe | vs_TAIEX 累積 |\n|---:|---:|---:|---:|---:|\n| 1,677,286 | 191 | 17.9% | 0.95 | **−164ppt**（大輸大盤） |\n\n已見資訊附錄 only；EW 對照本輪未給。\n\n不下單用語。不升版。不實盤。\n\n---\n\n## 追加：mom-5d 分帳（2026-09-17 交件；幕僚長打分 `4e38899`）\n\n來源：`trades/mom-5d/SUMMARY.md`。與 hf-5d **分帳**。raw／缺 adj。**不升版**。\n\n| regime | 角色 | 期末 NAV | fills | vs_T 累積 | vs_EW 累積 |\n|---|---|---:|---:|---:|---:|\n| `mom-dev-2009-2016` | DEV | 1,101,341 | 1076 | −87ppt | −71ppt |\n| `mom-dev-2017-2022` | DEV／複核 | 1,557,457 | 566 | +5ppt | −170ppt |\n| `mom-fwd-OOS-5d` | 真 OOS | 1,000,000 | 0 | — | — |\n\n- fwd：**waiting**（data_asof 09-16，尚無 ≥09-17 bar）→ fills=0 正確，非假成交。\n- DEV 週轉極高（年化 ~15–22）、成本 drag 重；幕僚長：**雙輸／輸 EW，pseudo 漂亮不得過關**。\n- **W39** 再併 hf fwd＋mom fwd（有 bar 後）。\n\n### 附錄：mom-pseudo-2023（不得升版）\n\nNAV 1,940,391；fills 212；vs_T −138ppt、vs_EW −378ppt（附錄 only）。\n\n---\n\n## 追加：rot-5d（2026-09-20 交件；幕僚長打分 `fdc9452`）\n\n來源：`trades/rot-5d/SUMMARY.md`。gated `844c4fc`。raw／缺 adj。**不調參、不升版。**\n\n| regime | 期末 NAV | fills | vs_T | vs_EW | 狀態 |\n|---|---:|---:|---:|---:|---|\n| `rot-dev-2009-2016` | — | 0 | — | — | **blocked**（2408 缺 2009-08-13～17 OPEN） |\n| `rot-dev-2017-2022` | 1,216,087 | 261 | −30ppt | −205ppt | 可跑；週轉~10、常空手 |\n| `rot-fwd-OOS-5d` | 1,000,000 | 0 | — | — | **waiting**（asof 09-18＜09-22） |\n\n### 附錄 pseudo（不得過關）\n\nNAV 1,041,841；fills 97；vs_T −228ppt、vs_EW −482ppt。\n\n### 交易組解讀（對齊打分）\n\n- 契約擋缺 OPEN＝正確；補 2408 後重跑 2009，**禁止**為過關改 fire 門檻。\n- 2017–22 略正 NAV 但大輸 EW／輸大盤 → 這套 fire **尚未證明輪動增量**（對照「永久 foundry／宇宙 EW」失敗）。\n- 下一步：等 2408 補價重跑 DEV；≥09-22 開 fwd；**W39** 併 hf／mom／rot 三條 fwd。\n\n---\n\n## 追加：rot-dev-2009-2016 選項 B 重跑（2026-09-20；入庫 `82469f1`）\n\n來源：`trades/rot-5d/SUMMARY.md`。開關 B（`b3000f7`）：缺窗首日 prev close 強制賣，**無假 OPEN**。\n\n| 項 | 值 |\n|---|---|\n| 狀態 | `completed_with_corp_action_exits`（blocked=False） |\n| 期末 NAV | **≈779,946** |\n| vs_TAIEX | **−1.19**（雙輸） |\n| vs_EW | **−1.03** |\n| corp_action_exits | 2009-08-13 SELL 2408 @ **5.95** `prev_close` |\n\n### 幕僚長打分（不升版）\n\n- B 簿記正確。\n- 2009 與 2017–22 **同結論**：這套 fire **尚未證明輪動增量**。\n- **不調參**。fwd 仍等 ≥09-22。W39 併三條 fwd。\n"
    }
  ]
};
