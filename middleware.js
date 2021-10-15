module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    //Store the URL they are requesting.
    req.flash("error", "You must be signed in first.");
    return res.redirect("/login");
  }
  next();
};
