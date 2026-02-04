# Risk Management (Quant Level)

## 1. Risk of Ruin (RoR)
The mathematical probability that you will lose X% of your account (usually 100%) before you double it.

**Formula (Simplified)**:
```
RoR = ((1 - Edge) / (1 + Edge)) ^ Capital_Units
```
*   **Edge**: Your expectancy per trade.
*   **Capital_Units**: Number of "Risks" you have (e.g., $10k account, $100 risk = 100 units).
*   **Insight**: If your RoR is > 0.01% (1 in 10,000), you are trading too big.

## 2. Kelly Criterion
The formula for Maximum Geometric Growth.
```
Kelly % = W - ((1 - W) / R)
```
*   **W**: Win Probability (e.g., 0.50).
*   **R**: Win/Loss Ratio (e.g., 2.0).
*   **Example**: `0.5 - (0.5 / 2) = 0.25 (25%)`.
*   **WARNING**: Full Kelly is incredibly volatile (expect 50% drawdowns).
*   **Action for Humans**: Use **Half-Kelly** or **Quarter-Kelly** (e.g., 6% risk per trade in this example) for smoother equity curves.

## 3. Optimal F
Similar to Kelly, but accounts for the "biggest loser". It ensures you never bet so much that a single worst-case loss wipes you out.
