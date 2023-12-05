const teamMembers = [
  {
    name: "Qudus Shittu",
    position: "President",
    image: "./images/team/Qudus_Shittu.JPG",
    email: "qudus@mit.edu",
    linkedin: "https://www.linkedin.com/in/qudus-shittu/",
    bgSize: "140%",
    bgPosition: "50% 45%",
  },
  {
    name: "Santiago Vazquez",
    position: "StartHouse Co-Director",
    image: "./images/team/Santiago_Vazquez.JPG",
    email: "svazquez@mit.edu",
    linkedin: "https://www.linkedin.com/in/santiago-enrique-vazquez-237a021a8",
    bgSize: "100%",
    bgPosition: "50% 40%",
  },
  {
    name: "Jose (Ricardo) Ramos",
    position: "StartHouse Co-Director",
    image: "./images/team/Ricardo_Ramos.png",
    email: "jricramc@mit.edu",
    linkedin: "https://www.linkedin.com/in/josericardoramos22",
    bgSize: "225%",
    bgPosition: "85% 44%",
  },
  {
    name: "Saniya Karwa",
    position: "Startup Interface Co-Director",
    image: "./images/team/Saniya_Karwa.jpg",
    email: "saniya@mit.edu",
    linkedin: "https://www.linkedin.com/in/saniyakarwa/",
    bgSize: "100%",
    bgPosition: "50% 50%",
  },
  {
    name: "Harpuneet (Harp) Singh",
    position: "Startup Interface Co-Director",
    image: "./images/team/Harpuneet_Singh.jpg",
    email: "harpsin@mit.edu",
    linkedin: "https://www.linkedin.com/in/harp-singh128/",
    bgSize: "200%",
    bgPosition: "57.5% 50%",
  },
  {
    name: "Akarsh Aurora",
    position: "Speaker Series Director",
    image: "./images/team/Akarsh_Aurora.png",
    email: "aaurora@mit.edu",
    linkedin: "https://www.linkedin.com/in/akarsh-aurora-759a581ab/",
    bgSize: "135%",
    bgPosition: "55% 22%",
  },
  {
    name: "Vittal Thirumalai",
    position: "Technology Director",
    image: "./images/team/Vittal_Thirumalai.jpeg",
    email: "vittalt@mit.edu",
    linkedin: "https://www.linkedin.com/in/vittal-thirumalai/",
    bgSize: "225%",
    bgPosition: "52% 13%",
  },
  {
    name: "Nikolaos (Niko) Tsakiris",
    position: "Community Co-Director",
    image: "./images/team/Nikolaos_Tsakiris.png",
    email: "tsak27@mit.edu",
    linkedin: "https://www.linkedin.com/in/nikolaos-tsakiris/",
    bgSize: "100%",
    bgPosition: "50% 0%",
  },
  {
    name: "Hara Moraitaki",
    position: "Community Co-Director",
    image: "./images/team/Hara_Moraitaki.JPG",
    email: "hmor@mit.edu",
    linkedin: "https://www.linkedin.com/in/charikleiamoraitaki/",
    bgSize: "80%",
    bgPosition: "40% 50%",
  },
  {
    name: "Rayna Arora",
    position: "Social Media Chair",
    image: "./images/team/Rayna_Arora.jpeg",
    email: "raynaaro@mit.edu",
    linkedin: "https://www.linkedin.com/in/rayna-arora-4a2307214/",
    bgSize: "100%",
    bgPosition: "50% 50%",
  },
];

document.addEventListener("DOMContentLoaded", async function () {
  const teamContainer = document.querySelector(".team-container");
  const memberTemplateResponse = await fetch("member.html");
  const memberTemplate = await memberTemplateResponse.text();

  teamMembers.forEach((member) => {
    let memberHTML = memberTemplate
      .replace(/{{image}}/g, member.image)
      .replace(/{{name}}/g, member.name)
      .replace(/{{position}}/g, member.position)
      .replace(/{{email}}/g, member.email)
      .replace(/{{linkedin}}/g, member.linkedin)
      .replace(/{{bgSize}}/g, member.bgSize)
      .replace(/{{bgPosition}}/g, member.bgPosition);

    const memberDiv = document.createElement("div");
    memberDiv.classList.add("col-lg-4", "col-md-6", "mb-4", "text-center");
    memberDiv.innerHTML = memberHTML;

    const memberImageDiv = memberDiv.querySelector(".member-image");
    memberImageDiv.style.backgroundImage = `url('${memberImageDiv.dataset.bgImage}')`;
    memberImageDiv.style.backgroundSize = memberImageDiv.dataset.bgSize;
    memberImageDiv.style.backgroundPosition = memberImageDiv.dataset.bgPosition;

    teamContainer.appendChild(memberDiv);
  });
});
