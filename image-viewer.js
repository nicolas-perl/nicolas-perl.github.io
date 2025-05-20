
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.getElementById('closeModal');
  // Make all images in .work-image-container clickable
  document.querySelectorAll('.work-image-container img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      modal.style.display = 'block';
      modalImg.src = this.src;
      modalImg.alt = this.alt;
    });
  });
  closeBtn.onclick = function() { modal.style.display = 'none'; }
  modal.onclick = function(e) {
    if (e.target === modal) modal.style.display = 'none';
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') modal.style.display = 'none';
  });
});