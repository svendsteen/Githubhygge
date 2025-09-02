const socialLinks = document.querySelectorAll("footer__section footer__section--socials a[target='_blank']");
socialLinks.forEach(link => {
  link.addEventListener("click", () => {
    console.log("Bruger klikkede på:", link.href);
  });
});