import express from 'express';
// import sha256 from 'sha256';
import Admin from '../models/admin.js';
import Customer from '../models/customer.js';
import Product from '../models/product.js';
import mailer from '../mailer.js';

const router = express.Router();


router.get('/administratorpanel', async (req, res) => {
  const products = await Product.find({});
  const users = await Customer.find({});
  if (req.session.admin) {
    res.render('adminPanel', {
      products,
      users,
    });
  } else {
    res.redirect('/');
  }
});

// добавление юзеров
router.post('/administratorpanel/user', async (req, res) => {
  const {
    emailCustomer,
    phoneCustomer,
    nameCustomer,
    aboutCustomer,
  } = req.body;

  const newCustomer = new Customer({
    email: emailCustomer,
    phone: phoneCustomer,
    name: nameCustomer,
    about: aboutCustomer,
  });

  const emailCheck = await Customer.findOne({
    email: emailCustomer,
  });
  const phoneCheck = await Customer.findOne({
    phone: phoneCustomer,
  });

  if (emailCheck) {
    res.status(400).send('Customer with this email already registered');
  } else if (phoneCheck) {
    res.status(400).send('Customer with this phone already registered');
  } else {
    await newCustomer.save();
  }
  res.end();
});

// удаление юзеров
router.post('/administratorpanel/user/delete', async (req, res) => {
  const id = req.body.id;
  if (id) {
    await Customer.deleteOne({
      _id: id
    });
    return res.status(200).end();
  } else {
    res.redirect('/administratorpanel');
  }
});

// редактирование юзеров
router.post('/administratorpanel/user/edit', async (req, res) => {
  const {
    id,
    email,
    phone,
    name,
    about
  } = req.body;
  const emailCheck = await Customer.findOne({
    email
  });
  const phoneCheck = await Customer.findOne({
    phone
  });

  if (emailCheck) {
    return res.status(400).send('Customer with this email already registered');
  }
  if (phoneCheck) {
    return res.status(400).send('Customer with this phone already registered');
  } else {
    let customer = await Customer.findById(id);
    customer.email = email;
    customer.phone = phone;
    customer.name = name;
    customer.about = about;
    await customer.save();
    res.status(200).end();
  }
});

// добавление товара
router.post('/administratorpanel/product', async (req, res) => {
  const {
    title,
    diameter,
    quality,
    price,
  } = req.body;
  const newProduct = new Product({
    title,
    diameter,
    quality,
    price,
  });
  if (newProduct) {
    await newProduct.save();
  } else {
    return res.status(400).send('all fields must be filled');
  }
  return res.end();
});

// logout
router.get('/administratorpanel/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/admin');
});

// валидация админа
router.post('/', async (req, res) => {
  const {
    login,
    password,
  } = req.body;
  const administartor = await Admin.findOne({
    login,
  }).lean();
  if (administartor) {
    if (sha256(password) === administartor.password) {
      req.session.admin = administartor.login;
      res.status(200).send('success');
    }
  } else {
    res.status(400).send('incorrect');
  }
});

// удаление товаров
router.post('/administratorpanel/product/delete', async (req, res) => {
  const id = req.body.id;
  if (id) {
    await Product.deleteOne({
      _id: id
    });
    return res.status(200).end();
  } else {
    res.redirect('/administratorpanel');
  }
});

// редактировние товара
router.post('/administratorpanel/product/edit', async (req, res) => {
  const {
    id,
    title,
    diameter,
    quality,
    price
  } = req.body;
  let product = await Product.findById(id);
  if (product) {
    product.title = title;
    product.diameter = diameter;
    product.quality = quality;
    product.price = price;
    await product.save();
    res.status(200).end();
  }
});

// отправка писем
router.post('/administratorpanel/sendPrice', (req, res) => {
  const {
    custemail
  } = req.body;
  if (custemail) {
    mailer(custemail);
    res.status(200).end();
  } else {
    res.status(400).end();
  }
});

export default router;
