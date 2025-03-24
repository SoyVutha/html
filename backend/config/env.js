import { config  } from "dotenv";
config({path:`.env.${process.env.NODE_ENV || 'development'}.local`});
export const { PORT ,NODE_ENV,DB_url,JWT_SECRET,JWT_EXPIRE_IN,Arcjet_key,Arcjet_development} = process.env;