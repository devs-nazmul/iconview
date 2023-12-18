
// This page is for Speed Comparison.
//
// import prisma from "@/libs/prisma";
//
// import { postgres } from "@/libs/postgres";
//
// export const GET = async (_request) => {
//
// 	const result = await postgres.query(`
//       SELECT *
//       FROM "Icon"
//       WHERE id IN (
//         SELECT "iconId"
//         FROM "Style"
//         WHERE type = 'brands'
//         LIMIT 200
//       )
//       ORDER BY name ASC;
//     `);
//
// 	const getIcon = result.rows;
//
//
// 	return Response.json(getIcon)
// }
//
