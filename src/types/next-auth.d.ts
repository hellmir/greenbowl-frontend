export declare module "next-auth" {
  interface User {
    accessToken: string;
    userId: number;
  }
  interface Session {
    accessToken: string;
    userId: number;
  }
}
export declare module "@auth/core/jwt" {
  interface JWT {
    accessToken: string;
    userId: number;
  }
}
