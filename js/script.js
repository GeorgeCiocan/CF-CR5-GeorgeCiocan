let moviesArray = JSON.parse(movies)
let sortedArray = moviesArray

//creates display function
function display (movieList) {
  $("#movies").empty()
  movieList.forEach(movie => {
    $("#movies").append(`
      <div class="col-12 col-md-6">
        <div class="card mb-3 border-0 ">
          <div class="row no-gutters bg-nice-gray">
            <div class="col-lg-4 p-2">
              <img
                src="${movie.image}"
                class="card-img border border-light rounded"
                alt="${movie.name}"
              />
            </div>
            <div class="col-lg-8">
              <div class="card-body text-white">
                <h5 class="card-title">${movie.name}</h5>
                <p class="card-text year">
                  ${movie.year}
                </p>
                <p class="card-text cast">
                  Cast: ${movie.cast}
                </p>
                <p class="card-text description">
                  ${movie.description}
                </p>
              </div>
              <div class="card-footer bla">
                <button id="${movie.name}" type="button" class="btn btn-success btn-like">
                Like 👍 <span class="badge badge-light">${movie.likes}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `)
  });

  //ads like function to like button
  $(".btn-like").on("click", function() {
    let target = movieList.find( element => element.name == this.id)
    target.likes++
    $(this).children()[0].innerText = target.likes
  })

}

//creates sort function
function toggleSort() {
  sortedArray = moviesArray.sort((a, b) => b.likes - a.likes )
  display(sortedArray)
}

$("#sort-button").on("click", toggleSort)
$(document).ready(display(sortedArray));

