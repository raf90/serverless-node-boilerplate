module.exports = function Blueprint(name = '') {
  const routes = [];

  const blueprint = function blueprint(request, response) {
    routes.forEach((route) => {
      if (request.path === route.path) {
        route.callback(request, response);
      }
    });
  };

  blueprint.route = function route(path, callback) {
    routes.push({ path, callback });
  };

  return blueprint;
};
