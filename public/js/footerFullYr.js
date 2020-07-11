let yr = document.getElementById('yr');
a = new Date();
let n = a.getFullYear();
yr.innerHTML = n;

// social share buttons
let elems = document.querySelector('.activator')
elems.addEventListener('click', function() {
    // console.log('selected')
    document.querySelector('.float-right').innerHTML = `<a type="button" class="btn-floating btn-sm btn-fb">
                            <i class="fab fa-facebook-f text-primary"></i>
                        </a>
                        <!--Twitter-->
                        <a type="button" class="btn-floating btn-sm btn-tw">
                            <i class="fab fa-twitter text-info"></i>
                        </a>
                        <!--Instagram-->
                        <a type="button" class="btn-floating btn-sm btn-gplus">
                            <i class="fab fa-instagram text-danger"></i>
                        </a>
                        <!--Linkedin-->
                        <a type="button" class="btn-floating btn-sm btn-ins">
                            <i class="fab fa-linkedin-in text-info"></i>
                        </a>`

  });