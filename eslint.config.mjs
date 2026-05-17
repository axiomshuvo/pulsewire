import nextVitals from "eslint-config-next/core-web-vitals";
import { defineConfig, globalIgnores } from "eslint/config";

const heroUiV2Restrictions = [
  {
    selector:
      "JSXOpeningElement[name.name='Input'] > JSXAttribute[name.name='label']",
    message:
      "HeroUI v3 Input is a low-level primitive. Use TextField + Label instead of the legacy label prop.",
  },
  {
    selector:
      "JSXOpeningElement[name.name='Input'] > JSXAttribute[name.name='labelPlacement']",
    message:
      "HeroUI v3 Input does not support labelPlacement. Compose fields with TextField + Label.",
  },
  {
    selector:
      "JSXOpeningElement[name.name='Input'] > JSXAttribute[name.name='startContent']",
    message:
      "HeroUI v3 Input does not support startContent. Use InputGroup.Prefix instead.",
  },
  {
    selector:
      "JSXOpeningElement[name.name='Input'] > JSXAttribute[name.name='endContent']",
    message:
      "HeroUI v3 Input does not support endContent. Use InputGroup.Suffix instead.",
  },
  {
    selector:
      "JSXOpeningElement[name.name='Input'] > JSXAttribute[name.name='classNames']",
    message:
      "HeroUI v3 Input does not support the legacy classNames prop in this repo. Use TextField + InputGroup composition instead.",
  },
  {
    selector:
      "JSXOpeningElement[name.name='Checkbox'] > JSXAttribute[name.name='classNames']",
    message:
      "HeroUI v3 Checkbox uses Checkbox.Control, Checkbox.Indicator, and Checkbox.Content for custom styling instead of classNames.",
  },
  {
    selector:
      "JSXOpeningElement[name.name='Button'] > JSXAttribute[name.name='radius']",
    message:
      "HeroUI v3 Button does not use the legacy radius prop in this repo. Use Tailwind classes for rounding.",
  },
  {
    selector:
      "JSXOpeningElement[name.name='Card'] > JSXAttribute[name.name='radius']",
    message:
      "HeroUI v3 Card does not use the legacy radius prop in this repo. Use Tailwind classes for rounding.",
  },
  {
    selector:
      "JSXOpeningElement[name.name='Checkbox'] > JSXAttribute[name.name='radius']",
    message:
      "HeroUI v3 Checkbox does not use the legacy radius prop in this repo. Style the compound parts directly instead.",
  },
  {
    selector:
      "JSXOpeningElement[name.name='Card'] > JSXAttribute[name.name='shadow']",
    message:
      "HeroUI v3 Card does not use the legacy shadow prop in this repo. Use Tailwind shadow classes instead.",
  },
];

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    files: ["src/**/*.{js,jsx,mjs}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "@heroui/react",
              importNames: ["CardBody"],
              message:
                "Use CardContent from @heroui/react instead of the legacy CardBody export.",
            },
            {
              name: "@heroui/react",
              importNames: ["Divider"],
              message:
                "Use Separator from @heroui/react instead of the legacy Divider export.",
            },
          ],
          patterns: [
            {
              group: ["@nextui-org/*"],
              message:
                "Use HeroUI v3 packages instead of the legacy NextUI packages.",
            },
          ],
        },
      ],
      "no-restricted-syntax": ["error", ...heroUiV2Restrictions],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
