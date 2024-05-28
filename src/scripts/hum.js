document.getElementById('menu-toggle').addEventListener('change', function() {
	var navMenu = document.getElementById('nav-menu');
	var mobileMenu = document.getElementById('mobile-menu');
	
	if (this.checked) {
	  navMenu.classList.add('hidden');
	  mobileMenu.classList.remove('hidden');
	} else {
	  mobileMenu.classList.add('hidden');
	}
  });

  window.addEventListener('resize', function() {
	var navMenu = document.getElementById('nav-menu');
	var mobileMenu = document.getElementById('mobile-menu');
	var checkbox = document.getElementById('menu-toggle');

	if (window.innerWidth >= 768) {
	  checkbox.checked = false;
	  navMenu.classList.remove('hidden');
	  mobileMenu.classList.add('hidden');
	} else {
	  navMenu.classList.add('hidden');
	}
  });