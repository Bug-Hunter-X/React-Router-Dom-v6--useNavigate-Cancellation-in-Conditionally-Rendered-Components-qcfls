# React Router Dom v6 Navigation Issue

This repository demonstrates a subtle bug in React Router Dom v6 related to using the `useNavigate` hook within conditionally rendered components.  The issue arises when navigation is initiated, but the component unmounts before the navigation action completes, leading to unexpected routing behavior.  The solution involves a technique to ensure the navigation request completes even after the component has unmounted.

## Bug Reproduction

Clone the repository and run `npm install`. You'll find two files: `ConditionalNavigationBug.js` (demonstrating the bug) and `ConditionalNavigationSolution.js` (showing the solution).

## Solution

The solution involves using a cleanup function within the `useEffect` hook to handle the navigation promise and prevent cancellation.  This ensures that the navigation is not interrupted even if the component unmounts.