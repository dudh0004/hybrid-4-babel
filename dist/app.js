"use strict";

function getData(ev) {
  let url = "https://randomfox.ca/floof/";
  fetch(url).then(function (response) {
    if (response.ok) {
      console.log('good response');
      return response.json();
    } else {
      console.log('bad response', response.status);
      throw new Error('BAD RESPONSE');
    }
  }).then(function (data) {
    console.log(data);
    setData(data);
  }).catch(function (err) {
    console.log(err);
  });
}

function setData(_ref) {
  let {
    image,
    link
  } = _ref;
  console.log(image);
  console.log(link);
  let div = document.getElementById('lorem');
  let img = document.createElement('img');
  img.src = image;
  img.alt = link;
  div.appendChild(img);
  setData2();
}

async function setData2() {
  let b = await asyncData(3, 4);
  console.log(b);
}

function asyncData(x, y) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * y);
    }, 1000);
  });
}

getData();