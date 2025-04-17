import dotenv from "dotenv";
dotenv.config();

export const environment = process.env.NODE_ENV;
export const port = process.env.PORT;
export const serverUrl = process.env.SERVER_URL?.trim() || "http://localhost:5000";
console.log(process.env.DB_URL)
export const db = {
  name: process.env.DB_NAME || "",
  url: process.env.DB_URL || "",
  minPoolSize: parseInt(process.env.DB_MIN_POOL_SIZE || "5"),
  maxPoolSize: parseInt(process.env.DB_MAX_POOL_SIZE || "10"),
};

// spliting the corlUrl and return url string array
export const corsUrl = process.env.CORS_URL?.split(",") || "http://localhost:3002";
console.log(corsUrl);

export const cookieValidity = process.env.COOKIE_VALIDITY_SEC || "172800";

export const tokenInfo = {
  jwtSecretKey: process.env.JWT_SECRET_KEY || "",
  accessTokenValidity: parseInt(process.env.ACCESS_TOKEN_VALIDITY_SEC || "182800"),
  refreshTokenValidity: parseInt(process.env.REFRESH_TOKEN_VALIDITY_SEC || "604800"),
  issuer: process.env.TOKEN_ISSUER || "",
  audience: process.env.TOKEN_AUDIENCE || "",
};
