window.onload = function() {
    const navLogo = document.getElementById('logo');

    let isVisible = false;

    navLogo.onclick = function() {
        const homeEle = document.getElementById('nav-item-home');
        const postsEle = document.getElementById('nav-item-posts');
        const acctEle = document.getElementById('nav-item-account');

        if (isVisible) {
            homeEle.className = 'link-icon-container hidden-container';
            postsEle.className = 'link-icon-container hidden-container';
            acctEle.className = 'link-icon-container hidden-container';
        } else {
            homeEle.className = 'link-icon-container show-container';
            postsEle.className = 'link-icon-container show-container';
            acctEle.className = 'link-icon-container show-container';
        }

        isVisible = !isVisible;
    };
};
