 var header = document.querySelector('header');
    var section = document.querySelector('section');
    var requestURL = 'https://raw.githubusercontent.com/AMARK-BRO/WINE/master/JSON.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      var superHeroes = request.response;
      populateHeader(superHeroes);
      showHeroes(superHeroes);
    }
    function populateHeader(jsonObj) {
      var myH1 = document.createElement('h1');
      myH1.textContent = jsonObj['squadName'];
      header.appendChild(myH1);
      var myPara = document.createElement('p');
      myPara.textContent = '品评人: ' + jsonObj['homeTown'] + ' ※※ 品评年份: ' + jsonObj['formed'];
      header.appendChild(myPara);
    }
    function showHeroes(jsonObj) {
      var heroes = jsonObj['members'];
      for(var i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myList = document.createElement('ul');
        myH2.textContent = heroes[i].name;
        myPara1.textContent = '口感: ' + heroes[i].secretIdentity;
        myPara2.textContent = '价钱: ' + heroes[i].age;
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
      }
    }