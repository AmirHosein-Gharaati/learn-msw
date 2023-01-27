import helloHandler from "./modules/hello";
import userHandler from "./modules/user";

export const handlers = [...helloHandler, ...userHandler];
