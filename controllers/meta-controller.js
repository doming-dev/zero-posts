exports.postLike = (req, res, next) => {
    const postId = req.params.id;

    console.log(`likes: ${req.body.like} - dislikes: ${req.body.dislike}`);
    res.status(200).json({ message: 'Success'});
};