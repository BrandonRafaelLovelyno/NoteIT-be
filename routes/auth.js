const {
  createUser,
  deleteUser,
  login,
  googleLogin,
  googleCallback,
  session,
  logOut,
} = require("../controllers/user");

const asyncWrapper = require("../utils/wrapper");

module.exports = (router) => {
  router.post("/auth/signup", asyncWrapper(createUser));
  router.post("/auth/login", asyncWrapper(login));
  router.post("/auth/delete", asyncWrapper(deleteUser));
  router.get("/auth/google", asyncWrapper(googleLogin));
  router.get("/auth/google/callback", asyncWrapper(googleCallback));
  router.get("/auth/session", asyncWrapper(session));
  router.post("/auth/logout", asyncWrapper(logOut));
};
