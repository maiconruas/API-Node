const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
    const res = Product.find({
        active: true
    }, 'title price slug');
    return res;
}

exports.getBySlug = (slug) => {
    const res = Product
        .findOne({
            slug: slug,
            active: true
        }, 'title description price slug tags');
    return res;
}

exports.getById = (id) => {
    const res = Product
        .findById(id);
    return res;
}

exports.getByTag = (tag) => {
    const res = Product
        .find({
            tags: tag,
            active: true
        }, 'title description price slug tags');
    return res;
}

exports.create = (data) => {
    var product = new Product(data);
    return product.save();
}

exports.update = (id, data) => {
    return Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }
        });
}

exports.delete = (id) => {
     return Product.findOneAndRemove(id);
}