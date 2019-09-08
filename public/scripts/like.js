window.onload = function() {
    const dislikeElement = this.document.getElementById('dislike');
    const disLikeCountElement = this.document.getElementById('dislikeCount');

    let dislikeClicked = false;

    dislikeElement.onclick = function() {
        if (dislikeClicked) {
            dislikeElement.src = '/heart-neutral-down.png';
            dislikeElement.opacity = '1';

            disLikeCountElement.innerHTML =
                parseInt(disLikeCountElement.innerHTML, 10) - 1;

            dislikeClicked = false;
            return;
        } else {
            dislikeElement.src = '/heart-active-down.png';
            dislikeElement.style.opacity = '1';

            disLikeCountElement.innerHTML =
                parseInt(disLikeCountElement.innerHTML, 10) + 1;
            dislikeClicked = true;

            if (likedClicked) {
                likeElement.src = '/heart-neutral-up.png';
                likeCountElement.innerHTML =
                    parseInt(likeCountElement.innerHTML, 10) - 1;
                likedClicked = false;
            }
        }
    };

    dislikeElement.onmouseover = function() {
        if (dislikeClicked) {
            return;
        }
        dislikeElement.src = '/heart-active-down.png';
        dislikeElement.style.opacity = '0.5';
    };

    dislikeElement.onmouseleave = function() {
        if (dislikeClicked) {
            return;
        }

        dislikeElement.src = '/heart-neutral-down.png';
        dislikeElement.style.opacity = '1';
    };

    const likeElement = this.document.getElementById('like');
    const likeCountElement = this.document.getElementById('likeCount');

    let likedClicked = false;

    likeElement.onclick = function() {
        if (likedClicked) {
            likeElement.src = '/heart-active-up.png';
            likeElement.style.opacity = '0.5';
            likeCountElement.innerHTML =
                parseInt(likeCountElement.innerHTML, 10) - 1;
            likedClicked = false;
        } else {
            // like update
            likeElement.src = '/heart-active-up.png';
            likeElement.style.opacity = '1';

            likeCountElement.innerText =
                parseInt(likeCountElement.innerHTML, 10) + 1;
            likedClicked = true;

            // dislike update
            if (dislikeClicked) {
                dislikeElement.src = '/heart-neutral-down.png';
                disLikeCountElement.innerHTML =
                    parseInt(disLikeCountElement.innerHTML, 10) - 1;
                dislikeClicked = false;
            }
        }
    };

    likeElement.onmouseover = function() {
        if (likedClicked) {
            return;
        }

        likeElement.src = '/heart-active-up.png';
        likeElement.style.opacity = '0.5';
    };

    likeElement.onmouseleave = function() {
        if (likedClicked) {
            return;
        }
        likeElement.src = '/heart-neutral-up.png';
        likeElement.style.opacity = '1';
    };
};
