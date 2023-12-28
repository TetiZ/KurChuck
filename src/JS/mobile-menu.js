import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

iziToast.show({
  image:
    "https://imagespulse.com/wp-content/uploads/2022/11/We-Wish-You-a-Merry-Christmas-Images.jpg",
  imageWidth: 150,
  position: "center",
  title: `Merry X-mas!`,
  message: `Z myślą o dobro waszego biznesu`,
  layout: 2,
});

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    closeMenuLink: document.querySelectorAll(".footer-nav-link"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.closeMenuLink.forEach((item) =>
    item.addEventListener("click", toggleModal)
  );

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
