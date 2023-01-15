$('#search-button').on('click', function (){
    $('#movie-list').html('')
    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : 'aba2f296',
            's' : $('#search-input').val() 
        },
        success : function (result) {
            if (result.Response == "True"){
                let movies = result.Search
                
                $.each(movies, function(i, data){
                    $('#movie-list').append(`
                    <div class="col-md-4 mt-4">
                     <div class="card">
                        <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">`+ data.Title +`</h5>
                            <p class="card-text">`+ data.Year +`</p>
                            <a href="#" class="btn btn-primary details" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ data.imdbID +`">See Details</a>
                        </div>
                     </div>  
                    </div>
                    `)
                })

                $('#search-input').val('')
            } else {
                $('#movie-list').html('<h2>'+ result.Error + '</h2>')
            }
        }
    })
})

$('#movie-list').on('click', '.details', function (){
    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : 'aba2f296',
            'i' : $(this).data('id')
        },
        success : function (movie){
            if(movie.Response === "True"){
                $('.modal-body').html(`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                        <img src="`+ movie.Poster +`" class="img-fluid">
                        </div>

                        <div class="col-md-8">
                                <ul class="list-group">
                                        <li class="list-group-item"><h3>`+ movie.Title +`</h3></li>
                                        <li class="list-group-item">Release : `+ movie.Released +`</li>
                                        <li class="list-group-item">Actors : `+ movie.Actors +`</li>
                                        <li class="list-group-item">Genre : `+ movie.Genre +`</li>
                                        <li class="list-group-item">Plot : `+ movie.Plot +`</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                
                `)
            }
        }
    })
})


