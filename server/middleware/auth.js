const isAuth = (req, res, next) => {
  if (req.app.locals.user) {
    res.locals.user = req.app.locals.user;
    console.log(res.locals.user);
    return next();
  }
};

export default isAuth;
