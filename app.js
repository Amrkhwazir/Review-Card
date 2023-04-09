let profileImg = document.querySelector(".profileImg")
let profileDetail = document.querySelector(".profileDetail")
let jobTitle = document.querySelector(".jobTitle")
let jobDiscrp = document.querySelector(".jobDiscrp")
let nextBtn = document.querySelector(".nextBtn")
let prevBtn = document.querySelector(".prevBtn")
let randomBtn = document.querySelector(".randomBtn")

const reviews = [
    {
      id: 1,
      name: "Ram",
      job: "Web Developer",
      img:
        "./Assets/profile pic6.jpg",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et.Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
    },
    {
      id: 2,
      name: "anees",
      job: "web designer",
      img:
        "./Assets/profile pic5.jpg",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et.Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae,"
    },
    {
      id: 3,
      name: "james",
      job: "intern",
      img:
        "./Assets/profile pic7.jpg",
      text:
        "SLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
    },
    {
      id: 4,
      name: "san",
      job: "the boss",
      img:
        "./Assets/profile pic3.jpg",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate"
    }
  ];
  console.log(reviews[0].text.length)
  
  // set starting item
  
  let currentItem = 0;

// show person based on item

function showPerson(item){
  profileImg.src = reviews[item].img;
  profileDetail.textContent = reviews[item].name
  jobTitle.textContent = reviews[item].job
  jobDiscrp.textContent = reviews[item].text

};

// show next person

nextBtn.addEventListener('click', () => {
  currentItem++;

  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson(currentItem);
});


// show prev person

prevBtn.addEventListener('click', () => {

  currentItem--;

  if(currentItem < 0){
    currentItem = reviews.length -1;

  }
  showPerson(currentItem);
});

// Random button

randomBtn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * reviews.length - 1)
  showPerson( currentItem)
})