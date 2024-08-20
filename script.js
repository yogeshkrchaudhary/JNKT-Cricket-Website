//toggle icon 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// swiper section

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  // stickey header
  let header = document.querySelector('.header');

  header.classList.toggle('sticky', window.scrollY > 100);

  //toggle icon remove when scroll
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};

// dark light mode 
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};

// Gallary

document.addEventListener("DOMContentLoaded", function() {
  var userFeed = new Instafeed({
      get: 'user',
      target: "instafeed-container", 
      resolution: 'standard_resolution', 
      accessToken: 'IGQWROMTBIbGVmQ0FHbzVfa0NySjdwMklCa2lVSzhqN1dXYmF1Wllqb0tHRFhJZAU9haElJdGdrMndDSjBoOWpqdVhkTUJKTFh4U0F2NXRGM2VUdEJwVHpmUERBaGFJY3dOLXIwaXZAjNERqcm9UU25qY0trWWctZA28ZD', 
      limit: null, // No limit to the number of images/videos displayed
      after: function() {
        // Add target="_blank" to all generated anchor tags
        const links = document.querySelectorAll('#instafeed-container a');
        links.forEach(function(link) {
            link.setAttribute('target', '_blank');
        });
    }
});


  userFeed.run();

  // Ensures the grid is always shown, even if no images are loaded
  var instafeedContainer = document.getElementById('instafeed-container');
  if (!instafeedContainer.hasChildNodes()) {
      instafeedContainer.innerHTML = '<p>No Instagram posts available.</p>';
  }
});

// Contact Us

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Get form data
      const fullName = document.querySelector('input[placeholder="Full Name"]').value;
      const email = document.querySelector('input[placeholder="Email"]').value;
      const mobileNumber = document.querySelector('input[placeholder="Mobile Number"]').value;
      const subject = document.querySelector('input[placeholder="Subject"]').value;
      const message = document.querySelector('textarea[placeholder="Your Message"]').value;

      // Send email
      Email.send({
          Host: "smtp.elasticemail.com",
          Username: "yogeshkrchaudhary@outlook.com",
          Password: "D2C33151FFB139CCB6A5ED7DF0A76E80A73C",
          To: "yogeshkrchaudhary@outlook.com",
          From: "yogeshkrchaudhary@outlook.com", // Use the email address provided by the user
          Subject: subject,
          Body: `Name: ${fullName}<br>Email: ${email}<br>Mobile Number: ${mobileNumber}<br>Message: ${message}`
      }).then(
          message => alert("Message Sent Successfully")
      ).catch(
          error => alert("Failed to send message. Please try again.")
      );
  });
});