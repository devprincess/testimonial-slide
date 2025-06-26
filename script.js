const sliderImage = document.querySelector('.el-image');
const sliderContainer = document.querySelector('.el-text');

let index = 0;

const containerArray = [
  {
    src: 'images/new-img.JPG',
    text: 'My name is Ruth Solomon, I would love to say thank you for going through my testimonial built with Tailwind CSS and javaScript',
    userName: 'Princess R',
  },
  {
    src: 'images/image1.jpg',
    text: 'Hi! im Rapunzel a fictional character in Disney. This story is about a girl with beautiful long golden hair who was locked up in a tower by an evil witch.',
    userName: 'Rapunzel R',
  },
  {
    src: 'images/image2.jpg',
    text: 'A Coder girl is perfect for every geek or nerd girl. As a software developer, coder who loves programming languages. ',
    userName: 'Coder girl C',
  },
  {
    src: 'images/image3.jpg',
    text: 'Balloons vibrant colours and buoyant nature embody the spirit of joy and merriment. Moreover, balloons serve as visual markers of special moments.',
    userName: 'Ballons B',
  },
];

function changeTestimonial() {
  // Fade out
  sliderImage.style.opacity = 0;
  sliderContainer.style.opacity = 0;

  setTimeout(() => {
    const item = containerArray[index];
    sliderImage.src = item.src;
    sliderContainer.querySelector('h6').innerText = item.text;
    sliderContainer.querySelector('p').innerText = item.userName;

    // Fade in
    sliderImage.style.opacity = 1;
    sliderContainer.style.opacity = 1;

    // Go to next testimonial
    index = (index + 1) % containerArray.length;
  }, 600); // transition duration
}

// Show the first testimonial immediately
changeTestimonial();

// Start rotating every 4 seconds
setInterval(changeTestimonial, 5000);