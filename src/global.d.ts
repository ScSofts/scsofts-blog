import React from "react";
import * as ReactDOM from "react-dom/client";

declare global {
  export interface Window {
    react: typeof React;
    reactDOM: typeof ReactDOM;
  }
}