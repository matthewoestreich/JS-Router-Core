class Router {
  constructor(routes) {
    this.routes = routes;
    this._handleRouteChange();
    window.addEventListener("popstate", () => this._handleRouteChange());
  }

  navigate(path) {
    history.pushState({}, "", path);
    this._handleRouteChange();
  }

  _handleRouteChange() {
    const path = window.location.pathname;
    const route = this.routes[path] || this.routes["404"];
    if (route) {
      route();
    }
  }
}