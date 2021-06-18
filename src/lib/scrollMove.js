export const scrollMove = (idx) => {
  const windowCall = window;

  if (idx === 'next') {
    idx = windowCall.scrollY / windowCall.innerHeight + 1;
    if (idx > 4)
      idx = 0;
  }

  windowCall.scrollTo({
    top: windowCall.innerHeight * idx,
    behavior: 'smooth'
  })
}

//스크롤 찍어볼 수 있었던 로직! 공부하기
  // let prevScrollY = useRef(0)
  // const handleScroll = (idx) => {
  //   const currentScrollY = window.scrollY;
  //   prevScrollY = currentScrollY;
  //   console.log(currentScrollY);
  //   // console.log(idx);
  //   console.log(window);
  //   // window.scrollTo(0, window.innerHeight * idx);
  // }

    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
