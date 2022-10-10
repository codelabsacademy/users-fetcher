const fetchUsers = async () => {
  try {
    data.forEach((user) => {
      let div = document.createElement("div");
      div.className = "user";
      div.innerHTML = `
    <img src="${user.avatar}" alt="" />
    <div>
        <span class="name">${user.first_name} ${user.last_name}</span>
        <span class="email">george.bluth@reqres.in</span>
    </div>
    `;
      document.getElementById("users-list").appendChild(div);
    });
  } catch (error) {
    console.log(error);
  }
};
