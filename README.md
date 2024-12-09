# JavaScript NaN Handling Bug

This repository demonstrates a common JavaScript bug related to handling `NaN` (Not a Number) using loose comparison (`==`).

The `bug.js` file contains a function that attempts to handle `null` values, but incorrectly uses loose comparison, leading to incorrect results when the input is `NaN`.

The `bugSolution.js` file provides a corrected version of the function that uses strict equality (`===`) to handle `null` and `NaN` values correctly.

This bug highlights the importance of using strict equality (`===`) in JavaScript to avoid unexpected behavior caused by loose comparison, especially when dealing with special values like `NaN` and `null`.