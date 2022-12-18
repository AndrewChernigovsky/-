import menuBurger from './components/burger-menu'
import swiperMain from './components/sliders/sliderMain'
;(($) => {
  $(() => {
    menuBurger.init()
	  swiperMain.init()
	  let i = 445;
  })
})(jQuery)
