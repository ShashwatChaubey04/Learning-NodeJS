const adminAuth = (req, res, next) => {
  const token = "xyz124";
  const isAdminAuthorized = token ==="xyz";
  if(isAdminAuthorized) next();
  else res.status(401).send("Unauthorized Request");
};

const userAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminAuthorized = token ==="xyz";
  if(isAdminAuthorized) next();
  else res.status(401).send("Unauthorized Request");
};

module.exports = {
  adminAuth, userAuth,
}