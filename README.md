# KUBE_WATCHER - UI 프로젝트
 
## contributor
@manbalboy(정훈) manbalboy@hanmail.net

## Tech Requirement (Tech Stack)
- nuxt.js
- ESLint
- Babel
- Storybook
- Jest

## Release
0.0.1 : initialize

## Script
```json
{
  "scripts": {
    "dev": "nuxt", // 데브서버 실행
    "prebuild" : "npm run test", // build 전 jest 실행
    "build": "nuxt build", // nuxt 빌드
    "start": "nuxt start", // nuxt 빌드 후 기동
    "generate": "nuxt generate", // nuxt SSG 
    "test": "jest", // Jest
    "test:coverage": "jest --coverage",
    "test:gen": "jest --json --outputFile=./src/__tests__/.jest-test-results.json || true", // Jest report 
    "storybook": "nuxt storybook", // 스토리북 데브서버 실행
    "prebuild:storybook": "npm run test:gen", // 스토리북 빌드전 선수행
    "build:storybook" : "nuxt storybook build" // 스토리북 빌드
  }
}
```

## Install
- git clone
```shell
git clone https://github.com/manbalboy/nuxt2-setting.git .
```
- npm install
```shell
# clone dir
npm i
```

- project dev start
```shell
npm run dev
```

- project storybook start
```shell
npm run storybook
```


## 사용 모듈 공식사이트
- [Nuxtjs](https://nuxtjs.org)
- [Jest](https://jestjs.io/)
- [Storybook](https://storybook.js.org/)
