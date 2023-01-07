<div align="center">
  <h1 align="center"><strong>Vote</strong></h1>
  <p align="center"><i>An application for users to poll between the best image.</i></p>
</div>

## **Usage**

If you wish to see this website live, please head over to the [live site](https://vote-dun.vercel.app/).

Or if you wish to clone this and use it yourself.

```bash
cd vote
npm install
```

For this clone, you will need a database up and running, like Docker or using a service e.g. [Planetscale](https://planetscale.com/)

Then, sync up your database and your prisma schema.

```bash
npx prisma db push
```

Finally, create a migration.

```bash
npx prisma migrate dev --name init
```

## **Tools**

[![NextJS][nextjs]][nextjs-url] <br>
[![TypeScript][typescript]][typescript-url] <br>
[![Tailwindcss][tailwind]][tailwind-url] <br>
[![MySQL][mysql]][mysql-url] <br>
[![Prisma][prisma]][prisma-url]

## **Acknowledgments**

- [Create T3 App](https://create.t3.gg/)
  - A bootstrap package for full-stack type safety.
- [Planetscale](https://planetscale.com/)
  - A service that will host and manage a MySQL database.

<p align="center">Made with ❤️ by Brook Nash.</p>

[nextjs]: https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white
[nextjs-url]: https://nextjs.org/
[typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[tailwind]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwind-url]: https://tailwindcss.com/
[mysql]: https://img.shields.io/badge/mysql-%23000.svg?style=for-the-badge&logo=mysql&logoColor=white
[mysql-url]: https://mysql.com/
[prisma]: https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
[prisma-url]: https://prisma.com/
