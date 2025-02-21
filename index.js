console.log("hit")
const PORT = location.port;
const HomePage = `
<h1>Home Page</h1>
      <span>
        While working with <a class="special-keyword" href="https://react.dev/" target="_blank">React</a>, we usually just use the 
        <a class="special-keyword" href="https://reactrouter.com/en/main/components/browserrouter" target="_blank">Browser Router</a>
        from React Router without knowing how it works internally.
      </span>
      <span>
        This is just a sample project to understand the internal working of a router in
        bigger frameworks and understand the history API that each of them uses under the
        hood. 
      </span>
      <span>Go ahead and click the links on the Navbar</span>
    `;
const AboutPage = ` <h1>About Page</h1>
      <span
        >As you can see the even though we are using anchor tag in the code, the
        page does not reload and the URL also chages with the help of pushState
        from history API
      </span>
    `;
const settingPage = `<h1>Setting page</h1><span>Why do we need a router if we can create SPAs so easily? </span>`;
let root = document.getElementById("root");
// onClickNavigate();
window.addEventListener("DOMContentLoaded", onClickNavigate);

function onClickNavigate(event) {
  if (event) event.preventDefault();
  // Target will return the whole element and href will only return the url.
  let pathName = "";
  //   let fullUrl = "";
  console.log(event.target.href);
  if (event.type === "click") {
    pathName = event.target.href.split(PORT)[1];
  } else {
    pathName = location.href.split(PORT)[1];
  }
  // pushState adds a new entry in the current session's history stack
  window.history.pushState({}, "", event.target.href || location.href);
  pageData(pathName);
}
function pageData(pathName) {
  console.log("called", pathName);
  switch (pathName) {
    case "/":
      root.innerHTML = HomePage;
      break;
    case "/about":
      root.innerHTML = AboutPage;
      break;
    case "/setting":
      root.innerHTML = settingPage;
      break;
    default:
      root.innerHTML = "404 not found";
  }
}

// here popstate will call the function everytime we press on navigation icon in chrome
window.addEventListener("popstate", onClickNavigate);
