
const c_heading = document.querySelectorAll('.c_heading');

c_heading.forEach(c_heading => {
  c_heading.addEventListener('click' , event => {
    c_heading.classList.toggle('active');
    const c_body = c_heading.nextElementSibling;
    if(c_heading.classList.contains('active')){
      c_body.style.maxHeight = c_body.scrollHeight + 'px';
    }
    else {
      c_body.style.maxHeight = 0;
    }
  });
});
