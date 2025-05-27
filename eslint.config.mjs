import js from "@eslint/js";
import tseslint from "typescript-eslint";
import tseslintPlugin from "@typescript-eslint/eslint-plugin"

export default tseslint.config({
  files: ["**/*.ts"],
  plugins: {
    "@typescript-eslint": tseslintPlugin,
  },
  rules: {
    "no-undef": "off",
  },
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
});
