const validate = (values) => {
    const newErrors = {};

    if (!values.title) {
        newErrors.title = "Title is required!";
    } else if (values.title.length < 5) {
        newErrors.title = "Title must be at least 5 characters!";
    }

    if (!values.imageUrl) {
        newErrors.imageUrl = "Image URL is required!";
    } else if (!/^https?:\/\/.+/.test(values.imageUrl)) {
        newErrors.imageUrl = "Provide a valid image URL!";
    }

    if (!values.genre) {
        newErrors.genre = "Genre is required!";
    } else if (values.genre.length < 3) {
        newErrors.genre = "Genre must be at least 3 characters!";
    }

    if (!values.developer) {
        newErrors.developer = "Developer is required!";
    } else if (values.developer.length < 3) {
        newErrors.developer = "Developer must be at least 3 characters!";
    }

    if (!values.players) {
        newErrors.players = "Players is required!";
    } else if (values.players < 0) {
        newErrors.players = "Players must be positive number!";
    }

    if (!values.price) {
        newErrors.price = "Price is required!";
    } else if (!values.price.includes(",")) {
        newErrors.price = "Price must be number,number!";
    }

    if (!values.description) {
        newErrors.description = "Description is required!";
    } else if (values.description.length < 10 || values.description.length > 1000) {
        newErrors.description = "Description must be between 10 and 1000 characters!";
    }


    return newErrors;
};

export default validate;