function append() {
  const names = ["Bijen", "Mohan", "Sangram"];

names.forEach(element => {
    const node = document.createElement("li");
    const textnode = document.createTextNode(element);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
});
}
