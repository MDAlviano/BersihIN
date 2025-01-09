export { auth as middleware } from "@/../auth"
// import { NextResponse } from 'next/server';
// import { getToken } from 'next-auth/jwt';
//
// export async function middleware(req) {
//   const token = await getToken({ req });
//   const url = req.nextUrl.clone();
//
//   const protectedRoutes = ['/dashboard', '/user'];
//
//   // Redirect to login if user tries to access protected route without token
//   if (!token && protectedRoutes.some(route => url.pathname.startsWith(route))) {
//     url.pathname = '/auth/login';
//     return NextResponse.redirect(url);
//   }
//
//   // Redirect logged-in user trying to access login page
//   if (token && url.pathname.startsWith('/auth/login')) {
//     url.pathname = '/dashboard';
//     return NextResponse.redirect(url);
//   }
//
//   return NextResponse.next();
// }
//
// export const config = {
//   matcher: ['/dashboard/:path*', '/user/:path*', '/auth/login'], // Specify the routes to apply middleware
// };
