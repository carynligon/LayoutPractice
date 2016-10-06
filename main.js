console.dir(document.getElementById('container'));

document.addEventListener('scroll', function(e) {
  if (e.target.scrollingElement.scrollTop > 100) {
    console.log('scrolled!');
    document.getElementById('container').textContent = 'hi';
  }
});
