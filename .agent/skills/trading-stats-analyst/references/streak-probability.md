# Streak Probability Analysis

Understanding probability prevents emotional collapse.
"In a random distribution, streakiness is normal."

## The Table of Doom (Consecutive Losses)
Based on a 100-trade sample size.

| Win Rate | % Chance of losing 5 in a row | % Chance of losing 10 in a row |
| :--- | :--- | :--- |
| **30%** | > 99.9% | 85% |
| **40%** | 99% | 45% |
| **50%** | 80% | 8% |
| **60%** | 35% | 0.5% |

**Insight**: If you have a 50% win rate strategy (which is good!), there is an **80% chance** you will face a 5-loss streak in your next 100 trades.
**Action**: If you can't emotionally handle 5 losses in a row, you are mathematically guaranteed to fail with a 50% Win Rate strategy. You must lower your risk per trade so the drawdown doesn't kill you.

## The "Fat Tail" of Drawdowns
Most people model "Average Drawdown". Quants model "Maximum Drawdown".
*   In 1,000 trades, you *will* see a 4-sigma event (a streak that shouldn't happen theoretically, but does).
*   **Safety Factor**: Whatever your backtest says allows for Maximum Drawdown, **multiply it by 1.5x**. That is your real risk.
