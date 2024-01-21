let mode = "black"
const colorPalette = document.querySelectorAll('.color-palettes div')
const container = document.querySelector('.container')
const images = document.querySelectorAll('.images-circle img')
const cta = document.querySelector('.cta')
const imagesCircle = document.querySelector('.images-circle')

const translateEl = {
   black: "-50% 0",
   purple: "0 50%",
   gold: "50% 0",
   silver: "0 -50%",
}

colorPalette.forEach((e) => {
   e.addEventListener('click', (el) => {
      const color = el.target.dataset.color
      const order = Number(el.target.dataset.order)

      container.classList.remove(`${mode}-bg`)
      cta.classList.remove(`${mode}-cta`)

      container.classList.add(`${color}-bg`)
      cta.classList.add(`${color}-cta`)

      mode = color

      imagesCircle.style.rotate = (90 * order)+"deg"
      if (color == "silver" || color == "gold") colorPalette.forEach((el) => el.style.borderColor = "black") 
      else colorPalette.forEach((el) => el.style.borderColor = "white")
      
      images.forEach((e) => {
         e.style.scale = "1"
         e.style.translate = "0"
         if(e.dataset.color == color) {
            e.style.scale = "2.4"
            e.style.translate = translateEl[color]
         }
         e.style.rotate = -(90 * order)+"deg"
      })
   })
})


// switch (order) {
      //    case "first":
      //       imagesCircle.classList.add('first-stage')
      //       imagesCircle.classList.remove('second-stage')
      //       imagesCircle.classList.remove('third-stage')
      //       imagesCircle.classList.remove('forth-stage')
      //       break;

      //    case "second":
      //       imagesCircle.classList.remove('first-stage')
      //       imagesCircle.classList.add('second-stage')
      //       imagesCircle.classList.remove('third-stage')
      //       imagesCircle.classList.remove('forth-stage')   
      //       break;

      //    case "third":
      //       imagesCircle.classList.remove('first-stage')
      //       imagesCircle.classList.remove('second-stage')
      //       imagesCircle.classList.add('third-stage')
      //       imagesCircle.classList.remove('forth-stage')   
      //       break;

      //    case "forth":
      //       imagesCircle.classList.remove('first-stage')
      //       imagesCircle.classList.remove('second-stage')
      //       imagesCircle.classList.remove('third-stage')
      //       imagesCircle.classList.add('forth-stage')   
      //       break;

      //    default:
      //       break;
      // }

      // for (let i = 0; i < images.length; i++) {
      //       if (images[i].classList[0] == order) {
      //          // console.log(images[i].classList[0]);
      //          // console.log(images[i].dataset.order);
      //          images[i].classList.remove(images[i].classList[0])
      //          images[i].classList.add('first')
      //       }
      // }

      // images.forEach((img) => {
      //    if (img.classList[0] == order) {
      //       console.log(img.classList[0]);
      //       console.log(img.dataset.order);
      //       img.classList.remove(img.classList[0])
      //       img.classList.add('first')
      //    }
      // })

