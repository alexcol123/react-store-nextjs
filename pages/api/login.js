import connectDB from '../../utils/connectDb';
import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import isEmail from 'validator/lib/isEmail';
// import isLength from 'validator/lib/isLength';

connectDB();

export default async (req, res) => {
  const { email, password } = req.body;
  try {
    //1 check if user exists
    const user = await User.findOne({ email }).select('+password');
    // 2 in not user return error
    if (!user) {
      return res.status(404).send('No user exist with that email');
    }

    // 3 check to see if the users passwords matches the one in database
    const passwordsMatch = await bcrypt.compare(password, user.password);
    // 4 if pw matches then generate a token
    if (passwordsMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
      });
      // 5 send token to  client
      res.status(200).json(token);
    } else {
      res.status(401).send('Passwords do not match');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error loggin in user');
  }
};
