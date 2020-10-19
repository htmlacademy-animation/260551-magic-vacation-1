// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import rules from './modules/rules.js';
import onload from './modules/onload.js';
import FullPageScroll from './modules/full-page-scroll';
import PageBackground from './modules/page-background';
import AccentTypographyBuild from './modules/accent-typography-build';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
rules();
onload();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const pageBackground = new PageBackground();
pageBackground.init();

const animationIntroWord1 = new AccentTypographyBuild(
    `.intro__word1`,
    850, // 22 units
    `transform`,
    250, // 0
    `active`
);

animationIntroWord1.runAnimation();

const animationIntroWord2 = new AccentTypographyBuild(
    `.intro__word2`,
    400, // 18
    `transform`,
    450, // 9
    `active`
);

animationIntroWord2.runAnimation();

const animationIntroDate = new AccentTypographyBuild(
    `.intro__date`,
    375, // 17
    `transform`,
    950, // 32
    `active`
);

animationIntroDate.runAnimation();
