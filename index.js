
  window.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });

// Inject CoinMarketCap Marquee Widget
window.addEventListener('DOMContentLoaded', () => {
  const widget = document.getElementById('coinmarketcap-widget-marquee');

  


