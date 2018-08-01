var clinicDetailTemplate = 
`<div class="container">
  <div class="jumbotron">
    <div class="clinic-name display-4">
      <%= name %>
    </div>
    <hr class="my-4">
    <p class="clinic-address lead">
      <%= address %>
    </p>
    <p class="clinic-city-state-country">
      <%= city %>,
        <%= state %> -
          <%= country %>
    </p>
    <a class="btn btn-primary btn-lg"
       href="#home"
       role="button">Go back</a>
  </div>
</div>`;