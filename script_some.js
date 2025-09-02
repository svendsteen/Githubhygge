const socialLinks = document.querySelectorAll("footer__section footersection__socials");
socialLinks.forEach(link => {
  link.addEventListener("click", () => {
    console.log("Bruger klikkede på:", link.href);
  });
});