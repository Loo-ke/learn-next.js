## page.js를 보여줄 때

- 옆에 layout.js 있으면 그걸로 page.js를 싸맴
- 상위 폴더에 layout.js 있으면 그걸로 1번 싸맴
- 즉, 상위에 있는 모든 layout.js 합쳐서 보여줌!!!!
- 페이지 변경과 상관없이 계속 보여줄 UI는 layout.js를 사용하는게 편하다.(예 : navbar)

## HTML 반복을 줄이고 싶으면 map

```
let arr = [2,3,4];
  arr.map((a, i)=>{
  // a = arr의 값
  // i = 반복 될 때마다 0부터 1씩 커지는 정수
  // return = 새로운 배열을 배열의 길이만큼 담아줌 /reture = 10 -> [10, 10, 10]

  })
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
