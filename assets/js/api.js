const search = document.getElementById("search");
const btn = document.getElementById("btn");
const title = document.getElementById("title");
const poster = document.getElementById("poster");
const plot = document.getElementById("plot");
const rated = document.getElementById("rated");

btn.addEventListener("click", async () => {
  const response = await fetch("/api-key");
  const { apiKey } = await response.json();
  let url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${search.value}`;
  axios
    .get(url)
    .then(function (res) {
      if (res.data.Response == "False") {
        title.textContent = "NOT FOUND!";
        poster.src = "/assets/img/404.jpg";
        plot.textContent = "";
        rated.textContent = "";
        return;
      }
      title.textContent = res.data.Title || "Title not available.";
      poster.src =
        res.data.Poster !== "N/A" ? res.data.Poster : "/assets/img/404.jpg";
      plot.textContent =
        res.data.Plot !== "N/A" ? res.data.Plot : "Plot not available.";
      rated.textContent =
        res.data.Rated !== "N/A" ? res.data.Rated : "Rating not available.";
    })
    .catch(function (err) {
      console.log(err);
    });
});
