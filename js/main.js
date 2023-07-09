window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}


//filter
const filterRadios = document.querySelectorAll('input[name="filter"]');
const items = document.querySelectorAll(".post");

// Add event listeners to filter radios
for (const filterRadio of filterRadios) {
	filterRadio.addEventListener("change", handleFilterChange);
}

function handleFilterChange() {
	const selectedFilter = document.querySelector('input[name="filter"]:checked').value;

  // Filter the items
	for (const item of items) {
    const category = item.getAttribute("data-category");

		if (selectedFilter === "all" || category === selectedFilter) {
			item.classList.remove("hidden");
		} else {
			item.classList.add("hidden");
		}
	}
}

// slider 
// Get the image slide elements and the bin elements
const imgSlides = document.querySelectorAll('.img-slide');
const bins = document.querySelectorAll('.bin');

// Set the initial active slide index and interval time
let activeSlideIndex = 0;
const intervalTime = 5000; // 5 seconds

// Function to change the active slide
const changeSlide = (newIndex) => {
	// Remove the active class from the current slide and bin
	imgSlides[activeSlideIndex].classList.remove('active');
	bins[activeSlideIndex].classList.remove('active');

	// Update the active slide index
	activeSlideIndex = newIndex;

	// Reset the active slide index if it exceeds the number of slides
	if (activeSlideIndex === imgSlides.length) {
		activeSlideIndex = 0;
	} else if (activeSlideIndex < 0) {
		activeSlideIndex = imgSlides.length - 1;
	}

	// Add the active class to the new slide and bin
	imgSlides[activeSlideIndex].classList.add('active');
	bins[activeSlideIndex].classList.add('active');
};

// Function to start the slide show
const startSlideShow = () => {
	// Change the slide initially
	changeSlide(activeSlideIndex);

	// Set an interval to change the slide automatically
	setInterval(() => {
		changeSlide(activeSlideIndex + 1);
	}, intervalTime);
};

// Function to handle manual slide changes
const handleManualSlideChange = (newIndex) => {
	// Change the slide manually
	changeSlide(newIndex);
};

// Add click event listeners to the bin elements
bins.forEach((bin, index) => {
	bin.addEventListener('click', () => {
		handleManualSlideChange(index);
	});
});

// Call the startSlideShow function to begin the slide show
startSlideShow();
