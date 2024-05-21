let input = document.querySelector(".get-repos input");
    let getbutton = document.querySelector(".get-button");
    let repodata = document.querySelector(".show-data");
    let alertBox=document.querySelector(".alert");

    getbutton.onclick = getrepo;

    function getrepo() {
      if (input.value === "") {
        alertBox.style.display = "block";
      } else {
        alertBox.style.display = "none";
        fetch(`https://api.github.com/users/${input.value}/repos`)
          .then((res) => res.json())
          .then((repos) => {
            repodata.innerHTML = "";

            repos.forEach(repo => {
              let mdiv = document.createElement("div");
              mdiv.className = 'repo-box';
              mdiv.style.cssText = `
                padding: 15px;
                border: 1px solid #ccc;
                border-radius: 8px;
                background-color: #f9f9f9;
                display: flex;
                flex-direction: column;
                align-items: start;
              `;

              let rname = document.createElement("strong");
              let rnametext = document.createTextNode(repo.name);
              rname.appendChild(rnametext);
              rname.style.cssText = `
                font-size: 16px;
                font-weight: bold;
              `;
              mdiv.appendChild(rname);

              let url = document.createElement("a");
              let urltext = document.createTextNode("Repo");
              url.appendChild(urltext);
              url.href = `https://github.com/${input.value}/${repo.name}`;
              url.setAttribute("target", '_blank');
              url.style.cssText = `
                margin-top: 10px;
                text-decoration: none;
                color: #0073e6;
              `;
              mdiv.appendChild(url);

              let starspan = document.createElement("span");
              starspan.style.cssText = `
                margin-top: 10px;
                font-size: 14px;
                color: #555;
              `;

              let starIcon = document.createElement("i");
              starIcon.classList.add("fas", "fa-star");
              starIcon.style.cssText = `
                color: gold;
                margin-right: 5px;
              `;
              starspan.appendChild(starIcon);

              let startext = document.createTextNode(` ${repo.stargazers_count}`);
              starspan.appendChild(startext);
              mdiv.appendChild(starspan);

              repodata.appendChild(mdiv);
            });
          });
      }
    }
