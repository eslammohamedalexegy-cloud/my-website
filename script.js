// لما الصفحة تفتح، نضيف تأثير بسيط
document.addEventListener("DOMContentLoaded", function() {
    // نخلي كل الأقسام تظهر واحدة واحدة
    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "all 0.8s ease";

        setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, 400 * index); // التأخير بين كل قسم والتاني
    });

    // رسالة ترحيب في الكونسول (للمطور 😎)
    console.log("👋 Welcome to Islam's Portfolio!");
});
