# MAE / MFE Optimization Guide

This is the most powerful tool for improving a strategy without changing the entries.

## Definitions
*   **MAE (Maximum Adverse Excursion)**: The worst price (drawdown) the trade experienced while open.
*   **MFE (Maximum Favorable Excursion)**: The best price (profit) the trade reached while open.

## Analysis Workflow

### 1. Optimize Stop Loss (using MAE)
Plot your winning trades. X axis = Trade ID, Y axis = MAE (in R or %).
*   **Scenario**: Your Stop Loss is 100 points. You see that 95% of your Winning Trades never went below -20 points MAE.
*   **Action**: You can tighten your Stop Loss to 25 points.
*   **Result**: Your "Risk" decreases by 4x, so your Position Size can increase by 4x (for same $ risk). Your R:R quadruples immediately.

### 2. Optimize Profit Targets (using MFE)
Plot your trades. Compare "Closed PnL" vs "MFE".
*   **Scenario**: You consistently exit at +2R ($200). But your data shows the average MFE touches +4R ($400) before reversing.
*   **Action**: Test a strategy of holding longer, or selling 50% at 2R and holding runner to 4R.
*   **Gap Analysis**: `Efficiency = Realized PnL / MFE`. If efficiency is low (< 30%), you are exiting way too early.

## Visualizing in Dashboard
Create a Scatter Plot:
*   **X-Axis**: MFE (Points)
*   **Y-Axis**: MAE (Points)
*   **Color**: Green (Win), Red (Loss).
*   **Instruction**: "Look for the cluster of Green dots. Set your Stop Loss just below the densest cluster of MAE."
