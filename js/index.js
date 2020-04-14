
document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  const copyright = document.getElementById('copyright');
  copyright.innerHTML = `Copyright ${currentYear}, by Ryan Waller`;
});
