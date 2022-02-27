//--------------------------Start  HealthKart Blog data -----------------------------//
var hbdata = [
  {
    name: "Bodybuilding Diet ",
    image:
      "https://www.healthkart.com/connect/wp-content/uploads/2021/05/Thumbnail-1-1.png",
    time: "10 MIN READ",
    date: "Jan 13, 2022",
    topic: "The Best Low Budget Diet Plan For Bodybuilding",
    data: "One of the first things that you must do while trying to build muscle is to eat a healthy Indian bodybuilding diet. It is important to ensure that the nutritional profile of your Indian bodybuilding diet comprises lean protein",
  },

  {
    name: "Vitamins and Minerals",
    image:
      "https://www.healthkart.com/connect/wp-content/uploads/2021/05/Thumbnail-1.jpg",
    time: "2 MIN READ",
    date: "Jan 1, 2022",
    topic: "How Crucial Are Multivitamins For Us?",
    data: "Getting proper nutritional intake that consists of several essential vitamins and minerals is crucial in promoting our health and development. While consuming whole foods is an excellent way to ensure that our body gets its",
  },

  {
    name: "Zen Mode",
    image:
      "https://www.healthkart.com/connect/wp-content/uploads/2022/01/thumbnails-30.jpg",
    time: "7 MIN READ",
    date: "Jan 5, 2022",
    topic: "Facts About c You Should Know",
    data: "DHEA (Dehydroepiandrosterone), is one of the circulating steroids in the human body and is found in abundance. DHEA hormone is produced in the",
  },

  {
    name: "Vitamins and Minerals",
    image:
      "https://www.healthkart.com/connect/wp-content/uploads/2022/01/thumbnails-29.jpg",
    time: "5 MIN READ",
    date: "Jan 11, 2022",
    topic: "Choosing the Best Multivitamin for PCOS",
    data: "Did you know that vitamins play a vital role in helping women with PCOS? In fact, Vitamin D has a significant role to play in PCOS management",
  },
];

hbdata.map(function (elem) {
  var maindivhb = document.createElement("div");
  maindivhb.setAttribute("id", "maindivhb");

  var img = document.createElement("img");
  img.setAttribute("src", elem.image);
  var imgdivhb = document.createElement("div");
  imgdivhb.setAttribute("id", "imgdivhb");
  imgdivhb.append(img);

  var datadivhb = document.createElement("div");
  datadivhb.setAttribute("id", "datadivhb");

  var h4 = document.createElement("h4");
  h4.setAttribute("id", "h4");
  h4.textContent = elem.name;

  var spn = document.createElement("div");
  spn.setAttribute("id", "spn");
  var time = document.createElement("li");
  time.textContent = elem.time;
  var date = document.createElement("li");
  date.textContent = elem.date;

  spn.append(time, date);

  var topic = document.createElement("h3");
  topic.textContent = elem.topic;

  var data = document.createElement("p");
  data.textContent = elem.data;

  datadivhb.append(h4, spn, topic, data);

  maindivhb.append(imgdivhb, datadivhb);
  document.getElementById("hb").append(maindivhb);
});

//--------------------------End   HealthKart Blog data -----------------------------//

//--------------------------Start EDITOR'S PICK data -----------------------------//
var epdata = [
  {
    name: "Diet & Nutrition",
    image:
      "https://www.healthkart.com/connect/wp-content/uploads/2022/01/300x200_thumbnail_HK-Connect_Milk-Thistle-for-immunity.jpg",
    time: "2 MIN READ",
    date: "Jan 9, 2022",
    topic: "How Milk Thistle Benefits Your Immunity and Overall Health",
  },

  {
    name: "Diet & Nutrition",
    image:
      "https://www.healthkart.com/connect/wp-content/uploads/2022/01/thumbnails-15.jpg",
    time: "3 MIN READ",
    date: "Jan 9, 2022",
    topic: "Best Food for Asthma Patients That Should be a Part of Their Diet",
  },

  {
    name: "Diet & Nutrition",
    image:
      "https://www.healthkart.com/connect/wp-content/uploads/2022/01/300x200_thumbnail_HK-Connect_Bananas-for-kids.jpg",
    time: "2 MIN READ",
    date: "Jan 9, 2022",
    topic: "Essential Banana Benefits for Kids",
  },

  {
    name: "Diet & Nutrition",
    image:
      "https://www.healthkart.com/connect/wp-content/uploads/2022/01/thumbnails-18.jpg",
    time: "4 MIN READ",
    date: "Jan 8, 2022",
    topic: "How CoQ10 Benefits Your Heart and Overall Health",
  },

  {
    name: "Diet & Nutrition",
    image:
      "https://www.healthkart.com/connect/wp-content/uploads/2022/01/thumbnails-17.jpg",
    time: "2 MIN READ",
    date: "Jan 10, 2022",
    topic: "Essential Coconut Water Benefits You Should Know",
  },

  {
    name: "Diet & Nutrition",
    image:
      "https://www.healthkart.com/connect/wp-content/uploads/2022/01/thumbnails-14.jpg",
    time: "3 MIN READ",
    date: "Jan 12, 2022",
    topic: "Easy Soybean Recipes - Eating Better, Not Less",
  },
];

epdata.map(function (elem) {
  var maindivep = document.createElement("div");
  maindivep.setAttribute("id", "maindivep");

  var img = document.createElement("img");
  img.setAttribute("src", elem.image);
  var imgdivep = document.createElement("div");
  imgdivep.setAttribute("id", "imgdivep");
  imgdivep.append(img);

  var datadivep = document.createElement("div");
  datadivep.setAttribute("id", "datadivep");

  var h4 = document.createElement("h4");
  h4.setAttribute("id", "h4");
  h4.textContent = elem.name;

  var spn = document.createElement("div");
  spn.setAttribute("id", "spn");
  var time = document.createElement("li");
  time.textContent = elem.time;
  var date = document.createElement("li");
  date.textContent = elem.date;

  spn.append(time, date);

  var topic = document.createElement("h3");
  topic.textContent = elem.topic;

  datadivep.append(h4, spn, topic);

  maindivep.append(imgdivep, datadivep);
  document.getElementById("ep").append(maindivep);
});

//--------------------------End EDITOR'S PICK data -----------------------------//

//--------------------------Start EXPLORE ARTICLES data -----------------------------//
var eadata = [
  {
    name: "Pre & Post Workout Nutrition ",
    image:
      "https://www.healthkart.com/connect/wp-content/uploads/2021/11/300x200_thumbnail_HK-Connect_Coconut-Water-Benefits_-The-Better-Pre-Workout-Drink_.jpg",
    time: "2 MIN READ",
    date: "Jan 15, 2022",
    topic: "Coconut Water Benefits: The Better Pre-Workout Drink?",
    data: "Pre-workout supplements are products that people consume a couple of hours before exercise to provide energy. Often referred to as ‘pre-workouts",
  },
  {
    name: "Bodybuilding ",
    image:
      "https://www.healthkart.com/connect/wp-content/uploads/2021/11/thumbnails-21.jpg",
    time: "6 MIN READ",
    date: "Jan 19, 2022",
    topic: "Healthy Diwali: Stay True To Your Workout Routine",
    data: "How To Stay True to Workout Routine this Festive Season Conclusion Diwali, a festival of lights, is upon us. The preparations for the Diwali...",
  },
  {
    name: "Bodybuilding ",
    image:
      "https://www.healthkart.com/connect/wp-content/uploads/2021/10/300x200_thumbnail_HK-Connect_Easy-Mass-Gainer-Shake-Recipe_.jpg",
    time: "3 MIN READ",
    date: "Jan 1, 2022",
    topic: "Easy Weight Gain Shake At Home Recipes",
    data: "Benefits of Weight Gain Shake How to Make the Best Homemade Weight Gain Shakes Weight Gain Shake Recipes Conclusion Weight gain shake is calorie-dense",
  },

  {
    name: "Bodybuilding ",
    image:
      "https://www.healthkart.com/connect/wp-content/uploads/2021/09/300x200_thumbnail_HK-Connect_Top-5-Raw-Whey-Protein-Brands-Available-in-The-Indian-Market.jpg",
    time: "5 MIN READ",
    date: "Jan 9, 2022",
    topic: "Top 5 Indian Raw Whey Protein Brands",
    data: "When we consider the number of Indian whey protein brands, finding a whey protein is a difficult task. With every whey protein supplement claiming",
  },

  {
    name: "Bodybuilding ",
    image:
      "https://www.healthkart.com/connect/wp-content/uploads/2021/12/300x200_thumbnail_HK-Connect_Vegetable-juices-for-weight-loss.jpg",
    time: "8 MIN READ",
    date: "Jan 17, 2022",
    topic: "4 Vegetable Juices For Weight Loss You Must Try",
    data: "Juices are a great way to gulp down a bunch of nutrients without increasing your weight. A lot of juices go one step further and help to support",
  },

  {
    name: "Bodybuilding ",
    image:
      "https://www.healthkart.com/connect/wp-content/uploads/2021/10/thumbnails-19.jpg",
    time: "4 MIN READ",
    date: "Jan 11, 2022",
    topic: "Halloween: Scary Things That May Happen During Workout",
    data: "Scary Things While Training  Conclusion Halloween is around the corner.  A doorway to festivity opens up as the weather starts cooling",
  },
];

eadata.map(function (elem) {
  var maindivea = document.createElement("div");
  maindivea.setAttribute("id", "maindivea");

  var img = document.createElement("img");
  img.setAttribute("src", elem.image);
  var imgdivea = document.createElement("div");
  imgdivea.setAttribute("id", "imgdivea");
  imgdivea.append(img);

  var datadivea = document.createElement("div");
  datadivea.setAttribute("id", "datadivea");

  var h4 = document.createElement("h4");
  h4.setAttribute("id", "h4");
  h4.textContent = elem.name;

  var spn = document.createElement("div");
  spn.setAttribute("id", "spn");
  var time = document.createElement("li");
  time.textContent = elem.time;
  var date = document.createElement("li");
  date.textContent = elem.date;

  spn.append(time, date);

  var topic = document.createElement("h3");
  topic.textContent = elem.topic;

  var data = document.createElement("p");
  data.textContent = elem.data;

  datadivea.append(h4, spn, topic, data);

  maindivea.append(imgdivea, datadivea);
  document.getElementById("ea").append(maindivea);
});

//--------------------------End EXPLORE ARTICLES data -----------------------------//
