# Core Trading Math Formulas

Use these formulas in your application logic to display KPIs.

## 1. Expectancy (EV)
The theoretical value of your next trade.
```javascript
const winRate = wins / totalTrades; // e.g., 0.50
const lossRate = 1 - winRate;       // e.g., 0.50
const avgWin = totalWinAmt / wins;  // e.g., $200
const avgLoss = totalLossAmt / losses; // e.g., $100 (Absolute value)

// Method 1 (Dollar EV)
const evDollar = (winRate * avgWin) - (lossRate * avgLoss);
// Result: (0.5 * 200) - (0.5 * 100) = $50 per trade.

// Method 2 (R-Multiple EV) - PREFERRED
const avgR = avgWin / avgLoss; // Reward to Risk Ratio (2.0)
const evR = (winRate * avgR) - lossRate;
// Result: (0.5 * 2) - 0.5 = 0.5R per trade.
```

## 2. Profit Factor
The measure of efficiency.
```javascript
const profitFactor = grossProfit / grossLoss;
```
*   **< 1.0**: Losing Strategy.
*   **1.0 - 1.5**: Marginal (Break even friction).
*   **1.5 - 2.0**: Solid System.
*   **> 3.0**: Exceptional (or curve fitted).

## 3. Drawdown
The decline from the historical equity peak.
```javascript
const currentDrawdown = (peakEquity - currentEquity) / peakEquity * 100;
```

## 4. SQN (System Quality Number)
Used by Van Tharp to score a system.
```javascript
const sqn = (avgExecptancy / stdDevOfR) * Math.sqrt(numberOfTrades);
```
*   **< 1.6**: Poor/Random.
*   **> 3.0**: Holy Grail.
