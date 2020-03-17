
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import '../styles/styles.css'
import 'lazysizes'

// new Modal();
new MobileMenu();
new StickyHeader;
let modal;

new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testemonial'), 60);




if (module.hot) {
    module.hot.accept()
}

document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        if (typeof modal === 'undefined') {
            import('./modules/Modal').then(x => {
                modal = new x.default()
                setTimeout(() => modal.openTheModal(), 20)
            }).catch(() => console.log('There was a problem'))
        } else {
            modal.openTheModal()
        }
    })
})


