
const bg_image = ['backgroundVideo.m4v','backgroundVideo2.m4v','backgroundVideo3.mp4','backgroundVideo4.mp4'];

// video1 - https://www.pexels.com/video/woman-typing-on-a-keyboard-while-wearing-a-vr-headset-8721932/
// video2 - https://www.pexels.com/video/woman-sitting-in-front-of-computers-8721654/
// video3 - https://www.pexels.com/video/a-person-working-hard-on-a-computer-laptop-5495781/
// video4 - https://www.pexels.com/video/woman-with-futuristic-technology-on-her-artificial-arm-6153734/

document.getElementById('fullPath1').src = bg_image[Math.floor(Math.random() * 4)];  

