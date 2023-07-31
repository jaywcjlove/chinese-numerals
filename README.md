Chinese Numerals
===

[![Build & Deploy](https://github.com/jaywcjlove/chinese-numerals/actions/workflows/ci.yml/badge.svg)](https://github.com/jaywcjlove/chinese-numerals/actions/workflows/ci.yml)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@wcj/chinese-numerals/file/README.md)
[![npm version](https://img.shields.io/npm/v/@wcj/chinese-numerals.svg)](https://www.npmjs.com/package/@wcj/chinese-numerals)
[![Coverage Status](https://jaywcjlove.github.io/chinese-numerals/badges.svg)](https://jaywcjlove.github.io/chinese-numerals/lcov-report/)

Lowercase Chinese numerals

| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 100 | 1000 | 10000 | 10<sup>8</sup> | 10<sup>12</sup> | 10<sup>16</sup> | 10<sup>20</sup> | 10<sup>24</sup> | 10<sup>28</sup> | 10<sup>32</sup> | 10<sup>36</sup> | 10<sup>40</sup> | 10<sup>44</sup> | 10<sup>48</sup> |
| - | - | - | - | - | - | - | - | - | - | -- | --- | ---- | ----- | --- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 〇 | 一 | 二 | 三 | 四 | 五 | 六 | 七 | 八 | 九 | 十  | 百   | 千    | 萬     | 億   | 兆    | 京    | 垓    | 秭    | 穰    | 溝    | 澗    | 正    | 載    | 極    |


Uppercase Chinese numerals

| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 100 | 1000 | 10000 | 10<sup>8</sup> | 10<sup>12</sup> | 10<sup>16</sup> | 10<sup>20</sup> | 10<sup>24</sup> | 10<sup>28</sup> | 10<sup>32</sup> | 10<sup>36</sup> | 10<sup>40</sup> | 10<sup>44</sup> | 10<sup>48</sup> |
| - | - | - | - | - | - | - | - | - | - | -- | --- | ---- | ----- | --- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 零 | 壹 | 貳 | 參 | 肆 | 伍 | 陸 | 柒 | 捌 | 玖 | 拾 | 佰 | 仟 | 萬 | 億 | 兆 | 京 | 垓 | 秭 | 穰 | 溝 | 澗 | 正 | 載 | 極 |

Heavenly Dry(天干地支)

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| - | - | - | - | - | - | - | - | - | - |
|甲 | 乙 | 丙 | 丁 | 戊 | 己 | 庚 | 辛 | 壬 | 癸 |


## Installation

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c): Node 12+ is needed to use it and it must be import instead of require.

```bash
npm install @wcj/chinese-numerals
```

## Usage

```js
import { lowercase, uppercase, heavenlyDry } from "@wcj/chinese-numerals";

console.log(lowercase)     // => ['〇', '一', '二', '三', '四', ... ]
console.log(lowercase[3])  // => '三'

console.log(uppercase)     // => ['零', '壹', '貳', '參', '肆', ... ]
console.log(uppercase[2])  // => '貳'

console.log(heavenlyDry)   // => ['甲', '乙', '丙', '丁', '戊', '己', ... ]
console.log(heavenlyDry[2 - 1])  // => '乙'
```

```js
import lowercase from "@wcj/chinese-numerals/lowercase.json";
import uppercase from "@wcj/chinese-numerals/uppercase.json";
import heavenlyDry from "@wcj/chinese-numerals/heavenly-dry.json";

console.log(lowercase)     // => ['〇', '一', '二', '三', '四', ... ]
console.log(lowercase[3])  // => '三'
console.log(uppercase)     // => ['零', '壹', '貳', '參', '肆', ... ]
console.log(uppercase[2])  // => '貳'
console.log(heavenlyDry[2 - 1])  // => '乙'
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/jaywcjlove/chinese-numerals/graphs/contributors">
  <img src="https://jaywcjlove.github.io/chinese-numerals/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
