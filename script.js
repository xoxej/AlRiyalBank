
document.addEventListener("DOMContentLoaded", function () {
    const members = ["عبدالله مشرف الشهري", "خالد يحيى", "حسام علي الفاخري", "بدر محمد القحطاني", "محمد سليمان الصليهمي"];
    const shuffled = members.sort(() => 0.5 - Math.random());
    const list = document.getElementById("members-list");
    shuffled.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        list.appendChild(li);
    });
});
