function movieinfo(){

const APIKEY='16fe36f';

const URL=`http://www.omdbapi.com/?i=tt3896198&apikey=169fe36f`;
    
const movie = document.getElementById('movie').value;

if (!movie){
    alert("please enter a movie name");
     return;
}
 const movieurl = `http://www.omdbapi.com/?t=${movie}&apikey=169fe36f`;
 
fetch(movieurl)
        .then(response => response.json())
        .then(data => {
            displaymovieinfo(data); // Call function to display hourly forecast
        })
        .catch(error => {
            console.error('Error fetching movie data:', error);
            alert('Error fetching movie data. Please check your internet connection and try again.');
        });
  
  function displaymovieinfo(data) {
 
if (data.Response === "False") {
  document.getElementById('movie-name').innerHTML = `<span style="color: red;background-color:white;"><b>Enter a valid movie name....</b></span>`;
  document.getElementById('release-year').innerHTML = '';
  document.getElementById('genre').innerHTML = '';
  document.getElementById('rating').innerHTML = '';
  document.getElementById('cast').innerHTML = '';
  document.getElementById('director').innerHTML = '';
  document.getElementById('synopsis').innerHTML = '';
 }
else{
    const moviename = document.getElementById('movie-name');
    const movieyearofrelease = document.getElementById('release-year');
    const moviegenre = document.getElementById('genre');
    const movierating = document.getElementById('rating');
    const moviecast = document.getElementById('cast');
    const moviedirector = document.getElementById('director');
    const moviesynopsis = document.getElementById('synopsis');
     moviename.innerHTML = `<span style="color: white;background-color:#1e233bd4;"><b>MOVIE NAME :</b> </span><span style="color: #00FFFF;"><b>${data.Title}</b></span>`;
  movieyearofrelease.innerHTML = `<span style="color: white;"><b>RELEASE YEAR :</b> </span><span style="color: #00FFFF;"><b>${data.Year}</b></span>`;
  moviegenre.innerHTML = `<span style="color: white;"><b>GENRE :</b> </span><span style="color: #00FFFF;"><b>${data.Genre}</b></span>`;
  movierating.innerHTML = `<span style="color: white;"><b>RATING :</b> </span><span style="color: #00FFFF;"><b>${data.imdbRating}</b></span>`;
  moviecast.innerHTML = `<span style="color: white;"><b>CAST : </b></span><span style="color: #00FFFF;"><b>${data.Actors}</b></span>`;
  if (moviedirector){
   moviedirector.innerHTML = `<span style="color: white;"><b>DIRECTOR :</b>       </span><span style="color: #00FFFF;"><b>${data.Director}</b></span>`;
   }
  moviesynopsis.innerHTML = `<span style="color: white;"><b>SYNOPSIS :</b> </span><span style="color: #00FFFF;"><b>${data.Plot}</b></span>`;
 }   
}
}


