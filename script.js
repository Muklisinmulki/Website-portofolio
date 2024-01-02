document.addEventListener('DOMContentLoaded', function () {
  const animatedImg = document.getElementById('animated-img');

  function checkIfInView() {
    const rect = animatedImg.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Jika elemen hampir muncul dalam viewport, tambahkan kelas 'show'
    if (rect.top <= windowHeight * 0.9) {
      animatedImg.classList.add('show');
      // Setelah elemen ditampilkan, hapus event listener agar tidak diproses lagi
      window.removeEventListener('scroll', checkIfInView);
    }
  }

  // Tambahkan event listener untuk mengecek apakah elemen dalam viewport saat digulir
  window.addEventListener('scroll', checkIfInView);
});

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  const navLinks = header.querySelectorAll('.navbar a');

  function setActiveLink() {
    const currentHash = window.location.hash;
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentHash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  setActiveLink();

  window.addEventListener('hashchange', setActiveLink);
});


const specializations = ['Full Stack Developer', 'IoT Engineering' ,'Cloud Specialist'];
let wordIndex = 0;
let charIndex = 0;
const specializationElement = document.getElementById('specialization');

function typeText() {
  if (wordIndex < specializations.length) {
    if (charIndex <= specializations[wordIndex].length) {
      specializationElement.textContent = specializations[wordIndex].substring(0, charIndex);
      charIndex++;
      setTimeout(typeText, 150); // Ganti dengan kecepatan mengetik (dalam milidetik)
    } else {
      setTimeout(() => {
        wordIndex = (wordIndex + 1) % specializations.length;
        charIndex = 0;
        typeText();
      }, 1000); // Ganti dengan delay antar kata (dalam milidetik)
    }
  }
}

// Memanggil fungsi typeText untuk memulai efek animasi
typeText();